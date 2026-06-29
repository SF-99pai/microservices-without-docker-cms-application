from pydantic import BaseModel


class TeacherBase(BaseModel):
    name: str
    email: str
    subject: str


class TeacherCreate(TeacherBase):
    pass


class TeacherResponse(TeacherBase):
    id: int

    class Config:
        from_attributes = True