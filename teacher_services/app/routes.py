from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .database import get_db
from . import crud, schemas

router = APIRouter(prefix="/teachers", tags=["Teachers"])


@router.post("/", response_model=schemas.TeacherResponse)
def create(teacher: schemas.TeacherCreate, db: Session = Depends(get_db)):
    return crud.create_teacher(db, teacher)


@router.get("/", response_model=list[schemas.TeacherResponse])
def read_all(db: Session = Depends(get_db)):
    return crud.get_teachers(db)


@router.get("/{teacher_id}", response_model=schemas.TeacherResponse)
def read_one(teacher_id: int, db: Session = Depends(get_db)):
    teacher = crud.get_teacher(db, teacher_id)

    if not teacher:
        raise HTTPException(status_code=404, detail="Teacher not found")

    return teacher


@router.put("/{teacher_id}", response_model=schemas.TeacherResponse)
def update(teacher_id: int, teacher: schemas.TeacherCreate,
           db: Session = Depends(get_db)):
    updated = crud.update_teacher(db, teacher_id, teacher)

    if not updated:
        raise HTTPException(status_code=404, detail="Teacher not found")

    return updated


@router.delete("/{teacher_id}")
def delete(teacher_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_teacher(db, teacher_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Teacher not found")

    return {"message": "Teacher deleted successfully"}