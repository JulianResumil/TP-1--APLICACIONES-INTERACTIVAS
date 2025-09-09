import './Registro.css';

function Registro() {
  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form className="registro-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="tu@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" />
        </div>
  <button type="submit" className="registro-btn">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
