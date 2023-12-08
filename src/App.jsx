
import { Outlet } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="mybox">
      <h3>App Component</h3>
      <Link to="/products">All Products</Link> &nbsp;
      <Link to="/countries">All Countries</Link> &nbsp;
      <Link to="/addProduct">Add Product</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
