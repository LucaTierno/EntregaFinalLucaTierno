import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ItemListContainer = () => {

    const [ tituloSeccion, setTituloSeccion ] = useState("Todas las guitarras")

    const cambiarTodas = ()=>{
        setTituloSeccion("Todas las guitarras")
    }

    const cambiarLesPaul = ()=>{
        setTituloSeccion("Les Paul")
    }

    const cambiarSG = ()=>{
        setTituloSeccion("SG")
    }

    const cambiarES= ()=>{
        setTituloSeccion("ES")
    }

  return (
    <div className="container p-4 text-center bg-dark">
        <h1 className="text-bg-dark">{tituloSeccion}</h1>
        <Button variant="dark" className="me-2 bg-body-secondary text-dark" onClick={cambiarTodas}>Todas<ChevronRightIcon /></Button>
        <Button variant="dark" className="me-2 bg-body-secondary text-dark" onClick={cambiarLesPaul}>Les Paul<ChevronRightIcon /></Button>
        <Button variant="dark" className="me-2 bg-body-secondary text-dark" onClick={cambiarSG}>SG<ChevronRightIcon /></Button>
        <Button variant="dark" className="me-2 bg-body-secondary text-dark"onClick={cambiarES}>ES<ChevronRightIcon /></Button>
    </div>
  )
}
