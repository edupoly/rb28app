
import './App.css';
import Counter from './features/counter/Counter';
import Countries from './features/countries/Countries';
import Todolist from './features/todolist/Todolist';
function App() {
  return (
    <div className="mybox">
      <h3>App Component</h3>
      <Countries></Countries>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
