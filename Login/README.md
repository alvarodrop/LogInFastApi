# 🟢 Modern Login Fullstack (FastAPI + React)

Sistema de autenticación completo con un diseño moderno y fluido, utilizando una arquitectura desacoplada (Frontend y Backend) y persistencia en base de datos PostgreSQL.

## 🚀 Características Principales
- **Interfaz "Sliding Panel":** Transiciones suaves entre Login y Registro en una sola vista.
- **Diseño Dark & Lime:** Estética moderna optimizada con colores verde lima y tonos oscuros.
- **Validación Robusta:** Gestión de datos con esquemas de Pydantic en el servidor y cifradoi de contraseña.
- **Arquitectura Escalable:** Separación clara entre la lógica de cliente (React) y servidor (FastAPI).

## 🛠️ Stack Tecnológico
- **Frontend:** React.js, Axios, CSS3 (Animaciones avanzadas).
              Basado en este pryecto de github: https://github.com/AsmrProg-YT/Modern-Login
- **Backend:** Python, FastAPI, Uvicorn.
- **Base de Datos:** PostgreSQL.



## 📂 Estructura del Proyecto
El repositorio está organizado de la siguiente manera:
- `/frontend`: Aplicación React con el diseño de login y dashboard.
- `/backend`: API REST construida con FastAPI para la gestión de usuarios.

## ⚙️ Instalación y Configuración

1. Clonar el repositorio

git clone [https://github.com/alvarodrop/LogInFastApi.git](https://github.com/alvarodrop/LogInFastApi.git)
cd LogInFastApi 

2. Configurar el Backend 🐍
Entra en la carpeta del servidor y prepara el entorno:


cd Login/backend
python -m venv venv

# Activar en Windows:
venv\Scripts\activate  
pip install fastapi uvicorn pydantic psycopg2
uvicorn main:app --reload

3. Configurar el Frontend ⚛️
Abre una nueva terminal, entra en la carpeta del cliente e instala las librerías:


cd Login/frontend
npm install
npm start