from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import (
    student_router,
    teacher_router,
    department_router,
)

app = FastAPI(title="API Gateway")

# Allow React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(student_router)
app.include_router(teacher_router)
app.include_router(department_router)


@app.get("/", tags=["Home"])
def read_root():
    return {
        "message": "API Gateway is running"
    }