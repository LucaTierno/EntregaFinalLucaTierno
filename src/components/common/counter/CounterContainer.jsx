import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";


const CounterContainer = ({ stock, onAdd, initial=1 }) => {
    const [contador, setContador] = useState(initial);
  
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            Swal.fire({
                title: "¡Cantidad máxima de unidades!",
                text: "No tenemos más cantidades de este producto",
                icon: "info"
              });
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador -1);
        }
    };
  
    return (
    <Counter sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} stock={stock}/>
  )
}

export default CounterContainer