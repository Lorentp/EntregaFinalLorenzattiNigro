import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>José Agustín Lorenzatti Nigro</h1>

      <h2>Gaming Shop</h2>
      <h2>Compra los mejores juegos del momento al mejor precio</h2>
      <br />
      <nav>
        <ul>
          <li>
            <NavLink
              activeclassname="active"
              to="/"
              className="products-category button-index"
            >
              Todos los Productos
            </NavLink>
          </li>
        </ul>
        <ul className="categories">
          <li>
            <NavLink
              className="products-category button-index"
              to="productos/accion"
              activeclassname="active"
            >
              Accion
            </NavLink>
          </li>

          <li>
            <NavLink
              className="products-category button-index"
              to="productos/estrategia"
              activeclassname="active"
            >
              Estrategia
            </NavLink>
          </li>

          <li>
            <NavLink
              className="products-category button-index"
              to="productos/indie"
              activeclassname="active"
            >
              Indie
            </NavLink>
          </li>

          <li>
            <NavLink
              className="products-category button-index"
              to="productos/rpg"
              activeclassname="active"
            >
              RPG
            </NavLink>
          </li>

          <li>
            <NavLink
              className="products-category button-index"
              to="productos/simulador"
              activeclassname="active"
            >
              Simuladores
            </NavLink>
          </li>

          <li>
            <NavLink
              className="products-category button-index"
              activeclassname="active"
              to="productos/survival"
            >
              Survival
            </NavLink>
          </li>

          <li>
            <NavLink activeclassname="active">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
