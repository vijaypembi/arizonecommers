import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    }, []);

    const updateQuantity = useCallback((productId, newQuantity) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: Math.max(0, newQuantity) }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartTotal = useCallback(() => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
