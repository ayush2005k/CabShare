# 🚖 CabShare — Smart Cab Pooling Platform(new updates going on)

CabShare is a full-stack cab pooling web application that allows users to create rides, discover available rides, and join rides securely using JWT authentication.

The project is built with a modern full-stack architecture using:

- Django REST Framework (Backend API)
- MySQL Database
- Vanilla JavaScript + HTML + Tailwind CSS (Frontend)
- JWT Authentication
- REST APIs

This project simulates a real-world ride-sharing and cab pooling workflow where users can:

- Register/Login securely
- Create rides
- Browse available rides
- Join rides
- Manage bookings
- Interact with live backend APIs

---

# 🌐 Project Overview

CabShare solves the common problem of:

- Expensive solo cab rides
- Traffic congestion
- Underutilized vehicle capacity
- Lack of organized ride-sharing systems

The platform connects:

- Drivers willing to offer rides
- Riders looking for shared transportation

The application supports a complete ride-sharing workflow with real-time backend integration.

---

# ✨ Features

## 🔐 Authentication System

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Token-based Authorization
- Secure API Access
- Logout Functionality

---

## 🚗 Ride Management

- Create Ride
- View Available Rides
- Dynamic Ride Fetching
- Real-time Ride Listing
- Seat Availability Tracking
- Ride Status Handling

---

## 🤝 Booking System

- Join Existing Rides
- Authenticated Ride Booking
- Automatic Seat Reduction
- Database Booking Persistence
- User-Ride Relationship Handling

---

## 🎨 Frontend Features

- Modern Minimal UI
- Responsive Design
- Dashboard Interface
- Dynamic Ride Rendering
- Protected Frontend Pages
- Tailwind CSS Styling
- Interactive User Experience

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- Tailwind CSS
- Vanilla JavaScript (ES6+)
- Vite

---

## Backend

- Python
- Django
- Django REST Framework
- Simple JWT

---

## Database

- MySQL

---

## Authentication

- JWT Tokens
- Access Token
- Refresh Token

---

## Development Tools

- VS Code
- Git
- GitHub
- Postman

---

# 🏗️ Project Architecture

```text
Frontend (HTML/CSS/JS)
        ↓
REST API Calls (fetch)
        ↓
Django REST Framework APIs
        ↓
JWT Authentication Layer
        ↓
MySQL Database
```

---

# 📂 Project Structure

```bash
cabshare---cab-pooling-app/
│
├── backend/
│   ├── bookings/
│   ├── rides/
│   ├── users/
│   ├── config/
│   └── manage.py
│
├── css/
│   └── styles.css
│
├── js/
│   ├── auth.js
│   ├── utils.js
│   ├── api.js
│   └── rides.js
│
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── create-ride.html
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/cabshare.git
cd cabshare
```

---

## 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## 3️⃣ Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ Setup MySQL Database

Create MySQL database:

```sql
CREATE DATABASE cabshare;
```

Update database credentials in:

```python
backend/config/settings.py
```

---

## 5️⃣ Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 6️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

---

## 7️⃣ Start Django Backend

```bash
python manage.py runserver
```

Backend runs on:

```text
http://127.0.0.1:8000/
```

---

## 8️⃣ Install Frontend Dependencies

```bash
npm install
```

---

## 9️⃣ Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:3000/
```

---

# 🔑 API Endpoints

## Authentication APIs

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/auth/register/ | Register User |
| POST | /api/auth/login/ | Login User |

---

## Ride APIs

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | /api/rides/ | Get All Rides |
| POST | /api/rides/create/ | Create Ride |

---

## Booking APIs

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/bookings/join/<id>/ | Join Ride |

---

# 🔐 JWT Authentication Flow

```text
User Login
    ↓
Backend Generates JWT Tokens
    ↓
Frontend Stores Tokens
    ↓
Protected APIs Use Bearer Token
    ↓
Backend Verifies Authentication
```

---

# 🧠 Key Concepts Implemented

This project demonstrates:

- REST API Development
- JWT Authentication
- Database Relationships
- CRUD Operations
- Frontend-Backend Integration
- Protected Routes
- Dynamic Rendering
- Fetch API Usage
- Authentication Middleware
- Real-time Database Persistence

---

# 📸 Major Workflows

## User Authentication

```text
Register → Login → Receive JWT → Access Dashboard
```

---

## Ride Creation Workflow

```text
Create Ride Form
        ↓
Frontend fetch()
        ↓
Django API
        ↓
MySQL Database
        ↓
Dashboard Rendering
```

---

## Ride Booking Workflow

```text
User Clicks Join
        ↓
JWT Token Sent
        ↓
Booking Created
        ↓
Seats Reduced
        ↓
Updated Ride Data Rendered
```

---

# 🚀 Future Scope

This project can be extended into a production-ready startup-level platform.

---

## 🔮 Planned Features

### 👤 User Profile System

- Profile Editing
- Profile Pictures
- Ride History
- User Ratings

---

### 📍 Live Maps Integration

- Google Maps API
- Live Route Tracking
- Distance Calculation
- ETA Prediction

---

### 💬 Real-time Chat System

- Driver-Rider Chat
- Notifications
- Live Updates

---

### 💳 Online Payment Integration

- Razorpay
- Stripe
- Wallet System
- Ride Fare Splitting

---

### 📱 Mobile Application

- React Native App
- Android Support
- iOS Support

---

### 🔔 Notification System

- Ride Alerts
- Booking Notifications
- Email Verification
- SMS Alerts

---

### ⭐ Review & Rating System

- Driver Ratings
- Rider Ratings
- Trust Score

---

### 🤖 AI-Based Features

- Smart Ride Matching
- Demand Prediction
- Route Optimization
- AI Fare Suggestions

---

### 📊 Admin Dashboard

- User Analytics
- Ride Analytics
- Revenue Dashboard
- Booking Statistics

---

# 📈 Learning Outcomes

Through this project, the developer learned:

- Full-stack application development
- REST API architecture
- JWT authentication workflow
- Database design
- Real-world CRUD operations
- Frontend/backend communication
- API testing with Postman
- Git & GitHub workflow
- Production-level project structure

---

# 💡 Challenges Solved

Some major engineering challenges solved during development:

- JWT token handling
- Protected frontend routing
- Dynamic API integration
- Real-time data rendering
- Authentication persistence
- Database relationship handling
- Frontend/backend synchronization

---

# 🎯 Current Project Status

## ✅ Completed

- Authentication System
- Ride Creation
- Ride Listing
- Ride Booking
- Dynamic Dashboard
- Backend APIs
- Frontend Integration
- Database Integration

---

## 🟡 In Progress / Planned

- User Profiles
- My Bookings Section
- Deployment
- Notifications
- Real-time Updates

---

# 🚀 Deployment Plan

## Frontend

- Vercel / Netlify

## Backend

- Render / Railway

## Database

- Railway MySQL / Neon / Supabase

---

# 🌍 Live Deployment

## 🚀 Frontend Live

👉 https://cabshare-web.netlify.app/

---

# 👨‍💻 Author

Developed by Ayush Kumar Singh.

This project was built as a full-stack portfolio and internship-level engineering project focused on modern web development, authentication systems, API integration, and scalable ride-sharing architecture.

---

# ⭐ Support

If you found this project helpful:

- Star the repository ⭐
- Fork the project 🍴
- Contribute improvements 🚀

---

# 📌 Project Status

🚧 Project Under Active Development

More exciting features and production-level improvements are coming soon.

