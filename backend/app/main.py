from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import engine, Base
from app.api import tasks, webhooks


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Tikki Flow",
    description="B2B Task Board App",
    version="1.0.0"
)

origins = [
    settings.FRONTEND_URL,
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks.router)
app.include_router(webhooks.router)