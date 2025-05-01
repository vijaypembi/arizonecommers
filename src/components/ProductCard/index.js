// // "id": 1,
// //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// //     "price": 109.95,
// //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// //     "category": "men's clothing",
// //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// //     "rating": {
// //       "rate": 3.9,
// //       "count": 120
// //     }
import { IoIosStar } from "react-icons/io";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
const ProductCard = ({ product }) => {
    const { addToCart, updateQuantity, cartItems } = useCart();

    const existingProduct = cartItems.find((item) => item.id === product.id);
    const initialQuantity = existingProduct?.quantity ?? 0;
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleAddToCart = () => {
        addToCart(product);
        setQuantity((prev) => prev + 1);
    };
    const handleUpdateQuantity = (newQuantity) => {
        setQuantity(newQuantity);
        updateQuantity(product.id, newQuantity);
    };
    return (
        <div className="bg-white shadow-md overflow-hidden font-Poppins group  text-left rounded-lg p-4 flex flex-col justify-between transition-transform duration-500 hover:shadow-zinc-900">
            <div className="relative h-60 p-4 bg-gray-50">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/60 backdrop-blur px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <IoIosStar style={{ color: "#FFD700" }} />

                    {product.rating.rate}
                    <span className="text-gray-500 text-xs">
                        ({product.rating.count})
                    </span>
                </div>
            </div>

            <h3 className="  text-base font-Poppins font-semibold mt-2">
                {product.title}
            </h3>
            <p className="text-lg font-bold mt-2">₹{product.price}</p>
            <p
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
                className="text-gray-500 h-1/3 text-sm mt-1 overflow-clip hover:overflow-y-auto"
            >
                {product.description}
            </p>
            {quantity === 0 ? (
                <button
                    onClick={() => handleAddToCart()}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white my-4 py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Add to Cart
                </button>
            ) : (
                <div className="flex w-1/2 text-xl items-center my-5 border border-solid justify-between  rounded-lg  ">
                    <button
                        onClick={() => handleUpdateQuantity(quantity - 1)}
                        className="px-3 py-1  rounded-l-lg bg-gray-200 hover:bg-gray-200 disabled:opacity-50"
                        disabled={quantity === 0}
                    >
                        -
                    </button>
                    <span className="text-gray-700 font-medium px-4">
                        {quantity}
                    </span>
                    <button
                        onClick={() => handleUpdateQuantity(quantity + 1)}
                        className="px-3 py-1  rounded-r-lg bg-gray-200 hover:bg-gray-200"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
