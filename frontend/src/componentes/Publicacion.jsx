import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import usuario from '../imgs/user.png';
import foto from '../imgs/paisaje.jpg';
import './styles/Publicacion.css'

export const Publicacion = () => {
  return (
    <div className="publicacion">
      <div className="infoTop">
        <img src={usuario} alt="" className="usuar" />
        <span>Usuario</span>
      </div>
      <img src={foto} alt="" className="imgPublicacion" />
      <div className="reacciones">
        <a href="/" className="reaccion"><BsHeart /></a>
        <a href="/" className="reaccion"><FaRegComment /></a>
        <a href="/" className="reaccion"><FiSend /></a>
      </div>
      <span className="likes"><strong>11 Me gusta</strong></span>
      <span className="descripcion"><strong>Usuario</strong>  Esta es una descripcion de la imagen que está posteada arriba.</span>
      <span className="comentarios">Ver los 36 comentarios</span>
      <span className="tiempo">Hace 30 minutos</span>
    </div>
  )
}
