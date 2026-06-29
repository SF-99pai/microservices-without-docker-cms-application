from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .database import get_db
from . import crud, schemas

router = APIRouter(prefix="/departments", tags=["Departments"])


@router.post("/", response_model=schemas.DepartmentResponse)
def create(department: schemas.DepartmentCreate, db: Session = Depends(get_db)):
    return crud.create_department(db, department)


@router.get("/", response_model=list[schemas.DepartmentResponse])
def read_all(db: Session = Depends(get_db)):
    return crud.get_departments(db)


@router.get("/{department_id}", response_model=schemas.DepartmentResponse)
def read_one(department_id: int, db: Session = Depends(get_db)):
    department = crud.get_department(db, department_id)

    if not department:
        raise HTTPException(status_code=404, detail="Department not found")

    return department


@router.put("/{department_id}", response_model=schemas.DepartmentResponse)
def update(department_id: int, department: schemas.DepartmentCreate,
           db: Session = Depends(get_db)):
    updated = crud.update_department(db, department_id, department)

    if not updated:
        raise HTTPException(status_code=404, detail="Department not found")

    return updated


@router.delete("/{department_id}")
def delete(department_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_department(db, department_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Department not found")

    return {"message": "Department deleted successfully"}