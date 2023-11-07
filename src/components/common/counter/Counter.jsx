import "./Counter.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = ({ sumar, contador, restar, onAdd, stock }) => {
  return (
    <div className="container-botones-comprar">
      <div className="container-boton">
        {stock > 0 ? (
          <button
            onClick={() => onAdd(contador)}
            className="boton-añadir-carrito"
          >
            Añadir al carrito
          </button>
        ) : (
          <button disabled className="boton-añadir-disabled">
            Añadir al carrito
          </button>
        )}
      </div>
      <div className="d-flex container-botones-cantidad">
        <button onClick={restar} className="boton-restar">
          <RemoveIcon />
        </button>
        <h5 className="contador-productos">{contador}</h5>
        <button onClick={sumar} className="boton-sumar">
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Counter;
