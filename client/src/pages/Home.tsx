import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Volume1, VolumeX, ChevronDown } from 'lucide-react';

const VideoCard = ({ 
  title, 
  description, 
  videoUrl = "HEcclY4Pjk0",
  className = "" 
}: { 
  title: string; 
  description: string; 
  videoUrl?: string;
  className?: string;
}) => (
  <div className={`group bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden 
                   transform hover:scale-[1.02] transition-all duration-300 
                   border border-white/10 hover:border-green-500/30 
                   flex flex-col h-full ${className}`}>
    <div className="relative aspect-video">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
      <iframe 
        src={`https://www.youtube.com/embed/${videoUrl}`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    <div className="p-4 sm:p-6 flex-grow transform transition-transform duration-300 group-hover:translate-y-[-4px]">
      <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const playerRef = useRef<any>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      title: "Smart Crop Monitoring",
      description: "Advanced drone technology for real-time crop health monitoring and analysis. Get detailed insights about your field's condition.",
      videoUrl: "HEcclY4Pjk0"
    },
    {
      title: "Precision Agriculture",
      description: "Optimize resource usage with AI-powered precision farming solutions. Reduce costs while maximizing yield.",
      videoUrl: "HEcclY4Pjk0"
    },
    {
      title: "Custom Solutions",
      description: "Tailored drone solutions designed to meet your specific agricultural needs. Full integration with existing systems.",
      videoUrl: "HEcclY4Pjk0"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background video */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div id="youtube-player" className="absolute w-full h-full scale-125">
          <iframe 
            src={`https://www.youtube.com/embed/HEcclY4Pjk0?controls=0&autoplay=1&mute=1&loop=1&playlist=HEcclY4Pjk0`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text 
                           bg-gradient-to-r from-green-400 to-green-600 mb-2 tracking-wider">
                AGRONE-X
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 uppercase tracking-widest">
                Future of Agriculture
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-white leading-relaxed">
                <span className="font-semibold">Pioneering sustainable agriculture</span>
                <br className="hidden sm:block" />
                <span className="text-gray-400"> through advanced drone solutions.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Empowering farmers with precision technology for a greener tomorrow.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-xl font-semibold 
                               hover:bg-green-600 transition-all duration-300 transform hover:scale-105
                               shadow-lg hover:shadow-green-500/20 text-sm sm:text-base">
                Watch Demo
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 rounded-xl 
                               font-semibold hover:bg-green-500/10 transition-all duration-300
                               transform hover:scale-105 text-sm sm:text-base">
                Talk to Expert
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 
                          transition-opacity duration-500 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}>
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 animate-bounce" />
          </div>
        </div>

        {/* Video cards section */}
        <div className="py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Discover Our <span className="text-green-500">Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <VideoCard 
                key={index}
                title={card.title}
                description={card.description}
                videoUrl={card.videoUrl}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        #youtube-player {
          pointer-events: none;
        }
        
        #youtube-player iframe {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        input[type=range] {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        input[type=range]::-webkit-slider-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #4CAF50;
          cursor: pointer;
        }
        
        input[type=range]::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #4CAF50;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Home;