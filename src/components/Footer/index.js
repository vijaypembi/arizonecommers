import { Link } from "react-router-dom";

const footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Your trusted online shopping destination offering
                            quality products at competitive prices.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Customer Service
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="#" className="hover:text-white">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-white">
                                    Shipping
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-white">
                                    Returns
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: support@eshop.com</li>
                            <li>Phone: (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2023 E-Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default footer;
