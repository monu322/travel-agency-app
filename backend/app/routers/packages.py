from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional
from supabase import Client
from ..database import get_db
from ..schemas.package import (
    Package, PackageCreate, PackageUpdate, PackageList, PackageStatus,
    Itinerary, ItineraryCreate, PackageImage, PackageImageCreate
)

router = APIRouter(prefix="/packages", tags=["Packages"])


@router.get("/", response_model=List[PackageList])
async def get_packages(
    status: Optional[PackageStatus] = None,
    featured: Optional[bool] = None,
    limit: int = Query(default=50, le=100),
    offset: int = 0,
    db: Client = Depends(get_db)
):
    """Get all packages with optional filters."""
    query = db.table("packages").select("*")
    
    if status:
        query = query.eq("status", status.value)
    if featured is not None:
        query = query.eq("is_featured", featured)
    
    query = query.range(offset, offset + limit - 1).order("created_at", desc=True)
    
    response = query.execute()
    return response.data


@router.get("/{package_id}", response_model=Package)
async def get_package(package_id: str, db: Client = Depends(get_db)):
    """Get a single package by ID with itinerary and images."""
    # Get package
    package_response = db.table("packages").select("*").eq("id", package_id).single().execute()
    
    if not package_response.data:
        raise HTTPException(status_code=404, detail="Package not found")
    
    package_data = package_response.data
    
    # Get itinerary
    itinerary_response = db.table("itineraries").select("*").eq("package_id", package_id).order("day_number").execute()
    package_data["itinerary"] = itinerary_response.data or []
    
    # Get images
    images_response = db.table("package_images").select("*").eq("package_id", package_id).order("display_order").execute()
    package_data["images"] = images_response.data or []
    
    return package_data


@router.post("/", response_model=Package, status_code=201)
async def create_package(package: PackageCreate, db: Client = Depends(get_db)):
    """Create a new package with optional itinerary and images."""
    # Extract nested data
    itinerary_data = package.itinerary
    images_data = package.images
    
    # Create package
    package_dict = package.model_dump(exclude={"itinerary", "images"})
    
    # Convert date objects to strings for Supabase
    if package_dict.get("start_date"):
        package_dict["start_date"] = str(package_dict["start_date"])
    if package_dict.get("end_date"):
        package_dict["end_date"] = str(package_dict["end_date"])
    if package_dict.get("status"):
        package_dict["status"] = package_dict["status"].value
    
    response = db.table("packages").insert(package_dict).execute()
    
    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to create package")
    
    created_package = response.data[0]
    package_id = created_package["id"]
    
    # Create itinerary items
    if itinerary_data:
        for item in itinerary_data:
            item_dict = item.model_dump()
            item_dict["package_id"] = package_id
            db.table("itineraries").insert(item_dict).execute()
    
    # Create images
    if images_data:
        for img in images_data:
            img_dict = img.model_dump()
            img_dict["package_id"] = package_id
            db.table("package_images").insert(img_dict).execute()
    
    # Fetch complete package
    return await get_package(package_id, db)


@router.put("/{package_id}", response_model=Package)
async def update_package(package_id: str, package: PackageUpdate, db: Client = Depends(get_db)):
    """Update an existing package."""
    # Check if package exists
    existing = db.table("packages").select("id").eq("id", package_id).single().execute()
    
    if not existing.data:
        raise HTTPException(status_code=404, detail="Package not found")
    
    # Prepare update data (only non-None values)
    update_data = {k: v for k, v in package.model_dump().items() if v is not None}
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    # Convert date objects to strings
    if update_data.get("start_date"):
        update_data["start_date"] = str(update_data["start_date"])
    if update_data.get("end_date"):
        update_data["end_date"] = str(update_data["end_date"])
    if update_data.get("status"):
        update_data["status"] = update_data["status"].value
    
    response = db.table("packages").update(update_data).eq("id", package_id).execute()
    
    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to update package")
    
    return await get_package(package_id, db)


@router.delete("/{package_id}", status_code=204)
async def delete_package(package_id: str, db: Client = Depends(get_db)):
    """Delete a package (soft delete by setting status to archived)."""
    existing = db.table("packages").select("id").eq("id", package_id).single().execute()
    
    if not existing.data:
        raise HTTPException(status_code=404, detail="Package not found")
    
    # Soft delete by archiving
    db.table("packages").update({"status": "archived"}).eq("id", package_id).execute()
    
    return None


# Itinerary endpoints
@router.post("/{package_id}/itinerary", response_model=Itinerary, status_code=201)
async def add_itinerary_item(package_id: str, item: ItineraryCreate, db: Client = Depends(get_db)):
    """Add an itinerary item to a package."""
    # Check package exists
    package = db.table("packages").select("id").eq("id", package_id).single().execute()
    if not package.data:
        raise HTTPException(status_code=404, detail="Package not found")
    
    item_dict = item.model_dump()
    item_dict["package_id"] = package_id
    
    response = db.table("itineraries").insert(item_dict).execute()
    
    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to add itinerary item")
    
    return response.data[0]


@router.delete("/{package_id}/itinerary/{itinerary_id}", status_code=204)
async def delete_itinerary_item(package_id: str, itinerary_id: str, db: Client = Depends(get_db)):
    """Delete an itinerary item."""
    db.table("itineraries").delete().eq("id", itinerary_id).eq("package_id", package_id).execute()
    return None


# Image endpoints
@router.post("/{package_id}/images", response_model=PackageImage, status_code=201)
async def add_package_image(package_id: str, image: PackageImageCreate, db: Client = Depends(get_db)):
    """Add an image to a package gallery."""
    package = db.table("packages").select("id").eq("id", package_id).single().execute()
    if not package.data:
        raise HTTPException(status_code=404, detail="Package not found")
    
    image_dict = image.model_dump()
    image_dict["package_id"] = package_id
    
    response = db.table("package_images").insert(image_dict).execute()
    
    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to add image")
    
    return response.data[0]


@router.delete("/{package_id}/images/{image_id}", status_code=204)
async def delete_package_image(package_id: str, image_id: str, db: Client = Depends(get_db)):
    """Delete an image from package gallery."""
    db.table("package_images").delete().eq("id", image_id).eq("package_id", package_id).execute()
    return None
