# Wanderlust Travel API Backend

Python FastAPI backend with Supabase integration for the Wanderlust travel app.

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Supabase account with project

### Setup

1. **Create virtual environment:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Configure environment:**
Create a `.env` file in the backend folder with:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_PROJECT_ID=your_project_id
```

4. **Create database tables:**
Run the SQL in `database/schema.sql` in your Supabase SQL Editor.

5. **Start the server:**
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## 📚 API Documentation

Once running, access:
- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

## 🔌 API Endpoints

### Health
- `GET /` - API info and health check
- `GET /health` - Health status

### Packages
- `GET /api/v1/packages/` - List all packages (with filters)
- `GET /api/v1/packages/{id}` - Get package details
- `POST /api/v1/packages/` - Create a new package
- `PUT /api/v1/packages/{id}` - Update a package
- `DELETE /api/v1/packages/{id}` - Archive a package

### Itinerary
- `POST /api/v1/packages/{id}/itinerary` - Add itinerary item
- `DELETE /api/v1/packages/{id}/itinerary/{item_id}` - Delete itinerary item

### Package Images
- `POST /api/v1/packages/{id}/images` - Add gallery image
- `DELETE /api/v1/packages/{id}/images/{image_id}` - Delete image

## 📁 Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI application
│   ├── config.py        # Settings/configuration
│   ├── database.py      # Supabase client
│   ├── routers/
│   │   ├── __init__.py
│   │   └── packages.py  # Package endpoints
│   └── schemas/
│       ├── __init__.py
│       └── package.py   # Pydantic models
├── database/
│   └── schema.sql       # Database schema
├── .env                 # Environment variables (NOT committed)
└── requirements.txt     # Python dependencies
```

## 🗄️ Database Schema

### Tables
- **profiles** - User profiles (extends Supabase auth)
- **packages** - Travel packages
- **package_images** - Package gallery images
- **itineraries** - Day-by-day itinerary
- **departures** - Specific departure dates
- **bookings** - Customer bookings
- **travelers** - Travelers per booking
- **updates** - Notifications/updates

## 🔒 Security

- Environment variables stored in `.env` (gitignored)
- Row Level Security (RLS) enabled on all tables
- CORS configured for frontend domains

## 📝 Example Requests

### Create a Package
```bash
curl -X POST http://localhost:8000/api/v1/packages/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Bali Paradise Retreat",
    "description": "7-day tropical getaway",
    "duration_days": 7,
    "price": 1200,
    "max_guests": 15,
    "location": "Bali, Indonesia",
    "status": "active"
  }'
```

### Get All Packages
```bash
curl http://localhost:8000/api/v1/packages/
```

### Filter by Status
```bash
curl http://localhost:8000/api/v1/packages/?status=active
```
