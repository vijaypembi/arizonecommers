import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import successicon from "../../assets/successicon.json";
import { useEffect } from "react";
const OrderConfirmation = () => {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                <Player
                    autoplay
                    speed={0.2}
                    loop={true}
                    src={successicon}
                    style={{ height: "150px", width: "150px" }}
                    className="mx-auto"
                />

                <h2 className="text-2xl font-bold mt-4 mb-2">
                    Order Placed Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been confirmed.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-left text-gray-500">
                        You'll receive an email confirmation shortly
                    </p>
                </div>

                <Link
                    to="/products"
                    className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg
                   transition-colors duration-200 font-medium"
                >
                    Continue Shopping
                </Link>

                <p className="mt-4 text-sm text-gray-500">
                    Need help? Contact support@example.com
                </p>
            </div>
        </div>
    );
};

export default OrderConfirmation;
