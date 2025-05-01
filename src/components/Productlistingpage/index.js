import { useEffect, useState } from "react";

import LoadingSpinner from "../LoadingSpinner";
import ProductCard from "../ProductCard";
import Header from "../Header";
import Footer from "../Footer";
import { CiSearch } from "react-icons/ci";
const Productlistingpage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                if (!response.ok) throw new Error("Failed to fetch products");
                const data = await response.json();
                // console.log(data);
                setFeaturedProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFeaturedProducts();
    }, []);

    const handleInputChange = async (e) => {
        const value = e.target.value;

        setQuery(value);

        // console.log(value);

        const filteredProducts = featuredProducts.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setFeaturedProducts(filteredProducts);
        // try {
        //     const response = await fetch(
        //         `https://fakestoreapi.com/products?search=${value}`
        //     );
        //     if (!response.ok) throw new Error("Failed to fetch products");
        //     const data = await response.json();
        //     // console.log(data);
        //     setFeaturedProducts(data);
        // } catch (err) {
        //     setError(err.message);
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {<Header />}

            <section className="container mx-auto px-4 py-6 md:py-4">
                <div className="flex flex-row items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-left my-auto text-gray-800">
                        All Products
                    </h2>
                    <div className="relative w-full max-w-md mx-auto my-auto">
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                    </div>
                </div>

                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default Productlistingpage;
