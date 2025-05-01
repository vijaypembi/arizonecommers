import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="text-center mt-10 text-lg text-gray-500">
            Page not found. Redirecting to home...
        </div>
    );
};

export default NotFoundRedirect;
