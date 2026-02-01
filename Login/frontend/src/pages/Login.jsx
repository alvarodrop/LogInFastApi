import { useState } from "react";
import axios from "axios";

export default function Auth() {
  // 1. Un solo estado para saber si estamos en Login o Registro
  const [esLogin, setEsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "", // Solo se usará en registro
    email: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState("");

  // 2. Función única para actualizar cualquier campo del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("Procesando...");
    
    // Elegimos la URL dinámicamente
    const endpoint = esLogin ? "/login" : "/register";
    
    try {
      const response = await axios.post(`http://localhost:8000${endpoint}`, formData);
      
      if (esLogin) {
        setMensaje("¡Bienvenido! Login correcto.");
      } else {
        setMensaje("Usuario creado. ¡Ahora puedes iniciar sesión!");
        setEsLogin(true); // Cambiamos automáticamente a la pestaña de login
      }
      console.log("Respuesta:", response.data);
    } catch (error) {
      setMensaje(error.response?.data?.detail || "Error en la operación");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>{esLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>

        {/* El campo Username solo aparece si NO es login */}
        {!esLogin && (
          <input
            name="username"
            placeholder="Nombre de Usuario"
            onChange={handleChange}
            style={styles.input}
            required
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          {esLogin ? "Entrar" : "Registrarse"}
        </button>

        <p onClick={() => { setEsLogin(!esLogin); setMensaje(""); }} style={styles.link}>
          {esLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </p>

        {mensaje && <p style={{ color: mensaje.includes("Error") ? "red" : "blue" }}>{mensaje}</p>}
      </form>
    </div>
  );
}

// Estilos rápidos para que se vea bien
const styles = {
  container: { display: "flex", justifyContent: "center", marginTop: "50px", fontFamily: "Arial" },
  form: { display: "flex", flexDirection: "column", gap: "15px", width: "300px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
  link: { fontSize: "0.8rem", color: "blue", cursor: "pointer", textAlign: "center", textDecoration: "underline" }
};