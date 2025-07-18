import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-[7rem] leading-none font-extrabold text-foodie-orange drop-shadow-md mb-2">
          404
        </h1>
        <p className="text-2xl text-gray-700 font-medium mb-6">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="inline-block bg-foodie-orange hover:bg-foodie-dark-orange text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md"
        >
          Return to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;