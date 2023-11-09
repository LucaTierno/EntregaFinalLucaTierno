import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

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

    setValidated(true);

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <h2
          style={{
            height: "500px",
            backgroundColor: "red",
            padding: "200px 0",
          }}
        >
          Gracias por su compra! Su código de seguimiento es: {orderId}
        </h2>
      ) : (
        <div style={{ padding: "100px 20px", width: "1200px", margin: "auto" }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustomName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  defaultValue="Mark"
                  name="name"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustoLastname2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  defaultValue="Otto"
                  name="lastName"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  defaultValue="markotto@gmail.com"
                  name="email"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomTelefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Telefono"
                  defaultValue="02237252392"
                  name="telefono"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomProvincia">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Provincia"
                  defaultValue="Buenos Aires"
                  name="provincia"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ciudad"
                  defaultValue="Mar del Plata"
                  name="city"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <button onClick={buyIdAlert} type="submit">
              Finalizar Compra
            </button>
          </Form>
        </div>
      )}
    </>
  );
};

export default Checkout;
