# LogInFastApi
Fullstack Authentication System: FastAPI (Python) + React. Modern UI with lime green aesthetics, sliding panels, and PostgreSQL integration.

# 🟢 Modern Login Fullstack (FastAPI + React)

Sistema de autenticación completo con un diseño moderno y fluido, utilizando una arquitectura desacoplada (Frontend y Backend) y persistencia en base de datos relacional.

## 🎨 Características Visuales
- **Estética "Lime & Dark":** Interfaz moderna optimizada para modo oscuro con acentos verde lima.
- **Sliding UI:** Transiciones suaves entre los formularios de Login y Registro sin recargar la página.
- **Diseño Responsivo:** Adaptado para una experiencia de usuario profesional.

## 🛠️ Tecnologías
- **Backend:** - [FastAPI](https://fastapi.tiangolo.com/) - Framework de alto rendimiento para Python.
  - [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional.
  - [Pydantic](https://docs.pydantic.dev/) - Validación de datos y esquemas.
- **Frontend:**
  - [React](https://reactjs.org/) - Biblioteca para interfaces de usuario.
  - [Axios](https://axios-http.com/) - Cliente HTTP para comunicación con la API.
  - **CSS3** - Animaciones avanzadas y variables dinámicas.

## ⚙️ Cómo funciona
1. El **Frontend** captura los datos del usuario y los envía como un objeto **JSON** mediante Axios.
2. El **Backend** recibe la petición, valida la estructura con **Pydantic** y verifica las credenciales en **PostgreSQL**.
3. Si la autenticación es exitosa, el estado de React cambia para mostrar el **Dashboard** de forma instantánea.

## 🚀 Instalación y Uso

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
