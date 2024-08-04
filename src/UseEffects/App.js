import {useState} from 'react';
import './App.css';
import Products from './Products';

function App() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      <div className='main'>
        <h1>All Products</h1>
        {
          showProducts==true ? (<Products />) : <h1>No Products to show</h1>
        }
      </div>
    </div>
  );
}

export default App;
