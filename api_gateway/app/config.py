from pathlib import Path
from dotenv import load_dotenv
import os

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

STUDENT_SERVICES_URL = os.getenv("STUDENT_SERVICES_URL", "http://localhost:8001")
TEACHER_SERVICES_URL = os.getenv("TEACHER_SERVICES_URL", "http://localhost:8002")
DEPARTMENT_SERVICES_URL = os.getenv("DEPARTMENT_SERVICES_URL", "http://localhost:8003")

# Backward-compatible aliases
STUDENT_SERVICES = STUDENT_SERVICES_URL
TEACHER_SERVICES = TEACHER_SERVICES_URL
DEPARTMENT_SERVICES = DEPARTMENT_SERVICES_URL