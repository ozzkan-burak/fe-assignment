import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <ul>
        <li > <NavLink className="nav-item" exact activeClassName="active-link" to="/">Popüler Ürünler</NavLink> </li>
        <li > <NavLink className="nav-item" activeClassName="active-link" to="/menus">Menüler</NavLink> </li>
        <li > <NavLink className="nav-item" activeClassName="active-link" to="/burgers">Burgerler</NavLink> </li>
        <li > <NavLink className="nav-item" activeClassName="active-link" to="/chicken">Tavuk Ürünleri</NavLink> </li>
        <li > <NavLink className="nav-item" activeClassName="active-link" to="/delights">Delights</NavLink> </li>
        <li > <NavLink className="nav-item" activeClassName="active-link" to="/crispy">Çıtır Lezzetler</NavLink> </li>
      </ul>
    </div>
  );
};

export default Navigation;
