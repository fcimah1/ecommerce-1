import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CategoryView from './Components/Pages/Category/CategoryView';
import SearchResult from './Components/Pages/SearchResult/SearchResult';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category/:categoryName' element={<CategoryView />} />
        <Route path='search/:value' element={<SearchResult />} />
        <Route path='productDetails/:productId' element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
