import httpx
from fastapi import HTTPException
from app.config import (
    STUDENT_SERVICES_URL,
    TEACHER_SERVICES_URL,
    DEPARTMENT_SERVICES_URL,
)


async def proxy_request(
    path: str,
    service_url: str,
    method: str = "GET",
    json_body: dict | None = None,
):
    async with httpx.AsyncClient(follow_redirects=True) as client:
        try:
            response = await client.request(
                method=method,
                url=f"{service_url}{path}",
                json=json_body,
            )

            response.raise_for_status()

            # Handle empty responses (e.g. DELETE)
            if response.status_code == 204:
                return {"message": "Success"}

            # Return JSON if possible
            try:
                return response.json()
            except Exception:
                return {"message": response.text}

        except httpx.HTTPStatusError as exc:
            raise HTTPException(
                status_code=exc.response.status_code,
                detail=exc.response.text,
            )

        except httpx.RequestError as exc:
            raise HTTPException(
                status_code=502,
                detail=f"Unable to reach service: {exc}",
            )


async def proxy_student_request(
    path: str,
    method: str = "GET",
    json_body: dict | None = None,
):
    return await proxy_request(
        path,
        STUDENT_SERVICES_URL,
        method,
        json_body,
    )


async def proxy_teacher_request(
    path: str,
    method: str = "GET",
    json_body: dict | None = None,
):
    return await proxy_request(
        path,
        TEACHER_SERVICES_URL,
        method,
        json_body,
    )


async def proxy_department_request(
    path: str,
    method: str = "GET",
    json_body: dict | None = None,
):
    return await proxy_request(
        path,
        DEPARTMENT_SERVICES_URL,
        method,
        json_body,
    )