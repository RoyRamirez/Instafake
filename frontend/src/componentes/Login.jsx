import { useRef } from 'react';
import './styles/Login.css';
import imgLogo from '../imgs/instafake.png';

export const Login = ({ onLog }) => {
  const correo = useRef();
  const password = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      correo: correo.current.value,
      password: password.current.value
    }
    onLog(user);
    correo.current.value = null;
    password.current.value = null;
  }

  return (
    <div className="login">
      <img src={imgLogo} alt="" className="login-img" />
      <div className="login-box">
        <h2 className="login-titulo">Instafake</h2>
        <form action="" className="login-form">
          <input type="text" name="" className="input" placeholder="Correo electrónico" ref={correo}/>
          <input type="password" name="" className="input" placeholder="Contraseña" ref={password}/>
          <button type="submit" className="btn-login" onClick={onSubmit}>Iniciar sesión</button>
          <span className="login-registro">¿No tienes una cuenta? <a href="/">Registrate</a></span>
        </form>
      </div>
    </div>
  )
}
