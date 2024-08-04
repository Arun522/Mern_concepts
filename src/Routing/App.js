
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';

function App() {
  
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path='/books' element={<BookList/>}/>   
      </Routes>
    </div>
    </>
  );
}

export default App;
