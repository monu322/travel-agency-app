// API Service for connecting to the FastAPI backend
const API_BASE_URL = 'http://localhost:8000/api/v1';

export interface Package {
  id: string;
  title: string;
  description?: string;
  duration_days: number;
  price: number;
  max_guests: number;
  status: 'active' | 'draft' | 'sold_out' | 'archived';
  cover_image?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  is_featured: boolean;
  created_at?: string;
  updated_at?: string;
  itinerary?: Itinerary[];
  images?: PackageImage[];
}

export interface Itinerary {
  id: string;
  package_id: string;
  day_number: number;
  title: string;
  description?: string;
}

export interface PackageImage {
  id: string;
  package_id: string;
  image_url: string;
  caption?: string;
  display_order: number;
}

export interface CreatePackageData {
  title: string;
  description?: string;
  duration_days: number;
  price: number;
  max_guests?: number;
  status?: 'active' | 'draft' | 'sold_out' | 'archived';
  cover_image?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  is_featured?: boolean;
}

// Packages API
export const packagesApi = {
  // Get all packages
  async getAll(filters?: { status?: string; featured?: boolean }): Promise<Package[]> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.featured !== undefined) params.append('featured', String(filters.featured));
    
    const url = `${API_BASE_URL}/packages/${params.toString() ? '?' + params.toString() : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch packages');
    }
    
    return response.json();
  },

  // Get single package by ID
  async getById(id: string): Promise<Package> {
    const response = await fetch(`${API_BASE_URL}/packages/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch package');
    }
    
    return response.json();
  },

  // Create new package
  async create(data: CreatePackageData): Promise<Package> {
    const response = await fetch(`${API_BASE_URL}/packages/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to create package');
    }
    
    return response.json();
  },

  // Update package
  async update(id: string, data: Partial<CreatePackageData>): Promise<Package> {
    const response = await fetch(`${API_BASE_URL}/packages/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to update package');
    }
    
    return response.json();
  },

  // Delete (archive) package
  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/packages/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete package');
    }
  },

  // Add itinerary item
  async addItinerary(packageId: string, data: { day_number: number; title: string; description?: string }): Promise<Itinerary> {
    const response = await fetch(`${API_BASE_URL}/packages/${packageId}/itinerary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add itinerary item');
    }
    
    return response.json();
  },

  // Delete itinerary item
  async deleteItinerary(packageId: string, itineraryId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/packages/${packageId}/itinerary/${itineraryId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete itinerary item');
    }
  },

  // Add image
  async addImage(packageId: string, data: { image_url: string; caption?: string; display_order?: number }): Promise<PackageImage> {
    const response = await fetch(`${API_BASE_URL}/packages/${packageId}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add image');
    }
    
    return response.json();
  },

  // Delete image
  async deleteImage(packageId: string, imageId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/packages/${packageId}/images/${imageId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete image');
    }
  },
};

// Health check
export const healthCheck = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api/v1', '')}/health`);
    return response.ok;
  } catch {
    return false;
  }
};
