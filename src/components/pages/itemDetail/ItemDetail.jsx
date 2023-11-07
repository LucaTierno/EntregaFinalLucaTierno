import Carousel from "react-bootstrap/Carousel";
import "./ItemDetail.css";
import CounterContainer from "../../common/counter/CounterContainer";
import { Link } from "react-router-dom";

const ItemDetail = ({ productSelected, onAdd, initial, showCounter }) => {
  return (
    <section className="detalles-producto">
      <div className="container">
        <div className="row m-auto">
          <div className="col-sm-12 col-md-7 container-carousel m-auto">
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles1}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles2}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles3}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles4}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles5}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles6}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={productSelected.imgDetalles7}
                  alt=""
                  className="img-carousel"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-sm-12 col-md-5 container-detalles-texto">
            <h5 className="nombre-guitarra">{productSelected.title}</h5>
            <span className="linea-estilo"></span>
            <h6 className="detalles-subtitulo-guitarra">Detalles</h6>
            <p className="detalles-guitarra">
              <span className="contorno-estilo">Categoria:</span>{" "}
              {productSelected.category}
            </p>
            <p className="detalles-guitarra">
              <span className="contorno-estilo">Color:</span>{" "}
              {productSelected.color}
            </p>
            <p className="detalles-guitarra">
              <span className="contorno-estilo">Lateralidad:</span>{" "}
              {productSelected.lateralidad}
            </p>
            <p className="detalles-guitarra">
              <span className="contorno-estilo">Stock:</span>{" "}
              {productSelected.stock}
            </p>
            <p className="precio-guitarra">${productSelected.price}</p>
            <span className="linea-estilo"></span>
            <p>
              <span className="contorno-estilo">Descripcion:</span>{" "}
              {productSelected.description}
            </p>

            {showCounter ? (
              <CounterContainer
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={initial}
              />
            ) : (
              <Link to="/cart">
                <button className="boton-añadir-carrito">Terminar compra</button>
              </Link>
            )}
          </div>
        </div>
        <div className="container-experimenta">
          <h2>¡Eleva tu sonido con excelencia!</h2>
          <p>
            <span>Experimenta la leyenda</span> viva de la música con la Gibson
            <span> {productSelected.category}</span>. Desde el rock al blues y
            más allá, la {productSelected.category} ofrece un tono inigualable y
            un estilo clásico. Descubre por qué las leyendas de la música eligen
            la Gibson {productSelected.category}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
