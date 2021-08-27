import userPic from '../imgs/user.png';
import './styles/Historias.css';

export const Historias = () => {
  return (
    <div className="historias">
        <a href="/" className="imgRef"><img src={userPic} alt="" className="historia" /></a>
        <a href="/" className="imgRef"><img src={userPic} alt="" className="historia" /></a>
        <a href="/" className="imgRef"><img src={userPic} alt="" className="historia" /></a>
        <a href="/" className="imgRef"><img src={userPic} alt="" className="historia" /></a>
        <a href="/" className="imgRef"><img src={userPic} alt="" className="historia" /></a>
    </div>
  )
}
