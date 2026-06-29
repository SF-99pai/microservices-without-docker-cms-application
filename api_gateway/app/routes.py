from fastapi import APIRouter, Request

from app.proxy import (
    proxy_student_request,
    proxy_teacher_request,
    proxy_department_request,
)

# =====================================================
# ROUTERS
# =====================================================

student_router = APIRouter(tags=["Student API"])
teacher_router = APIRouter(tags=["Teacher API"])
department_router = APIRouter(tags=["Department API"])


# =====================================================
# STUDENT APIs
# =====================================================

@student_router.get("/students")
async def get_students():
    return await proxy_student_request("/students")


@student_router.post("/students")
async def create_student(request: Request):
    body = await request.json()
    return await proxy_student_request(
        "/students",
        method="POST",
        json_body=body
    )


@student_router.get("/students/{student_id}")
async def get_student(student_id: int):
    return await proxy_student_request(
        f"/students/{student_id}"
    )


@student_router.put("/students/{student_id}")
async def update_student(student_id: int, request: Request):
    body = await request.json()
    return await proxy_student_request(
        f"/students/{student_id}",
        method="PUT",
        json_body=body
    )


@student_router.delete("/students/{student_id}")
async def delete_student(student_id: int):
    return await proxy_student_request(
        f"/students/{student_id}",
        method="DELETE"
    )


# =====================================================
# TEACHER APIs
# =====================================================

@teacher_router.get("/teachers")
async def get_teachers():
    return await proxy_teacher_request("/teachers")


@teacher_router.post("/teachers")
async def create_teacher(request: Request):
    body = await request.json()
    return await proxy_teacher_request(
        "/teachers",
        method="POST",
        json_body=body
    )


@teacher_router.get("/teachers/{teacher_id}")
async def get_teacher(teacher_id: int):
    return await proxy_teacher_request(
        f"/teachers/{teacher_id}"
    )


@teacher_router.put("/teachers/{teacher_id}")
async def update_teacher(teacher_id: int, request: Request):
    body = await request.json()
    return await proxy_teacher_request(
        f"/teachers/{teacher_id}",
        method="PUT",
        json_body=body
    )


@teacher_router.delete("/teachers/{teacher_id}")
async def delete_teacher(teacher_id: int):
    return await proxy_teacher_request(
        f"/teachers/{teacher_id}",
        method="DELETE"
    )


# =====================================================
# DEPARTMENT APIs
# =====================================================

@department_router.get("/departments")
async def get_departments():
    return await proxy_department_request("/departments")


@department_router.post("/departments")
async def create_department(request: Request):
    body = await request.json()
    return await proxy_department_request(
        "/departments",
        method="POST",
        json_body=body
    )


@department_router.get("/departments/{department_id}")
async def get_department(department_id: int):
    return await proxy_department_request(
        f"/departments/{department_id}"
    )


@department_router.put("/departments/{department_id}")
async def update_department(department_id: int, request: Request):
    body = await request.json()
    return await proxy_department_request(
        f"/departments/{department_id}",
        method="PUT",
        json_body=body
    )


@department_router.delete("/departments/{department_id}")
async def delete_department(department_id: int):
    return await proxy_department_request(
        f"/departments/{department_id}",
        method="DELETE"
    )