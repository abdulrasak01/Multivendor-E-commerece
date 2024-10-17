import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from "./Components/Categories";
import CategoryProducts from "./Components/CategoryProducts";
import AllProducts from "./Components/AllProducts";
import ProductDetail from "./Components/ProductDetail";
import CheckOut from "./Components/CheckOut";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <div className="">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />} />
          <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/customer/register' element={<Register />} />
          <Route path='/customer/login' element={<Login />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
