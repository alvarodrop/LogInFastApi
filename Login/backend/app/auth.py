from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from .database import SessionLocal
from .models import User
from pydantic import BaseModel

# 1. Esquemas para recibir JSON
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def hash_password(password: str):
    return pwd_context.hash(password)
@router.post("/register")
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == user_data.email).first():
        raise HTTPException(status_code=400, detail="Email ya registrado")

    user = User(
        username=user_data.username,
        email=user_data.email,
        password=hash_password(user_data.password)
    )
    db.add(user)
    db.commit()
    return {"msg": "Usuario creado"}


@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):    
    user = db.query(User).filter(User.email == data.email).first()
    
    if not user or not pwd_context.verify(data.password, user.password):
        raise HTTPException(status_code=400, detail="Credenciales inválidas")
        
    return {"msg": "Login exitoso", "username": user.username}