import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  function categories() {}
  return (
    <div>
      <h1>José Agustín Lorenzatti Nigro</h1>

      <h2>Gaming Shop</h2>
      <h2>Compra los mejores juegos del momento al mejor precio</h2>
      <br />
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className="products-category button-index active"
              id="all"
            >
              Todos los Productos
            </Link>
          </li>
        </ul>
        <ul className="categories">
          <li>
            <Link
              className="products-category button-index"
              to="productos/accion"
            >
              Accion
            </Link>
          </li>

          <li>
            <Link
              className="products-category button-index"
              to="productos/estrategia"
            >
              Estrategia
            </Link>
          </li>

          <li>
            <Link
              className="products-category button-index"
              to="productos/indie"
            >
              Indie
            </Link>
          </li>

          <li>
            <Link className="products-category button-index" to="productos/rpg">
              RPG
            </Link>
          </li>

          <li>
            <Link
              className="products-category button-index"
              to="productos/simulador"
            >
              Simuladores
            </Link>
          </li>

          <li>
            <Link
              className="products-category button-index"
              to="productos/survival"
            >
              Survival
            </Link>
          </li>

          <li>
            <Link>
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
