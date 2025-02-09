const LandingPage = () => {
    return (
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Using a div with background image for better control */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:"../assets/",
              filter: "brightness(0.8)",
            }}
          />
  
          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold text-white mb-8 tracking-wider">AGRONE-X</h1>
  
            <p className="text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
              Empowering agriculture, disaster management, mining, and renewable energy sectors with cutting-edge drone
              solutions
            </p>
  
            {/* Logos Container */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8">
              {/* Make in India Logo */}
              <div className="w-24">
                <img src="/make-in-india-logo.png" alt="Make in India" className="w-full" />
              </div>
  
              {/* Aries Solutions */}
              <div className="text-white text-2xl font-semibold">ARIES SOLUTIONS</div>
  
              {/* DGCA Certificate */}
              <div className="w-24">
                <img src="/dgca-certificate.png" alt="DGCA Certified" className="w-full" />
              </div>
            </div>
          </div>
  
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>
      </div>
    )
  }
  
  export default LandingPage
  
  