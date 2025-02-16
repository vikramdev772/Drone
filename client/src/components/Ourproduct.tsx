import React from 'react';

const ProductCard = ({ title, description, image }) => (
  <div className="group relative h-full">
    {/* Glass container */}
    <div className="h-full backdrop-blur-xl bg-white/5 rounded-2xl 
                    border border-white/10 shadow-lg
                    transition-all duration-500 ease-out overflow-hidden
                    hover:bg-white/10 hover:border-green-500/30
                    hover:shadow-green-500/20 hover:scale-[1.02]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      
      {/* Image container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      
      {/* Content container */}
      <div className="relative p-6 z-10">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="transform group-hover:translate-y-[-4px] transition-transform duration-500">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
          <p className="text-gray-300/90 text-base leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Button */}
          <button className="relative overflow-hidden group/btn px-6 py-3 rounded-xl 
                           border border-green-500/30 bg-green-500/10
                           transition-all duration-300">
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 
                          group-hover/btn:opacity-100 transition-opacity duration-300" />
            
            {/* Button content */}
            <span className="relative z-10 text-green-400 font-semibold 
                           group-hover/btn:text-white transition-colors duration-300">
              Explore Details
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const OurProducts = () => {
  const products = [
    {
      title: "AGRONE-X",
      description: "Revolutionary 10L capacity agricultural drone featuring industry-leading flight time. Engineered in India with advanced aerostructures, combining durability with lightweight design for optimal farming operations.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "JATAYU",
      description: "Advanced hexacopter engineered for industrial applications, capable of handling 500g-2kg payloads within a 5km range. Superior build quality and stability make it the cost-effective choice for modern industry needs.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "ROVER",
      description: "Next-gen unmanned ground vehicle with impressive 150kg payload capacity and 5-hour runtime. Versatile platform ideal for agricultural spraying, law enforcement, and warehouse automation.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 
                       opacity-30 animate-gradient-xy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto backdrop-blur-sm py-2">
            Cutting-edge drone solutions engineered to transform agricultural operations and industrial automation
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;