import React from 'react';

const ApplicationCard = ({ title, description, image }) => (
  <div className="group relative overflow-hidden">
    {/* Glass container */}
    <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-2xl 
                    border border-white/10 shadow-lg
                    transition-all duration-500 ease-out
                    hover:bg-white/10 hover:border-green-500/30
                    hover:shadow-green-500/20 hover:scale-[1.02]">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      
      {/* Image section */}
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      
      {/* Content section */}
      <div className="relative p-6 z-10">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Text content */}
        <div className="transform group-hover:translate-y-[-4px] transition-transform duration-500">
          <h3 className="text-xl font-semibold mb-3">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
          <p className="text-gray-300/90 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const IndustryApplications = () => {
  const applications = [
    {
      title: "Smart Agriculture",
      description: "Advanced drone systems for precision farming, featuring real-time crop monitoring and automated spraying systems.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Disaster Response",
      description: "AI-powered emergency response solutions with thermal imaging and real-time situation assessment.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Mining Operations",
      description: "Comprehensive 3D mapping and autonomous inspection for enhanced mining site safety and efficiency.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Solar Energy",
      description: "Automated thermal inspection and maintenance planning for optimal solar farm performance.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Wind Power",
      description: "Intelligent turbine monitoring with predictive maintenance and performance optimization.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        {/* Subtle animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 
                       opacity-30 animate-gradient-xy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Industry Applications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto backdrop-blur-sm py-2">
            Transforming industries through innovative drone solutions and AI-powered technology
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className={`
              ${index >= 3 ? 'lg:col-span-3 xl:col-span-1' : ''} 
              ${index >= 3 && applications.length === 5 ? 'lg:w-1/2 lg:mx-auto xl:w-full' : ''}
            `}>
              <ApplicationCard
                title={app.title}
                description={app.description}
                image={app.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS or style tag
const styles = `
  @keyframes gradient-xy {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  .animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
    background-size: 400% 400%;
  }
`;

export default IndustryApplications;