import { useState } from "react";
import ModernLogin from "./pages/ModernLogin";
import Dashboard from "./pages/Dashboard"; // La página a la que entrarás

function App() {
  // Si user es null, no ha entrado nadie. Si tiene datos, estamos dentro.
  const [user, setUser] = useState(null);

  // Esta función se ejecutará cuando el login en ModernLogin sea exitoso
  const handleLoginSuccess = (userData) => {
    setUser(userData); 
  };

  const handleLogout = () => {
    setUser(null); // Al cerrar sesión, volvemos al Login
  };

  return (
    <div className="App">
      {!user ? (
        // PASO A: Si no hay usuario, mostramos el Login elegante
        <ModernLogin onLoginSuccess={handleLoginSuccess} />
      ) : (
        // PASO B: Si hay usuario, mostramos la App (Dashboard)
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;