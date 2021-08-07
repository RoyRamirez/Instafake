import './styles/Login.css';
import imgLogo from '../imgs/instafake.png';

export const Login = () => {
  return (
    <div className="login">
      <img src={imgLogo} alt="" className="login-img" />
      <div className="login-box">
        <h2 className="login-titulo">Instafake</h2>
        <form action="" className="login-form">
          <input type="text" name="" id="" className="input" placeholder="Correo electrónico"/>
          <input type="password" name="" id="" className="input" placeholder="Contraseña"/>
          <button type="submit" className="btn-login">Iniciar sesión</button>
          <span className="login-registro">¿No tienes una cuenta? <a href="#">Registrate</a></span>
        </form>
      </div>
    </div>
  )
}
