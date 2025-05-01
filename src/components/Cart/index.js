import { useCart } from "../../context/CartContext";
import Header from "../Header";
import { useNavigate, Link } from "react-router-dom";

import emptycart from "../../assets/emptycart.json";
import { Player } from "@lottiefiles/react-lottie-player";
import CartCard from "../CartCard";

const Cart = ({ setShowMiniCart }) => {
    const { cartItems, cartTotal } = useCart();
    const shippingCost = cartTotal() > 5000 ? 0 : 5.0;

    const numberOfItems = cartItems.length;

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/order-confirmation");
    }; // console.log(numberOfItems);

    return (
        <div className="text-left font-Poppins min-h-svh w-full   bg-white shadow-xl z-[150] overflow-y-auto">
            <Header />

            <h1 className="text-2xl m-4 font-bold"> Cart</h1>

            {numberOfItems === 0 ? (
                <div>
                    <Player
                        style={{
                            height: "300px",
                            width: "300px",
                            padding: "0px",
                        }}
                        autoplay
                        loop
                        src={emptycart}
                    />
                    <div className="flex flex-col items-center text-center">
                        <p className="mb-4 text-lg font-medium">
                            Your cart is empty.
                        </p>
                        <Link to="/products">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                                Go to Products
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col p-5 gap-4">
                    {cartItems.map((item) => (
                        <CartCard eachItem={item} key={item.id} />
                    ))}

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                            <span className="font-semibold text-gray-700">
                                Subtotal:
                            </span>
                            <span className="text-lg font-bold text-blue-600">
                                ₹{cartTotal().toFixed(2)}
                            </span>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Subtotal:
                                    </span>
                                    <span className="font-medium">
                                        ₹{cartTotal().toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Shipping:
                                    </span>
                                    <span className="font-medium">
                                        ₹{shippingCost}
                                    </span>
                                </div>

                                <div className="flex justify-between border-t pt-4">
                                    <span className="font-semibold text-lg">
                                        Total:
                                    </span>
                                    <span className="font-semibold text-lg text-blue-600">
                                        ₹
                                        {(cartTotal() + shippingCost).toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => handleCheckout()}
                                className="w-1/3 mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg 
                                    transition-colors duration-200 font-semibold"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
