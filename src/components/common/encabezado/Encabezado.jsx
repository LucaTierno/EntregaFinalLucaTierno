import "./Encabezado.css";

export const Encabezado = () => {
  return (
    <section className="encabezado">
      <div className="fondo-negro" style={{ backgroundColor: "black" }}>
        <div className="container-banner">
          <div className="container-texto">
            <h1>Guitarras de Calidad en un Solo Lugar</h1>
            <p>
              Explora un mundo de guitarras de alta calidad en nuestra tienda
              especializada. Encuentra tu sonido único y déjate inspirar en cada
              nota que toques. ¡Visítanos hoy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
