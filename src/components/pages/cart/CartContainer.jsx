import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Eliminar carrito?",
        text: "Estas seguro que quieres eliminar los productos del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar!",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          clearCart();
        }
      });
  };

  return (
    <section className="section-cart">
      <div className="container container-cart">
        <h1 className="text-center mb-4">Carrito de compras</h1>

        {cart.map((product) => (
          <div key={product.id} className="container-product-cart">
            <div className="product-cart-info">
              <h3>{product.title}</h3>
              <span className="linea-estilo"></span>
              <h5 className="mt-5">Detalles del producto</h5>
              <p className="fw-medium my-2">Categoria: {product.category}</p>
              <p className="fw-medium my-2">Color: {product.color}</p>
              <p className="fw-medium my-2">
                Lateralidad: {product.lateralidad}
              </p>
              <p className="fw-medium my-2">Cantidad: {product.quantity}</p>
              <p className="cart-precio-detalles">${product.price}</p>
              <button
                className="button-eliminar-producto"
                onClick={() => deleteProductById(product.id)}
              >
                <DeleteIcon fontSize="large" />
              </button>
            </div>
            <div className="product-cart-img">
              <img src={product.imgPrincipal} alt="" />
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div>
            <p>Total: {total}</p>
            <Link to={"/checkout"} >
              <button>Finalizar compra</button>
            </Link>
            <button onClick={clearCartWithAlert}>Vaciar Carrito</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartContainer;
