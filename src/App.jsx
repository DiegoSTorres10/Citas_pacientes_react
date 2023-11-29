import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useEffect, useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pl = localStorage.getItem("pacientes");



      const PacienteSL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      console.log(PacienteSL);
      setPacientes(PacienteSL);
      console.log(pacientes);
    }
    obtenerLS()

  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const PacientesActualizados = pacientes.filter(pacienteFilter => pacienteFilter.id !== id)
    setPacientes(PacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes}
          paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  );
}

export default App;
