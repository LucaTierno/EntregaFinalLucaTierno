import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  window.scrollTo(0, 0);
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const buyIdAlert = () => {
    Swal.fire({
      title: "Compra realizada con exito!",
      text: `Muchas gracias por comprar en Star Gibson!`,
      icon: "success",
    });
  };

  const [validated, setValidated] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    telefono: "",
    provincia: "",
    city: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();

      let order = {
        buyer: userData,
        items: cart,
        total,
        date: serverTimestamp(),
      };

      console.log(order);

      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(db, "productos", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });

      buyIdAlert();
      clearCart();
    }

    setValidated(true);
  };

  return (
    <section className="section-checkout">
      {orderId ? (
        <div className="container container-compra-realizada">
          <div className="container-checkout-pasos-compra">
            <div className="checkout-circulo activate">
              <p>1</p>
            </div>
            <span className="checkout-linea-pasos activate"></span>
            <div className="checkout-circulo activate">
              <p>2</p>
            </div>
            <span className="checkout-linea-pasos activate"></span>
            <div className="checkout-circulo activate">
              <p>3</p>
            </div>
          </div>
          <div className="container-texto-compra-realizada">
            <h1>Compra realizada con éxito!</h1>
            <p>
              Su código de orden es: <span>{orderId}</span>.
            </p>
            <p>Le enviaremos un Email con todos los detalles de la compra.</p>
            <p className="mb-5">
              Muchas gracias por comprar en{" "}
              <span className="fs-4">Star Gibson</span>.
            </p>
            <Link to={"/"}>
              <button className="boton-finalizar">Volver al inicio</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container-form container">
          <div className="container-checkout-pasos-compra">
            <div className="checkout-circulo activate">
              <p>1</p>
            </div>
            <span className="checkout-linea-pasos activate"></span>
            <div className="checkout-circulo activate">
              <p>2</p>
            </div>
            <span className="checkout-linea-pasos"></span>
            <div className="checkout-circulo">
              <p>3</p>
            </div>
          </div>
          <h1 className="title-form-comprar">Tus Datos</h1>
          <span className="linea-estilo-form "></span>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="2"
                controlId="validationCustomName"
                className="group-input-responsive"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleChange}
                  className="input-responsive"
                  pattern=".{3,}"
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingrese un dato válido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="2"
                controlId="validationCustoLastname2"
                className="group-input-responsive"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  name="lastName"
                  onChange={handleChange}
                  className="input-responsive"
                  pattern=".{3,}"
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingrese un dato válido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomEmail"
                className="group-input-responsive"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  className="input-responsive"
                  pattern=".{@,}"
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingrese un dato válido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomTelefono"
                className="group-input-responsive"
              >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Telefono"
                  name="telefono"
                  onChange={handleChange}
                  className="input-responsive"
                  pattern=".{3,}"
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingrese un dato válido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomProvincia"
                className="group-input-responsive"
              >
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Provincia"
                  name="provincia"
                  onChange={handleChange}
                  className="input-responsive"
                  pattern=".{3,}"
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingrese un dato válido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomCity"
                className="group-input-responsive"
              >
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ciudad"
                  name="city"
                  onChange={handleChange}
                  className="input-responsive"
                  pattern=".{3,}"
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingrese un dato válido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" className="position-relative">
                <button type="submit" className="form-boton-comprar">
                  Finalizar Compra
                </button>
              </Form.Group>
            </Row>
          </Form>
          <span className="linea-estilo-form "></span>
        </div>
      )}
    </section>
  );
};

export default Checkout;
