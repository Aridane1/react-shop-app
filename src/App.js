import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/carrito" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
