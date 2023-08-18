import CartWidget from "../cartWidget/cartWidget";

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
            <button
              onClick=""
              className="products-category button-index active"
              id="all"
            >
              Todos los Productos
            </button>
          </li>
        </ul>
        <ul className="categories">
          <li>
            <button
              onClick=""
              className="products-category button-index"
              id="action"
            >
              Accion
            </button>
          </li>

          <li>
            <button
              onClick=""
              className="products-category button-index"
              id="strategy"
            >
              Estrategia
            </button>
          </li>

          <li>
            <button
              onClick=""
              className="products-category button-index"
              id="indie"
            >
              Indie
            </button>
          </li>

          <li>
            <button
              onClick=""
              className="products-category button-index"
              id="rpg"
            >
              RPG
            </button>
          </li>

          <li>
            <button
              onClick=""
              className="products-category button-index"
              id="simulator"
            >
              Simuladores
            </button>
          </li>

          <li>
            <button
              onClick=""
              className="products-category button-index"
              id="survival"
            >
              Survival
            </button>
          </li>

          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
