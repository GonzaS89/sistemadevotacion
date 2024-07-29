import './App.css';
import { useState } from 'react';
import Candidato from './Componentes/candidato';
import candidatos from "./candidatos.json";

function App() {

  const [totalVotos , setTotalVotos] = useState(0);

  const recibirVotos = (votoRecibido) => {setTotalVotos(totalVotos + 1)}

  return (
    <div className="App">
      <h1 className='titulo-app'>Resultados electorales</h1>
      <h2>Lista de candidatos</h2>
      <div className='bloque-resultados'>
        {candidatos.map(candidato => (
          <Candidato 
          nombre={candidato.nombre} 
          imagen={candidato.imagen}
          enviarVotos = {recibirVotos}
          totalVotos = {totalVotos} />
        ))}
      </div>
          <h1>Total de votantes : {totalVotos} electores</h1>
    </div>
  );
}

export default App;
