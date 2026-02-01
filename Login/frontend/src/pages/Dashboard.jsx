// src/components/Dashboard.jsx
export default function Dashboard({ user, onLogout }) {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h1>Mi Aplicación</h1>
        <button onClick={onLogout} style={styles.logoutBtn}>Cerrar Sesión</button>
      </nav>
      <main style={styles.main}>
        <h2>Bienvenido, {user.username || "Usuario"}</h2>
        <p>Has logrado entrar. Esta es tu área privada.</p>
        <div style={styles.card}>
          <p>Aquí puedes empezar a añadir tus tablas, gráficos o funciones de la App.</p>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'sans-serif' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#333', color: 'white' },
  main: { padding: '2rem', textAlign: 'center' },
  card: { border: '1px solid #ddd', padding: '2rem', marginTop: '1rem', borderRadius: '8px' },
  logoutBtn: { background: '#ff4b2b', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer' }
};