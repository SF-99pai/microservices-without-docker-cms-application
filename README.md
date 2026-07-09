# College Management System

A microservice-based College Management System built with FastAPI, React, Vite, SQLAlchemy, and PostgreSQL. The application provides a simple dashboard to manage students, teachers, and departments through a modern frontend and a centralized API gateway.

## Overview

This project is designed as a modular system where:

- A React frontend provides the user interface.
- An API gateway routes requests to the correct microservice.
- Separate FastAPI services manage students, teachers, and departments.
- SQLAlchemy handles database access and models.

The current UI allows users to:

- View records in tables
- Add new records
- Edit existing records
- Delete records

## Features

- Student management with CRUD operations
- Teacher management with CRUD operations
- Department management with CRUD operations
- Responsive dashboard UI
- API gateway for centralized routing
- CORS support for frontend access
- Database-backed persistence using PostgreSQL

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- React Icons

### Backend
- FastAPI
- Uvicorn
- SQLAlchemy
- Pydantic
- Python-dotenv
- HTTPX for gateway proxying

### Database
- PostgreSQL
- Environment-based configuration via DATABASE_URL

## Project Structure

```text
emp.ci_cd/
├── api_gateway/
│   ├── app/
│   │   ├── config.py
│   │   ├── main.py
│   │   ├── proxy.py
│   │   └── routes.py
│   └── requirements.txt
├── department_services/
│   ├── app/
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── schemas.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── student_services/
│   ├── app/
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── schemas.py
│   └── requirements.txt
├── teacher_services/
│   ├── app/
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── schemas.py
│   └── requirements.txt
└── README.md
```

## Application Flow

1. The frontend runs on Vite and communicates with the API gateway.
2. The gateway proxies requests to the relevant microservice.
3. Each microservice uses SQLAlchemy models and CRUD logic to interact with its database.
4. Data is returned to the frontend and displayed in tables/forms.

## Default Ports

- Frontend: http://localhost:5173
- API gateway: http://localhost:8000
- Student service: http://localhost:8001
- Teacher service: http://localhost:8002
- Department service: http://localhost:8003

## Prerequisites

Make sure the following are installed:

- Python 3.10+
- Node.js 18+
- PostgreSQL
- pip
- npm

## Environment Setup

Create a .env file in each service directory with a DATABASE_URL value.

Example:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/student_cms
```

Use separate database names for each service, for example:

- student_cms
- teacher_cms
- dept_cms

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd emp.ci_cd
```

### 2. Create and activate a Python virtual environment

```bash
python -m venv .venv
.venv\Scripts\activate
```

### 3. Install Python dependencies

Install requirements in each backend service folder:

```bash
cd api_gateway
pip install -r requirements.txt

cd ../student_services
pip install -r requirements.txt

cd ../teacher_services
pip install -r requirements.txt

cd ../department_services
pip install -r requirements.txt
```

### 4. Install frontend dependencies

```bash
cd ../frontend
npm install
```

## Running the Application

### Start the backend services

Run each service in its own terminal.

#### API Gateway

```bash
cd api_gateway
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

#### Student Service

```bash
cd student_services
uvicorn app.main:app --host 0.0.0.0 --port 8001 --reload
```

#### Teacher Service

```bash
cd teacher_services
uvicorn app.main:app --host 0.0.0.0 --port 8002 --reload
```

#### Department Service

```bash
cd department_services
uvicorn app.main:app --host 0.0.0.0 --port 8003 --reload
```

### Start the frontend

```bash
cd frontend
npm run dev -- --host 0.0.0.0
```

Then open:

- http://localhost:5173

## API Endpoints

The gateway exposes the following API routes:

### Students
- GET /api/students
- POST /api/students
- GET /api/students/{id}
- PUT /api/students/{id}
- DELETE /api/students/{id}

Example student payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "course": "Computer Science"
}
```

### Teachers
- GET /api/teachers
- POST /api/teachers
- GET /api/teachers/{id}
- PUT /api/teachers/{id}
- DELETE /api/teachers/{id}

Example teacher payload:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Mathematics"
}
```

### Departments
- GET /api/departments
- POST /api/departments
- GET /api/departments/{id}
- PUT /api/departments/{id}
- DELETE /api/departments/{id}

Example department payload:

```json
{
  "name": "Computer Science",
  "hod": "Dr. Alice Brown",
  "block": "A"
}
```

## Database Model Summary

### Student
- id
- name
- email
- course

### Teacher
- id
- name
- email
- subject

### Department
- id
- name
- hod
- block

## Notes

- The frontend is configured to call the API gateway by default.
- The gateway proxies requests to the service endpoints and handles CORS for development.
- The current implementation is suitable for local development and demo use.

## Future Improvements

Possible enhancements include:

- Authentication and authorization
- Role-based access control
- Search and filtering
- Pagination
- Better form validation
- Docker and Docker Compose support
- Deployment configuration for cloud hosting
