from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import date, datetime
from enum import Enum


class PackageStatus(str, Enum):
    active = "active"
    draft = "draft"
    sold_out = "sold_out"
    archived = "archived"


class ItineraryBase(BaseModel):
    day_number: int
    title: str
    description: Optional[str] = None


class ItineraryCreate(ItineraryBase):
    pass


class Itinerary(ItineraryBase):
    id: str
    package_id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class PackageImageBase(BaseModel):
    image_url: str
    caption: Optional[str] = None
    display_order: int = 0


class PackageImageCreate(PackageImageBase):
    pass


class PackageImage(PackageImageBase):
    id: str
    package_id: str
    created_at: datetime

    class Config:
        from_attributes = True


class PackageBase(BaseModel):
    title: str
    description: Optional[str] = None
    duration_days: int = Field(..., ge=1)
    price: float = Field(..., ge=0)
    max_guests: int = Field(default=20, ge=1)
    status: PackageStatus = PackageStatus.draft
    cover_image: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    location: Optional[str] = None
    is_featured: bool = False


class PackageCreate(PackageBase):
    itinerary: Optional[List[ItineraryCreate]] = None
    images: Optional[List[PackageImageCreate]] = None


class PackageUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    duration_days: Optional[int] = Field(default=None, ge=1)
    price: Optional[float] = Field(default=None, ge=0)
    max_guests: Optional[int] = Field(default=None, ge=1)
    status: Optional[PackageStatus] = None
    cover_image: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    location: Optional[str] = None
    is_featured: Optional[bool] = None


class Package(PackageBase):
    id: str
    created_at: datetime
    updated_at: datetime
    itinerary: List[Itinerary] = []
    images: List[PackageImage] = []

    class Config:
        from_attributes = True


class PackageList(BaseModel):
    id: str
    title: str
    duration_days: int
    price: float
    status: PackageStatus
    cover_image: Optional[str]
    start_date: Optional[date]
    end_date: Optional[date]
    location: Optional[str]
    is_featured: bool

    class Config:
        from_attributes = True
