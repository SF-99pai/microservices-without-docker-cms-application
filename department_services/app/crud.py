from sqlalchemy.orm import Session
from . import models, schemas


def create_department(db: Session, department: schemas.DepartmentCreate):
    db_department = models.Department(**department.model_dump())
    db.add(db_department)
    db.commit()
    db.refresh(db_department)
    return db_department


def get_departments(db: Session):
    return db.query(models.Department).all()


def get_department(db: Session, department_id: int):
    return db.query(models.Department).filter(
        models.Department.id == department_id
    ).first()


def update_department(db: Session, department_id: int, department: schemas.DepartmentCreate):
    db_department = get_department(db, department_id)

    if db_department:
        db_department.name = department.name
        db_department.hod = department.hod
        db_department.block = department.block

        db.commit()
        db.refresh(db_department)

    return db_department


def delete_department(db: Session, department_id: int):
    db_department = get_department(db, department_id)

    if db_department:
        db.delete(db_department)
        db.commit()

    return db_department