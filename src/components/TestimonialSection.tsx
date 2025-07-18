
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { useUrl } from "../context/Url.jsx";


const testimonials = [
  {
    id: 1,
    content: "FoodieFlow transformed our restaurant operations. Customers love browsing our menu with beautiful images, and we can update it instantly when needed.",
    author: "Maria Rodriguez",
    role: "Owner, Bella Cucina",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    content: "The analytics provided by FoodieFlow helped us identify our most popular dishes and optimize our menu. Our sales have increased by 23% since implementing it.",
    author: "James Chen",
    role: "Manager, Urban Bites",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "Our customers appreciate the interactive experience, and we've significantly reduced our environmental footprint by eliminating paper menus.",
    author: "Sarah Johnson",
    role: "Director, The Green Plate",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const { url, setUrl } = useUrl();

  return (
    
    <section 
      className="py-20 bg-white overflow-hidden relative" 
      ref={sectionRef}
      id="reviews"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-foodie-orange/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-foodie-orange/5 blur-3xl"></div>
      </div>
      
      <div className="foodie-container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="foodie-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="foodie-gradient-text">Customers</span> Say
          </motion.h2>
          <motion.p
            className="foodie-subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Read how FoodieFlow has helped restaurant owners enhance their menu experience
            and streamline their operations.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          style={{ y, opacity }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.667 13.333H5.33366C5.33366 8 8.00033 6.66667 10.0003 6C10.667 7.33333 13.3337 8 13.3337 13.333C13.3337 18.6667 10.667 18.6667 10.667 18.6667M24.0003 13.333H18.667C18.667 8 21.3337 6.66667 23.3337 6C24.0003 7.33333 26.667 8 26.667 13.333C26.667 18.6667 24.0003 18.6667 24.0003 18.6667" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <p className="text-gray-700 flex-grow mb-6">{testimonial.content}</p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="mb-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied restaurant owners who have revolutionized their menu experience with FoodieFlow.
          </p>
          <Button href={url}>
            Get started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
