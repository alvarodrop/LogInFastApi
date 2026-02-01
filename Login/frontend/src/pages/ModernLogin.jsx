import { useState } from "react";
import axios from "axios";
import "./ModernLogin.css"; // Importamos el css

// Componente ModernLogin con animaciones y UX
export default function ModernLogin({ onLoginSuccess }) {
  const [isActive, setIsActive] = useState(false); // Controla la animación del panel
  
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  //Limpiar mensajes previos
  const [mensaje, setMensaje] = useState("");
  // Función para actualizar los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Función para manejar el registro
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", formData); //Envia datos al backend con axios y espera respuesta
      setMensaje("¡Cuenta creada! Ahora inicia sesión.");
      setIsActive(false); // Movemos el panel al Login automáticamente
    } catch (error) {
      setMensaje("Error al registrar: " + (error.response?.data?.detail || "Datos inválidos"));
    }
  };

  //Función para manejar el login
  const handleLogin = async (e) => {
  e.preventDefault();
  setMensaje(""); // Limpiamos mensajes anteriores
  
  try {
    const response = await axios.post("http://localhost:8000/login", {
      email: formData.email, 
      password: formData.password
    });

    // 1. Mostrar alerta visual inmediata
    alert("¡Login exitoso! Bienvenido."); 

    // 2. Si usas la función para cambiar de pantalla (App.js)
    if(onLoginSuccess) {
      onLoginSuccess(response.data.username || formData.email);
    }
    
  } catch (error) {
    // Si hay error, mostramos el detalle que viene del Backend
    setMensaje(error.response?.data?.detail || "Error en las credenciales");
  }
};

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      
      {/* FORMULARIO DE REGISTRO */}
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Crear Cuenta</h1>
          <div className="social-icons">
            <a href="#!" className="icon" onClick={(e) => e.preventDefault()}>
                <i className="fa-brands fa-google-plus-g"></i>
            </a>
            {/* Otros iconos... */}
          </div>
          <span>o usa tu email para registrarte</span>
          <input type="text" name="username" placeholder="Nombre" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
          <button type="submit">Registrarse</button>
        </form>
      </div>

      {/* FORMULARIO DE LOGIN */}
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Iniciar Sesión</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
          </div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
          {/* Para el "¿Olvidaste tu contraseña?" */}
            <span className="forgot-password" onClick={() => alert("Función no implementada")} style={{ cursor: 'pointer', fontSize: '13px', margin: '15px 0 10px' }}>
                ¿Olvidaste tu contraseña?
            </span>
          <button type="submit">Entrar</button>
          {mensaje && <p style={{color: "red", fontSize: "12px"}}>{mensaje}</p>}
        </form>
      </div>

      {/* PANEL DE CONTROL (EL QUE SE MUEVE) */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>¡Bienvenido!</h1>
            <p>Introduce tus datos para crear una cuenta</p>
            <button className="hidden" onClick={() => setIsActive(false)}>Iniciar Sesión</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>¡Hola, Amigo!</h1>
            <p>Regístrate con tus datos personales para logearte</p>
            <button className="hidden" onClick={() => setIsActive(true)}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}