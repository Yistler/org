import { useState } from "react"
import "./Campo.css"
const Campo = (props) =>{  {/* Props son propiedades externas q recibe un componente de React */}
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const { type = "text" } = props//desde formulario.js le pasa la propiedad type
    console.log(type)

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    //clasName = todos son campo pero tambien son campo-type osea campo-color
    return <div className={` campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}//establece el valor type pasado por props
        />
    </div>
}

export default Campo