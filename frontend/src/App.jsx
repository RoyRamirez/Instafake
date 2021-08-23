import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Login } from './componentes/Login';
import { Muro } from './componentes/Muro';

export const App = () => {
  const [usuario, setUsuario] = useState({
    correo: '',
    nombre: '',
    password: '',
  });

  const [sesion, setSesion] = useState({
    log: false
  });

  const onLog = (user) => {
    axios.get('/usuarios', {params: {correo: user.correo, password: user.password}})
    .then(response => {
      let us = response.data[0];
      // setUsuario({
      //   correo: user.correo,
      //   nombre: user.nombre,
      //   password: us.password,
      // });
      setUsuario(us);
      setSesion({ log: true });
      console.log(usuario, us);
    }).catch(error => {
      alert('Datos no validos');
      console.log(error);
    });
  }
  return (
    <div className="App">
      {!sesion.log && <Login onLog={onLog}/>}
      {sesion.log && <Muro />}
    </div>
  );
}
