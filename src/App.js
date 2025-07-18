import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React APP</h1>
      <a className='App-link' href='/product-list'>ProductList</a><br/>
      <a className='App-link' href='/add-product'>Add Product</a>
    </div>
  );
}

export default App;
