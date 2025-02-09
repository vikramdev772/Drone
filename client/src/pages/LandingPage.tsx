import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import drone from "../assets/Drone.png"
import makeInIndiaLogo from "../assets/make-in-india-logo.png"
import dgcaCertificate from "../assets/dgca-certificate.png"
import { AnimatedDrone } from "./AnimatedDrone"
import { Button } from "../ui/button"
import logo from "../assets/logo.png"
import { ArrowDown, Leaf, Shield, Zap } from "lucide-react"

const LandingPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Parallax and scroll-based animations
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: "Eco-Friendly",
      description: "Sustainable agricultural practices"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "High Efficiency",
      description: "Precision farming technology"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Reliable",
      description: "DGCA certified operations"
    }
  ]

  return (
    <div ref={mainRef} className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Navigation Bar */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
      </motion.nav>

      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-20" />
          <div className="absolute inset-0 bg-noise opacity-[0.015]" />
          
          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 container mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Logo & Title */}
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="AgroneX Logo"
                className="w-24 h-24 object-contain filter drop-shadow-glow"
              />
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-green-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
            
            <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
              <span className="relative">
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                  AGRONE-X
                </span>
                <motion.span
                  className="absolute -inset-2 bg-green-500/20 blur-xl rounded-lg"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </span>
            </h1>
            
            <motion.span 
              className="text-lg text-gray-400 tracking-widest uppercase mt-4"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Future of Agriculture
            </motion.span>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            className="max-w-3xl mx-auto mb-12 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              <span className="font-medium text-white">
                Pioneering sustainable agriculture
              </span>{" "}
              through advanced drone solutions.
            </p>
            <p className="text-lg text-gray-400">
              Empowering farmers with precision technology for a greener tomorrow.
            </p>
          </motion.div>

          {/* Enhanced Drone Animation */}
          <div className="relative my-20">
            <AnimatedDrone droneImage={drone} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Enhanced Feature Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
                <div className="relative p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                  <div className="p-3 bg-white/10 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="mt-16 space-x-6 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg bg-gray-900/50 text-white border-green-500/50 
                hover:bg-green-500/10 hover:border-green-400 backdrop-blur-sm
                shadow-lg shadow-black/20 transition-all duration-300"
            >
              Explore Solutions
            </Button>
            <Button 
              className="px-8 py-4 text-lg bg-gradient-to-r from-green-500 to-emerald-600 
                hover:from-green-400 hover:to-emerald-500 text-white
                shadow-lg shadow-green-500/30 transition-all duration-300"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Certification Badges */}
        <motion.div
          className="absolute bottom-20 w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {[
              { src: makeInIndiaLogo, alt: "Make in India" },
              { 
                type: "text", 
                content: "ARIES SOLUTIONS",
                className: "text-3xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
              },
              { src: dgcaCertificate, alt: "DGCA Certified" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)",
                }}
              >
                {item.type === 'text' ? (
                  <span className={item.className}>{item.content}</span>
                ) : (
                  <img 
                    src={item.src || "/placeholder.svg"} 
                    alt={item.alt}
                    className="w-28 h-auto filter drop-shadow-md" 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-8 h-8 text-green-400" />
        </motion.div>
      </motion.section>
    </div>
  )
}

export default LandingPage