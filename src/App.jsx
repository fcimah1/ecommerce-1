import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CategoryView from './Components/Pages/Category/CategoryView';
import SearchResult from './Components/Pages/SearchResult/SearchResult';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Cart from './Components/Pages/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/pagination';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category/:categoryName' element={<CategoryView />} />
        <Route path='search/:value' element={<SearchResult />} />
        <Route path='productDetails/:productId' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;