import { Routes , Route , useNavigate , createSearchParams } from "react-router-dom";

import Navbar from "./Componnent/Navbar/Navbar";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/cart/Cart";
import NotFound from "./Pages/Not-found/NotFound";
 import  {useCart} from './Componnent/context/cart'

function App() {
   const { cartItemCount } = useCart()

  return (
    <>
      <Navbar cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
