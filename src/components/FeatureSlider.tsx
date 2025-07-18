
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Edit, Leaf, Smile, BarChart3 } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Easy Menu Updates",
    description: "Update your menu items, prices, and descriptions in seconds, not days. No more waiting for reprints or settling for outdated information.",
    icon: <Edit className="w-12 h-12 text-foodie-orange" />,
    tagline: "Update Your Menu in Seconds"
  },
  {
    id: 2,
    title: "Eco-Friendly Solution",
    description: "Reduce paper waste and contribute to a sustainable future. Digital menus eliminate the need for constant reprints as your offerings change.",
    icon: <Leaf className="w-12 h-12 text-foodie-orange" />,
    tagline: "Save Trees, Go Digital!"
  },
  {
    id: 3,
    title: "Enhanced Customer Experience",
    description: "Delight your customers with interactive, visually appealing menus that showcase your food with high-quality images and detailed descriptions.",
    icon: <Smile className="w-12 h-12 text-foodie-orange" />,
    tagline: "Enhance Your Customer's Dining Experience"
  },
  {
    id: 4,
    title: "Powerful Analytics",
    description: "Gain valuable insights into customer preferences and popular items. Make data-driven decisions to optimize your menu and increase revenue.",
    icon: <BarChart3 className="w-12 h-12 text-foodie-orange" />,
    tagline: "Real-Time Analytics at Your Fingertips"
  }
];

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Pause autoplay briefly when manually changing slides
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay]);

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="foodie-container">
        <div className="text-center mb-16">
          <motion.h2
            className="foodie-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="foodie-gradient-text">FoodieFlow</span>
          </motion.h2>
          <motion.p
            className="foodie-subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how our digital menu solution transforms your restaurant operations
            and enhances the dining experience for your customers.
          </motion.p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 md:flex hidden">
            <motion.button
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm text-foodie-orange hover:bg-foodie-orange hover:text-white p-2 rounded-full shadow-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 md:flex hidden">
            <motion.button
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm text-foodie-orange hover:bg-foodie-orange hover:text-white p-2 rounded-full shadow-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 p-8 md:p-12"
              >
                <div className="flex flex-col justify-center">
                  <div className="mb-6">{features[currentIndex].icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {features[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {features[currentIndex].description}
                  </p>
                  <div className="text-lg font-medium text-foodie-orange">
                    {features[currentIndex].tagline}
                  </div>
                </div>

                <div className="flex items-center justify-center relative">
                  <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-r from-foodie-orange/20 to-orange-300/20 blur-3xl"></div>
                  <motion.div
                    className="w-full max-w-xs relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Feature Visual Representation */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md border border-gray-200">
                      {currentIndex === 0 && (
                        <div className="space-y-4">
                          <div className="h-12 flex items-center gap-4">
                            <div className="w-8 h-8 rounded bg-foodie-orange/20 flex items-center justify-center">
                              <Edit className="w-4 h-4 text-foodie-orange" />
                            </div>
                            <div className="font-medium">Edit Menu</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-8 bg-gray-100 rounded flex justify-between items-center px-3">
                              <span className="text-sm">Pasta Carbonara</span>
                              <motion.div 
                                className="bg-foodie-orange/90 text-white text-xs px-2 py-1 rounded"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                              >Edit</motion.div>
                            </div>
                            <div className="h-8 bg-gray-100 rounded flex justify-between items-center px-3">
                              <span className="text-sm">Caesar Salad</span>
                              <span className="text-xs text-gray-500">Edit</span>
                            </div>
                            <div className="h-8 bg-gray-100 rounded flex justify-between items-center px-3">
                              <span className="text-sm">Tiramisu</span>
                              <span className="text-xs text-gray-500">Edit</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentIndex === 1 && (
                        <div className="flex flex-col items-center justify-center h-48">
                          <motion.div
                            animate={{ 
                              y: [0, -10, 0],
                              rotate: [0, 5, 0, -5, 0] 
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 5
                            }}
                          >
                            <Leaf className="w-16 h-16 text-green-500" />
                          </motion.div>
                          <div className="mt-4 text-center">
                            <div className="font-medium">Saved Paper:</div>
                            <div className="text-2xl font-bold text-green-500">1,240 sheets</div>
                            <div className="text-sm text-gray-500 mt-1">This month</div>
                          </div>
                        </div>
                      )}

                      {currentIndex === 2 && (
                        <div className="space-y-4">
                          <div className="text-center mb-2">Customer Feedback</div>
                          <div className="space-y-2">
                            {[
                              { name: "Alex", rating: 5, comment: "Love the interactive menu!" },
                              { name: "Sarah", rating: 5, comment: "Pictures help me decide!" },
                              { name: "Mike", rating: 4, comment: "Very easy to use" }
                            ].map((review, idx) => (
                              <motion.div 
                                key={idx}
                                className="p-2 bg-white rounded-lg shadow-sm text-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.3 }}
                              >
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{review.name}</span>
                                  <div className="flex">
                                    {Array(review.rating).fill(null).map((_, i) => (
                                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{review.comment}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentIndex === 3 && (
                        <div className="space-y-4">
                          <div className="text-center font-medium">Popular Items</div>
                          <div className="h-32 flex items-end justify-between gap-2 pb-2">
                            {[65, 40, 80, 55, 70].map((height, idx) => (
                              <motion.div
                                key={idx}
                                className="bg-foodie-orange rounded-t-md w-8"
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                              />
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 px-1">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-2 p-4 bg-gray-50">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-foodie-orange" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
