import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import AboutUsContainer from "./components/pages/aboutUs/AboutUsContainer";
import CartContextComponent from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/aboutUs" element={<AboutUsContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          {/* <Route path="*" element={<p>Not Found</p>} /> */}
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
