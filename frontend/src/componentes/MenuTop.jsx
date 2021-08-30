import { BsHeart } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import { CgAddR } from 'react-icons/cg';
// import logo from '../imgs/logo.png';
import './styles/MenuTop.css';

export const MenuTop = () => {
  return (
    <div className="menuTop">
      {/* <img src={logo} alt="" className="logo" /> */}
      <h1 className="titulo">Instafake</h1>
      <div className="leftMenu">
      <a href="/" className="icon-top"><CgAddR /></a>
      <a href="/" className="icon-top"><BsHeart /></a>
      <a href="/" className="icon-top"><RiMessengerLine /></a>
      </div>
    </div>
  )
}
