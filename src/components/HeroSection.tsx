
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Button from "./Button";
import { useUrl } from "../context/Url.jsx";

const HeroSection = () => {
   const { url, setUrl } = useUrl();
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-foodie-soft-peach/30 relative overflow-hidden">
      <div className="foodie-container grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.h1 
            className="foodie-heading mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Elevate Your Menu Experience with{" "}
            <span className="foodie-gradient-text">FoodieFlow</span>
          </motion.h1>

          <motion.p
            className="foodie-subheading mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Say goodbye to outdated paper menus. Enhance your customers' dining
            experience with interactive digital menus that are easy to update and
            environmentally friendly.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >

        <Button w="w-66" href={url}>
          Explore Our Digital Menu <ChevronRight className="ml-2 h-5 w-5" />
        </Button>     
          </motion.div>
        </motion.div>

        {/* Right Column - Image/Animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-foodie-orange/20 blur-3xl z-0"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-4 bg-foodie-orange text-white">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">FoodieFlow Digital Menu</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { name: "Signature Pasta", price: "$15.99", description: "Fresh homemade pasta with seasonal vegetables" },
                    { name: "Grilled Salmon", price: "$22.99", description: "Wild-caught salmon with lemon butter sauce" },
                    { name: "Chocolate Soufflé", price: "$9.99", description: "Rich chocolate dessert with vanilla ice cream" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="flex justify-between mb-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <span className="text-foodie-orange font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <motion.div
        className="absolute top-40 left-10 w-20 h-20 rounded-full bg-foodie-orange/10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-foodie-orange/10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};

export default HeroSection;
