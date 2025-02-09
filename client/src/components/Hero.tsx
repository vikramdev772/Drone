import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroVideo from "../assets/long.mp4";

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen bg-black text-white">
            {/* Background Video */}
            <video
                src={heroVideo}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            />
            {/* Overlay with Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
                    Empowering India Through Innovation
                </h1>
                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in delay-1">
                    Discover how Aries Solutions is transforming agriculture, energy, and industries with DGCA-certified drones.
                </p>
                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                        Explore Products
                    </button>
                    <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Watch Our Story
                    </button>
                </div>
                {/* Scroll Down Indicator */}
                <div className="absolute bottom-6 animate-bounce">
                    <span className="text-gray-300">Scroll Down</span>
                    <div className="w-6 h-6 mt-2 border-2 border-gray-300 rounded-full mx-auto"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
