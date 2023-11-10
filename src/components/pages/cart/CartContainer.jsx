import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const CartContainer = () => {
  window.scrollTo(0, 0);
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
        text: "Estas seguro que quieres eliminar todos los productos del carrito?",
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

  const clearProductWithAlert = (producto) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Eliminar Producto?",
        text: "Estas seguro que quieres eliminar el producto del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar!",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProductById(producto);
        }
      });
  };

  return (
    <section className="section-cart">
      <div className="container container-cart">
        <div className="container-checkout-pasos-compra">
          <div className="checkout-circulo activate">
            <p>1</p>
          </div>
          <span className="checkout-linea-pasos"></span>
          <div className="checkout-circulo">
            <p>2</p>
          </div>
          <span className="checkout-linea-pasos"></span>
          <div className="checkout-circulo">
            <p>3</p>
          </div>
        </div>
        <h1 className="tittle-carrito">Tu Carrito</h1>
        <div className="container-text-resumen-compra">
          <h5 className="text-resumen-compra">Resumen de la compra:</h5>
        </div>
        {cart.map((product) => (
          <div>
            <span className="linea-estilo-cart"></span>
            <div key={product.id} className="container-product-cart">
              <div className="product-cart-info">
                <h3 className="producto-title fs-5 fw-bold">{product.title}</h3>
                <h6 className="detalles-titulo">Detalles del producto:</h6>
                <p className="detalles-texto">Categoria: {product.category}</p>
                <p className="detalles-texto">Color: {product.color}</p>
                <p className="detalles-texto">
                  Lateralidad: {product.lateralidad}
                </p>
                <p className="detalles-texto">Cantidad: {product.quantity}</p>
                <p className="cart-precio-detalles">
                  <span className="fs-6">Total:</span> ${product.price}
                </p>
                <button
                  className="button-eliminar-producto"
                  onClick={() => clearProductWithAlert(product.id)}
                >
                  <CancelIcon fontSize="large" />
                </button>
              </div>
              <div className="product-cart-img">
                <img src={product.imgPrincipal} alt="" />
              </div>
            </div>
          </div>
        ))}
        <span className="linea-estilo-cart"></span>
        {cart.length > 0 && (
          <div className="container-opciones-finales">
            <Link>
              <button className="boton-vaciar" onClick={clearCartWithAlert}>
                Vaciar Carrito
              </button>
            </Link>
            <p className="total">
              Total de la compra: ${total}
              <span className="linea-estilo-cart"></span>
            </p>
            <Link to={"/checkout"}>
              <button className="boton-finalizar">Finalizar compra</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartContainer;
