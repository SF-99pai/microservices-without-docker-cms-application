from sqlalchemy.orm import Session
from . import models, schemas


def create_teacher(db: Session, teacher: schemas.TeacherCreate):
    db_teacher = models.Teacher(**teacher.model_dump())
    db.add(db_teacher)
    db.commit()
    db.refresh(db_teacher)
    return db_teacher


def get_teachers(db: Session):
    return db.query(models.Teacher).all()


def get_teacher(db: Session, teacher_id: int):
    return db.query(models.Teacher).filter(
        models.Teacher.id == teacher_id
    ).first()


def update_teacher(db: Session, teacher_id: int, teacher: schemas.TeacherCreate):
    db_teacher = get_teacher(db, teacher_id)

    if db_teacher:
        db_teacher.name = teacher.name
        db_teacher.email = teacher.email
        db_teacher.subject = teacher.subject

        db.commit()
        db.refresh(db_teacher)

    return db_teacher


def delete_teacher(db: Session, teacher_id: int):
    db_teacher = get_teacher(db, teacher_id)

    if db_teacher:
        db.delete(db_teacher)
        db.commit()

    return db_teacher