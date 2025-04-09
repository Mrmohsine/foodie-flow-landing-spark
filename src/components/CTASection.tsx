
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-foodie-orange/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg 
          className="absolute top-0 left-0 h-full w-full text-foodie-orange opacity-5" 
          fill="currentColor" 
          viewBox="0 0 600 600"
        >
          <rect x="0" y="0" width="100" height="100" />
          <rect x="120" y="0" width="100" height="100" />
          <rect x="240" y="0" width="100" height="100" />
          <rect x="360" y="0" width="100" height="100" />
          <rect x="480" y="0" width="100" height="100" />
          <rect x="0" y="120" width="100" height="100" />
          <rect x="240" y="120" width="100" height="100" />
          <rect x="480" y="120" width="100" height="100" />
          <rect x="0" y="240" width="100" height="100" />
          <rect x="120" y="240" width="100" height="100" />
          <rect x="240" y="240" width="100" height="100" />
          <rect x="360" y="240" width="100" height="100" />
          <rect x="480" y="240" width="100" height="100" />
          <rect x="0" y="360" width="100" height="100" />
          <rect x="240" y="360" width="100" height="100" />
          <rect x="480" y="360" width="100" height="100" />
          <rect x="0" y="480" width="100" height="100" />
          <rect x="120" y="480" width="100" height="100" />
          <rect x="240" y="480" width="100" height="100" />
          <rect x="360" y="480" width="100" height="100" />
          <rect x="480" y="480" width="100" height="100" />
        </svg>
      </div>
      
      <div className="foodie-container relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Menu Experience?
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Join hundreds of restaurants already using FoodieFlow to enhance 
                  customer satisfaction, increase efficiency, and boost their bottom line.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "14-day free trial with all features",
                    "No credit card required to start",
                    "Dedicated onboarding support",
                    "Easy setup in less than 30 minutes",
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <CheckCircle className="w-5 h-5 text-foodie-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="bg-foodie-orange hover:bg-foodie-dark-orange text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-colors"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 107, 53, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button
                    className="border-2 border-foodie-orange text-foodie-orange bg-white hover:bg-foodie-orange/5 px-8 py-3 rounded-full font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-br from-foodie-orange to-foodie-dark-orange text-white p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  What You'll Get
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Digital Menu Platform",
                      description: "Beautiful, interactive menus that showcase your offerings with high-quality images and detailed descriptions."
                    },
                    {
                      title: "Real-Time Updates",
                      description: "Update menu items, prices, and availability instantly from any device, anywhere."
                    },
                    {
                      title: "Customer Insights",
                      description: "Gain valuable data on menu performance and customer preferences to optimize your offerings."
                    },
                    {
                      title: "Marketing Tools",
                      description: "Promote specials, happy hours, and events directly through your digital menu."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/80">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
