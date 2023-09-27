import { useState } from 'react';
import { v4 as uuid } from "uuid";//librerias de id 
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import Org from './componentes/Org';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actulizarMostrar] = useState(true)//hooks useState
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Yistler",
    puesto: "Alumno",
    foto: "https://github.com/yistler.png",
    equipo: "Programación",
    fav: true
  },
  {
    id: uuid(),
    nombre: "Harland Lohora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Genesys Rondón",
    puesto: "Desarrollo de sotfware e instructora",
    foto: "https://github.com/genesysR-dev.png",
    equipo: "Programación",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    equipo: "UX y Diseño",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Programación",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Jose Gonzalez",
    puesto: "Instructora en Alura Latam",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    equipo: "Innovación y  Gestión",
    fav: false
  }
])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E8"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA025",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //            condicion && seMuestra

  const cambiarEstado = () => {
    actulizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    //Spread operator 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Actualizar color equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar ",color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id: uuid() }])
  }

  const like = (id) => {
    //console.log("Like ",id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>{/* Se esta llamando a la clase Header que esta siendo importada */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />}
      {/* {mostrarFormulario === true ? <Formulario/> : <></>} */}
      <Org cambiarEstado={cambiarEstado}/>
      
      {
        equipos.map( (equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
      />
      )
      }

      <Footer />
    </div>
  );
}

export default App;
