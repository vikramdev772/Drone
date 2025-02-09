import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image }) => {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
