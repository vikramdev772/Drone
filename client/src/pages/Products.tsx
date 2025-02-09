import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Battery, Camera, Play, Pause, Volume2, VolumeX, Maximize, Minimize, CheckCircle } from 'lucide-react';
import vid from '../assets/short.mp4';
import image1 from '../assets/eas.png';
import image2 from '../assets/eff.png';
import image3 from '../assets/saf.png';

interface Specification {
  icon?: JSX.Element;
  label: string;
  value: string;
}

interface DetailedSpecification {
  category: string;
  details: string[];
}

interface Banner {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface Drone {
  name: string;
  shortDescription: string;
  fullScreenVideoUrl: string;
  images: string[];
  specifications: Specification[];
  detailedSpecifications: DetailedSpecification[];
  banners: Banner[];
}

const Products: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const sampleDrone: Drone = {
    name: "AGRONE-X",
    shortDescription: "The AGRONE-X is a 10 Liters capacity Agriculture spraying drone designed and built in India.",
    fullScreenVideoUrl: vid,
    images: [
      "https://ariessol.com/wp-content/uploads/2024/01/easy-transport-300x300.png",
      "https://ariessol.com/wp-content/uploads/2024/01/Agrone.png",
      "https://ariessol.com/wp-content/uploads/2024/01/Agrone-x-product-300x300.png",
    ],
    specifications: [
      { icon: <Battery className="w-6 h-6 text-blue-400" />, label: "Flight Time", value: "45 mins" },
      { icon: <Camera className="w-6 h-6 text-green-400" />, label: "Camera", value: "4K/60fps" },
      { label: "Range", value: "10 km" }
    ],
    detailedSpecifications: [
      { category: "Camera", details: ["4K Ultra HD Video", "12MP Still Image", "1/2.3\" CMOS Sensor", "F/2.8 Aperture"] },
      { category: "Flight Performance", details: ["Max Speed: 68 km/h", "Wind Resistance: Level 5", "Hovering Accuracy: ±0.1m", "Max Transmission Distance: 10 km"] }
    ],
    banners: [
      { title: "Professional Photography", description: "Capture stunning 4K aerial shots with precision gimbal stabilization", icon: <Camera className="w-12 h-12 text-blue-400" /> },
      { title: "Stable Flight Controller", description: "AGRONE-X has an incredibly steady flight controller for agriculture applications.", icon: <Battery className="w-12 h-12 text-green-400" /> },
      { title: "Advanced Navigation", description: "Intelligent obstacle avoidance and GPS tracking", icon: <Maximize className="w-12 h-12 text-purple-400" /> }
    ]
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div>
      <div className="w-full relative">
        <video ref={videoRef} src={vid} className="w-full h-[80vh] object-cover" loop muted={isMuted} />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <img src={sampleDrone.images[activeImage]} alt="Drone" className="w-full h-[500px] object-cover" />
            </div>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl font-bold mb-4">{sampleDrone.name}</h1>
            <p className="text-gray-300 mb-6">{sampleDrone.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <div className="absolute inset-0 pt-5">
          <img src={image1} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Detailed Specifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {sampleDrone.detailedSpecifications.map((category, index) => (
            <div key={index} className="glass p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
              <ul className="space-y-3">
                {category.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
