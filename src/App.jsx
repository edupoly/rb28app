
import './App.css';
import Counter from './features/counter/Counter';
import Countries from './features/countries/Countries';
import AddProduct from './features/products/AddProduct';
import Products from './features/products/Products';
import Todolist from './features/todolist/Todolist';
function App() {
  return (
    <div className="mybox">
      <h3>App Component</h3>
      <AddProduct></AddProduct>
      <Products></Products>
      <Countries></Countries>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
