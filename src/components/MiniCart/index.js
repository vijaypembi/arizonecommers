import { useCart } from "../../context/CartContext";
import Header from "../Header";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import emptycart from "../../assets/emptycart.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { BsXLg } from "react-icons/bs";

const MiniCart = ({ setShowMiniCart }) => {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
    } = useCart();
    const numberOfItems = cartItems.length;

    const navigate = useNavigate();

    const handleViewCart = () => {
        setShowMiniCart(false);
        navigate("/cart");
    }; // console.log(numberOfItems);
    return (
        <div className="text-left font-Poppins absolute right-0 top-0 h-[calc(100vh-8rem)] w-full max-w-md bg-white shadow-xl z-[150] overflow-y-auto">
            <p
                onClick={() => setShowMiniCart(false)}
                className="text-xl m-4 text-right cursor-pointer ml-auto font-bold"
            >
                <BsXLg size={24} className="text-right ml-auto" />
            </p>
            <h1 className="text-2xl m-4 font-bold">Mini Cart</h1>

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
                        <div
                            key={item.id}
                            className="group border border-gray-200 hover:border-blue-200 rounded-lg p-4 mb-4 transition-all duration-200 hover:shadow-md"
                        >
                            <div className="flex items-center gap-4">
                                <div className=" bg-gray-50 rounded-lg p-2 border">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-32 h-32 object-contain mix-blend-multiply"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-gray-900 line-clamp-2 mb-1">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">
                                                Qty:
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 rounded">
                                                {item.quantity}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">
                                                Price:
                                            </span>
                                            <span>
                                                ₹{item.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <p className="text-lg py-2 font-semibold text-blue-600">
                                            ₹
                                            {(
                                                item.quantity * item.price
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                        <div className="flex flex-col md:flex-row gap-3">
                            <button
                                onClick={() => handleViewCart()}
                                className=" text-center bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg
                                hover:bg-blue-50 transition-colors duration-200 font-medium"
                            >
                                View Cart
                            </button>

                            <button
                                disabled={cartItems.length === 0}
                                className="bg-blue-600 text-white py-3 px-6 rounded-lg
                                            hover:bg-blue-700 transition-colors duration-200 font-medium
                                            disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MiniCart;
