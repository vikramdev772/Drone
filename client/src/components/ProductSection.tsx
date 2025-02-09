import React from "react";
import { motion } from "framer-motion";
// import DroneCard from "../DroneCard"; // Uncomment when DroneCard is available

interface Drone {
  name: string;
  price: number;
  description: string;
  image: string;
}

const drones: Drone[] = [
  {
    name: "Phantom Pro",
    price: 1299,
    description: "Professional-grade drone for aerial photography",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Explorer X",
    price: 899,
    description: "Perfect for adventure and outdoor exploration",
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Agri Scout",
    price: 1499,
    description: "Specialized drone for agricultural monitoring",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
];

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Drones</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore our collection of high-performance drones designed for various applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drones.map((drone, index) => (
            <motion.div
              key={drone.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* <DroneCard {...drone} /> Uncomment when DroneCard component is available */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
