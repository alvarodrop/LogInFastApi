import { useState } from "react";
import Welcome from "./pages/Welcome"; // Nuevo componente
import ModernLogin from "./pages/ModernLogin";
import Portfolio from "./pages/Portfolio"; 

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // Nuevo estado

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLogin(false); // Volvemos al inicio al cerrar sesión
  };

  return (
    <div className="App">
      {/* FLUJO DE NAVEGACIÓN */}
      {!user ? (
        !showLogin ? (
          /* PASO 1: Pantalla de Bienvenida */
          <Welcome onStart={() => setShowLogin(true)} />
        ) : (
          /* PASO 2: Login (Solo aparece si pulsan el botón en Welcome) */
          <ModernLogin onLoginSuccess={handleLoginSuccess} />
        )
      ) : (
        /* PASO 3: Portfolio (Solo tras Login exitoso) */
        <Portfolio user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;