import './App.css';
import ListaDeTareas from './componentes/listaDeTareas/ListaDeTareas';
import Tarea from './componentes/tarea/Tarea';
import TareaFormulario from './componentes/tareaFormulario/TareaFormulario';

function App() {
  return (
    <div className="App">
      <h1>Tareas React</h1>

      <div className='contenedor'>
        <h2>Mis tareas</h2>
        <div className='contenedor-tareas'>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
