import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <ul>
        <li className="nav-item"> <NavLink to="/">Popüler Ürünler</NavLink> </li>
        <li className="nav-item"> <NavLink to="/menus">Menüler</NavLink> </li>
        <li className="nav-item"> <NavLink to="/burgers">Burgerler</NavLink> </li>
        <li className="nav-item"> <NavLink to="/chicken">Tavuk Ürünleri</NavLink> </li>
        <li className="nav-item"> <NavLink to="/delights">Delights</NavLink> </li>
        <li className="nav-item"> <NavLink to="/crispy">Çıtır Lezzetler</NavLink> </li>
      </ul>
    </div>
  );
};

export default Navigation;
