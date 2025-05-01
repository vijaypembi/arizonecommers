import { useCart } from "../../context/CartContext";
import { useState } from "react";

import { BsFillCartXFill, BsXLg } from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const CartCard = ({ eachItem }) => {
    // console.log(eachItem);
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
    } = useCart();
    const existingProduct = cartItems.find((item) => item.id === eachItem.id);
    const initialQuantity = existingProduct?.quantity ?? 0;
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleAddToCart = (item) => {
        addToCart(item);
        setQuantity((prev) => prev + 1);
    };
    const handleUpdateQuantity = (item, newQuantity) => {
        setQuantity(newQuantity);
        updateQuantity(item.id, newQuantity);
    };
    return (
        <div
            key={eachItem.id}
            className="group border border-gray-200 hover:border-blue-200 rounded-lg p-4 mb-4 transition-all duration-200 hover:shadow-md"
        >
            <div className="flex items-center gap-4">
                <div className=" bg-gray-50 rounded-lg p-2 border">
                    <img
                        src={eachItem.image}
                        alt={eachItem.title}
                        className="w-32 h-32 object-contain mix-blend-multiply"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 line-clamp-2 mb-1">
                        {eachItem.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Qty:</span>
                            <span className="px-2 py-1 bg-gray-100 rounded">
                                {eachItem.quantity}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">Price:</span>
                            <span>₹{eachItem.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-lg py-2 font-semibold text-blue-600">
                            ₹{(eachItem.quantity * eachItem.price).toFixed(2)}
                        </p>
                    </div>

                    {quantity === 0 ? (
                        <button
                            onClick={() => handleAddToCart(eachItem)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white my-4 py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex w-40 text-xl items-center my-5 border border-solid justify-between  rounded-lg  ">
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(eachItem, quantity - 1)
                                }
                                className="px-3 py-1  rounded-l-lg bg-gray-200 hover:bg-gray-200 disabled:opacity-50"
                                disabled={quantity === 0}
                            >
                                -
                            </button>
                            <span className="text-gray-700 font-medium px-4">
                                {quantity}
                            </span>
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(eachItem, quantity + 1)
                                }
                                className="px-3 py-1  rounded-r-lg bg-gray-200 hover:bg-gray-200"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>

                {
                    <button
                        className="mt-4 bg-red-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transform transition duration-200"
                        onClick={() => removeFromCart(eachItem.id)}
                    >
                        {/* <MdOutlineRemoveShoppingCart /> */}
                        Remove
                    </button>
                }
            </div>
        </div>
    );
};

export default CartCard;
