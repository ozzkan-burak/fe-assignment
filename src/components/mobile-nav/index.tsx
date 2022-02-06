import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='mobile-nav-container'>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="70" height="15"></rect>
          <rect y="30" width="70" height="15"></rect>
          <rect y="60" width="70" height="15"></rect>
        </svg>
      </div>
      {
        menuOpen && <div onClick={closeMenu} className="dark"></div>
      }
      <ul className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <li className="mobile-nav-close" onClick={closeMenu}>
          <span className="close-icon">X</span>
        </li>
        <li > <NavLink className="nav-item" onClick={closeMenu} exact activeClassName="active-link" to="/">Popüler Ürünler</NavLink> </li>
        <li > <NavLink className="nav-item" onClick={closeMenu} activeClassName="active-link" to="/menus">Menüler</NavLink> </li>
        <li > <NavLink className="nav-item" onClick={closeMenu} activeClassName="active-link" to="/burgers">Burgerler</NavLink> </li>
        <li > <NavLink className="nav-item" onClick={closeMenu} activeClassName="active-link" to="/chicken">Tavuk Ürünleri</NavLink> </li>
        <li > <NavLink className="nav-item" onClick={closeMenu} activeClassName="active-link" to="/delights">Delights</NavLink> </li>
        <li > <NavLink className="nav-item" onClick={closeMenu} activeClassName="active-link" to="/crispy">Çıtır Lezzetler</NavLink> </li>
      </ul>
    </div>
  );
};

export default MobileNav;
