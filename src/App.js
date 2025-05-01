import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import { CartProvider } from "./context/CartContext"; // adjust the path
import Productlistingpage from "./components/Productlistingpage";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import NotFoundRedirect from "./components/NotFoundRedirect";
function App() {
    return (
        <div className="App">
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            exact
                            path="/products"
                            element={<Productlistingpage />}
                        />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route
                            exact
                            path="/order-confirmation"
                            element={<OrderConfirmation />}
                        />
                        <Route path="*" element={<NotFoundRedirect />} />
                    </Routes>
                </Router>
            </CartProvider>
        </div>
    );
}

export default App;
