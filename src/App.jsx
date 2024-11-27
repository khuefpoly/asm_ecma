import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LayoutWebsite from "./page/(website)/layout";
import NotFoundPage from "./page/(website)/404/page";
import HomePage from "./page/(website)/home/page";
import ProductDetail from "./page/(website)/product_detail/page";
import CartPage from "./page/(website)/cart/page";
import CheckoutPage from "./page/(website)/checkout/page";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop/detail" element={<ProductDetail />} />
          <Route path="shop/cart" element={<CartPage />} />
          <Route path="shop/cart/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
