
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";



const menuItems = [
  {
    id: 1,
    name: "Avocado Toast",
    description: "Freshly smashed avocado on artisan sourdough with poached eggs",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?auto=format&w=250&h=150&fit=crop",
    category: "Breakfast"
  },
  {
    id: 2,
    name: "Berry Acai Bowl",
    description: "Organic acai blend topped with fresh seasonal berries and granola",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1562003914-f554ea3473d5?auto=format&w=250&h=150&fit=crop",
    
    category: "Breakfast"
  },
  {
    id: 3,
    name: "Mediterranean Salad",
    description: "Mixed greens with feta cheese, olives, and house-made vinaigrette",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?auto=format&w=250&h=150&fit=crop",
    category: "Lunch"
  },
  {
    id: 4,
    name: "Truffle Mushroom Pasta",
    description: "Handmade fettuccine with wild mushrooms and truffle cream sauce",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&w=250&h=150&fit=crop",
    category: "Dinner"
  },
  {
    id: 5,
    name: "Grilled Salmon",
    description: "Wild-caught salmon with seasonal vegetables and lemon herb sauce",
    price: "$23.99",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&w=250&h=150&fit=crop",
    category: "Dinner"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&w=250&h=150&fit=crop",
    category: "Dessert"
  }
];

const MenuShowcase = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  return (
    <section className="py-20 bg-white" id="how-it-works" ref={ref}>
      <div className="foodie-container">
        <div className="text-center mb-16">
          <motion.h2
            className="foodie-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="foodie-gradient-text">Digital Menu</span> Showcase
          </motion.h2>
          <motion.p
            className="foodie-subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the interactive and visually stunning presentation of your menu items.
            Engage your customers with beautiful images and detailed descriptions.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-foodie-orange/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <span className="font-bold text-foodie-orange">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <motion.button
                    className="text-sm text-foodie-orange font-medium flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <b>Rating</b>
                  </motion.button>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default MenuShowcase;
