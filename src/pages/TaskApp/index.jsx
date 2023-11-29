import { useState } from 'react';
import './styles.css';
import TaskList from '../../compontents/TaskList';
import Adicionadas from '../Concluidas';
import { Link } from 'react-router-dom';

const TaskApp = () => {
  const [notas, setNotas] = useState([]);
  const [notasAdicionadas, setNotasAdicionadas] = useState([]);
  const [notas, setNotas] = useState('');

  const [mostrarAtivas, setMostrarAtivas] = useState(true);
  const [mostrarConcluidas, setMostrarConcluidas] = useState(false);

  function adicionarNota() {
    if (notas.trim() !== '') {
      setNotas([...notas, { t: notas, estado: true }]);
      setNotas('');
    }
  }

  function alterarEstadoTarefa(num) {
    const novaLista = [...notas]
    novaLista[num].estado = !novaLista[num].estado;
    setNotas(novaLista);

    if (novaLista[num].estado) {
      const novaListaConcluidas = notasAdicionadas.filter((_, i) => i !== num);
      setNotasAdicionadas(novaListaConcluidas);
    } else {
      const tarefaMovida = novaLista.splice(num, 1)[0]      
      setNotasAdicionadas([...notasAdicionadas, notaMovida]);
    }
  }

  function removerNotas(index) {
    const novaLista = [...notas];
    novaLista.splice(index, 1);
    setNotas(novaLista);
  }

  return (
    <>
      <form>
        <textarea id='tarefa' value={notas} onChange={(e) => setTarefa(e.target.value)}></textarea>
        <button type='button' onClick={adicionarNota}>+</button>
        <button
          type='button'
          onClick={() => {
            setMostrarAtivas(true);
            setMostrarConcluidas(false);
          }}
        >
          Mostrar Ativas
        </button>
          <Link to={'/concluidas'}>
        <button
          type='button'
          onClick={() => {
            setMostrarAtivas(false);
            setMostrarConcluidas(true);
          }}
        >
          Mostrar Concluídas
        </button>
      </Link>
      </form>

      <main>
        {notas.length > 0 &&
          mostrarAtivas
            ? notas.map((task, index) => (
                <TaskList key={index} task={task} num={index} alterarEstadoTarefa={alterarEstadoTarefa} removerNotas={removerNotas}/>
              ))
            : null}
        {notasAdicionadas.length > 0 &&
          mostrarConcluidas
            ? notasAdicionadas.map((task, index) => (
                <TaskList key={index} task={task} num={index} alterarEstadoTarefa={alterarEstadoTarefa} removerNotas={removerNotas}/>
              ))
            : null}
      </main>
    </>
  );
};

export default TaskApp