import { FaSearch, FaRegUserCircle, FaShoppingBag, FaHome } from 'react-icons/fa';
import { BsCollectionPlayFill } from 'react-icons/bs';
import './styles/MenuBottom.css'

export const MenuBottom = () => {
  return (
    <div className="menuBottom">
      <a href="/" className="icon-bottom"><FaHome /></a>
      <a href="/" className="icon-bottom"><FaSearch /></a>
      <a href="/" className="icon-bottom"><BsCollectionPlayFill /></a>
      <a href="/" className="icon-bottom"><FaShoppingBag /></a>
      <a href="/" className="icon-bottom"><FaRegUserCircle /></a>
    </div>
  )
}
