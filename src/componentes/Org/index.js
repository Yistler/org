import { useState } from "react"
import "./Org.css"
const Org = (props) => {
    //Estado - hooks (funcionalidad)
    //useState convertir un componente en un estado
    //const [nombreVariable,funcionActuliza] = useState(valorInicial)

    //const [mostrar,actulizarMostrar] = useState(true)
    //const manejarClick = (event) =>{
    //    actulizarMostrar(!mostrar)
    //    actulizarMostrar(!mostrar)   
    //}


    return <section className="org">
        <h3 className="title">Mi organización</h3>
        <img src="../img/boton.png" onClick={props.cambiarEstado}/>
    </section>
}
export default Org