import { useEffect, useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import ProductCard from "../ProductCard";

export default function HomePage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products?limit=5"
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

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="bg-gray-100 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                        Discover Amazing Products
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-600">
                        Find the best deals on quality items
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 md:py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-gray-800">
                    Featured Products
                </h2>

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
            </div>

            <Footer />
        </div>
    );
}
