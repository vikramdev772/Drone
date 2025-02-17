import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, Volume1, VolumeX, ChevronDown, ArrowRight } from 'lucide-react';
import OurProducts from "../components/Ourproduct";
import IndustryApplications from "../components/IndustryApplications";
import { motion, AnimatePresence } from 'framer-motion';

// Custom Button Component
const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '',
  ...props 
}: {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-white/10 hover:border-green-500/30 text-white hover:bg-white/10"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-12 px-8 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// VideoCard Component with improved responsiveness
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
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden 
                 border border-white/10 hover:border-green-500/30 
                 flex flex-col h-full shadow-xl ${className}`}
    >
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <iframe 
          src={`https://www.youtube.com/embed/${videoUrl}`}
          className="absolute inset-0 w-full h-full"
          onLoad={() => setIsLoading(false)}
          onError={() => setError(true)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <motion.div 
        className="p-4 sm:p-6 flex-grow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 sm:mb-3">{title}</h3>
        <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed mb-4">{description}</p>
        <button className="w-full group flex items-center justify-center px-4 py-2 rounded-md
                        border border-white/10 hover:border-green-500/30 text-white
                        hover:bg-white/10 transition-all duration-200">
          Learn More 
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </motion.div>
  );
};

// Improved BackgroundVideo Component
const BackgroundVideo = ({ isVisible }: { isVisible: boolean }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleResize = () => {
      checkMobile();
      adjustVideoSize();
    };

    const adjustVideoSize = () => {
      if (containerRef.current && videoRef.current) {
        const container = containerRef.current;
        const containerAspect = container.offsetWidth / container.offsetHeight;
        const videoAspect = 16 / 9; // Standard YouTube aspect ratio

        if (containerAspect > videoAspect) {
          // Container is wider than video
          const scale = (container.offsetWidth / container.offsetHeight) * (9 / 16);
          videoRef.current.style.transform = `translate(-50%, -50%) scale(${Math.max(scale, 1.5)})`;
        } else {
          // Container is taller than video
          const scale = (container.offsetHeight / container.offsetWidth) * (16 / 9);
          videoRef.current.style.transform = `translate(-50%, -50%) scale(${Math.max(scale, 1.5)})`;
        }
      }
    };

    checkMobile();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlayback = () => setIsPlaying(!isPlaying);

  const controls = [
    { icon: isPlaying ? Pause : Play, action: togglePlayback, label: isPlaying ? 'Pause' : 'Play' },
    { icon: isMuted ? VolumeX : Volume2, action: toggleMute, label: isMuted ? 'Unmute' : 'Mute' },
    { icon: RotateCcw, action: () => {
      if (videoRef.current) {
        videoRef.current.src = videoRef.current.src;
      }
    }, label: 'Restart' }
  ];

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-0 transition-opacity duration-700 overflow-hidden
                 ${isVisible ? 'opacity-90' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
      
      <div className="absolute inset-0">
        <iframe 
          ref={videoRef}
          src={`https://www.youtube.com/embed/HEcclY4Pjk0?controls=0&autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=HEcclY4Pjk0&playsinline=1`}
          className="absolute w-auto min-w-full min-h-full max-w-none"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.5)',
            width: 'auto',
            height: '100vh'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {controls.map(({ icon: Icon, action, label }) => (
          <button
            key={label}
            onClick={action}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white/80 hover:text-white
                     hover:bg-black/70 transition-all duration-200 touch-manipulation"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const lastScrollPosition = useRef(0);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > lastScrollPosition.current;
    
    setShowVideo(currentScroll < window.innerHeight * 0.5);
    setShowScrollIndicator(currentScroll < 100);
    
    const sections = ['hero', 'solutions', 'products', 'applications'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (currentSection) {
      setActiveSection(currentSection);
    }
    
    lastScrollPosition.current = currentScroll;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
      <BackgroundVideo isVisible={showVideo} />

      <div className="relative z-10 container mx-auto px-4 overflow-x-hidden">
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center py-12 sm:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4"
          >
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-green-500 tracking-wider drop-shadow-lg">
                AGRONE-X
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-widest font-semibold drop-shadow-lg">
                Future of Agriculture
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed drop-shadow-lg">
                <span className="font-semibold">Pioneering sustainable agriculture</span>
                <br />
                <span className="text-white">through advanced drone solutions.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg">
                Empowering farmers with precision technology for a greener tomorrow.
              </p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 
                       transition-opacity duration-500 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronDown className="w-8 h-8 text-green-500" />
          </motion.div>
        </section>

        <section id="solutions" className="py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Discover Our <span className="text-green-500">Solutions</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto px-4">
              Explore our cutting-edge drone solutions designed to revolutionize agricultural practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <VideoCard {...card} className="h-full" />
              </motion.div>
            ))}
          </div>
        </section>

        <OurProducts />
        <IndustryApplications />
      </div>
    </div>
  );
};

export default Home;