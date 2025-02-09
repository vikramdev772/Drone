import React, { useState, useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import { Play, Pause, RotateCcw, Volume2, Volume1, VolumeX, FastForward } from 'lucide-react';
import ProductSection from '../components/ProductSection';
import Banner from '../components/Banners';
import Products from '../components/Products';
import UseCases from '../components/UseCases';
import Footer from '../components/Footer';
import { products } from '../data/Products';
import ProductCard from '../components/ProductCard';
import agrone from '../assets/long.mp4';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        setDuration(videoRef.current?.duration || 0);
      });

      videoRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(videoRef.current?.currentTime || 0);
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', () => {});
        videoRef.current.removeEventListener('timeupdate', () => {});
      }
    };
  }, []);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX />;
    if (volume < 0.5) return <Volume1 />;
    return <Volume2 />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Banner />
      
      {/* Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our Products</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Discover our range of advanced agricultural drones designed to revolutionize farming practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                src={agrone}
                muted={volume === 0}
                loop
              />
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar */}
                <div
                  ref={progressRef}
                  className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-green-500 rounded-full relative"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={handlePlayPause}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>

                    {/* Reset Button */}
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                        }
                      }}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>

                    {/* Playback Speed */}
                    <select
                      value={playbackRate}
                      onChange={(e) => {
                        const rate = parseFloat(e.target.value);
                        setPlaybackRate(rate);
                        if (videoRef.current) {
                          videoRef.current.playbackRate = rate;
                        }
                      }}
                      className="bg-transparent hover:bg-white/10 rounded-lg px-2 py-1 outline-none"
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={1}>1x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2x</option>
                    </select>

                    {/* Time Display */}
                    <div className="text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setVolume(volume === 0 ? 1 : 0)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      {getVolumeIcon()}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 accent-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCases />
      <Footer />
    </div>
  );
};

export default Home;