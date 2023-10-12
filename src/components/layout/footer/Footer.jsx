import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className="bg-black">
        <div className="container">
            <div className="row container-footer">
                <div className="col-sm-12 col-md-4 container-card-footer">
                    <span className="barra-estilos"></span>
                    <h4>Gibson</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum repellat expedita delectus, sint alias asperiores tempore cum illum neque aperiam nulla quidem praesentium aliquid modi enim, labore odit eum fuga.</p>
                </div>
                <div className="col-sm-12 col-md-4 container-card-footer">
                    <span className="barra-estilos"></span>
                    <h4>Envios</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet praesentium doloribus voluptatibus, dicta ducimus perspiciatis.</p>
                </div>
                <div className="col-sm-12 col-md-4 container-card-footer">
                    <span className="barra-estilos"></span> 
                    <h4>Encontranos en</h4>
                    <div className="container-iconos">
                        <a href=""><WhatsAppIcon /></a>
                        <a href=""><InstagramIcon /></a>
                        <a href=""><FacebookIcon /></a>
                    </div>
                </div>
                <p className="derechos-reservados">© Todos los derechos reservados - 2023.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer