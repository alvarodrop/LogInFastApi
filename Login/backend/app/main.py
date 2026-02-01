from fastapi import FastAPI
from .database import engine, Base
from .models import User
from .auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Login API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "Backend funcionando"}
