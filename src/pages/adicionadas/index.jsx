import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TaskList from '../../compontents/TaskList'; 
import {notasAdicionadas} from '../TaskApp'

const Adicionadas = (notasAdicionadas) => {
  console.log(notasAdicionadas.notasAdicionadas)
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <div>
        <h2>Notas Adicionadas</h2>
        {notasAdicionadas.length > 0 ? (
          notasAdicionadas.map((task, index) => (
            <TaskList key={index} task={task} num={index} alterarEstadoTarefa={alterarEstadoTarefa} removerNotas={removerNotas}/>
          ))
        ) : (
          <p>Nenhuma nota adicionada.</p>
        )}
      </div>
    </>
  );
}

export default Adicionadas;