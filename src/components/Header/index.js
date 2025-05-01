import { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import logoecommerse from "../../assets/logoecommerse.json";
import { IoCartOutline } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import MiniCart from "../MiniCart";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showMiniCart, setShowMiniCart] = useState(false);
    const { cartItems } = useCart();
    const cartCount = cartItems.length;
    const CartCounter = () => {
        return (
            <span className="absolute bottom-5 left-1 sm:right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
            </span>
        );
    };

    return (
        <div className="sticky top-0 bg-white shadow-sm z-50">
            <nav className="container mx-auto px-5 py-1 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    <Player
                        autoplay
                        loop
                        src={logoecommerse}
                        style={{
                            height: "100px",
                            width: "100px",
                            padding: "0px",
                        }}
                    />
                </Link>

                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="text-gray-600 hover:text-gray-800"
                    >
                        Products
                    </Link>
                    <Link to="#" className="text-gray-600 hover:text-gray-800">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setShowMiniCart((prev) => !prev)}
                        className="relative"
                    >
                        <span className="text-gray-600 relative hover:text-gray-800">
                            <IoCartOutline size={24} />
                            {CartCounter()}
                        </span>
                    </button>
                    <button
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="md:hidden text-gray-600 hover:text-gray-800"
                    >
                        <IoReorderThree size={24} />
                    </button>
                </div>
            </nav>
            {showMiniCart && (
                <div className=" relative ">
                    <MiniCart setShowMiniCart={setShowMiniCart} />
                </div>
            )}
            {showNavbar && (
                <div
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={() => setShowNavbar(false)}
                >
                    <div className=" fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300">
                        <div className="absolute top-4 right-4">
                            <button
                                onClick={() => setShowNavbar(false)}
                                className="text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <BsXLg size={18} />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-6 mt-10">
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="/products"
                                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200"
                            >
                                Products
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200"
                            >
                                Contact
                            </Link>
                        </nav>

                        <div className="absolute w-full bottom-6 left-6 flex justify-center items-center">
                            <Player
                                autoplay
                                loop
                                src={logoecommerse}
                                style={{
                                    height: "80px",
                                    width: "80px",
                                    padding: "0px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
