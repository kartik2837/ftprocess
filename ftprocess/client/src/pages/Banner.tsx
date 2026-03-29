import React, { useState, useEffect } from "react";
import banner1 from '../assets/banners.png'
import banner2 from '../assets/2.jpeg'
import banner3 from '../assets/3.jpeg'
import banner4 from '../assets/4.jpeg'

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const banners = [banner1, banner2, banner3, banner4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full">
        {/* Banner Images - No Zoom */}
        <div className="relative w-full h-[95vh] md:h-[100vh] lg:h-[110vh]">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <img
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Large Size */}
        <button
          onClick={goToPrevious}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 text-white p-5 rounded-full transition-all duration-300 z-20 hover:scale-110 shadow-2xl"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 text-white p-5 rounded-full transition-all duration-300 z-20 hover:scale-110 shadow-2xl"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation - Large Size */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-3 bg-orange-500 rounded-full'
                  : 'w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm opacity-80">Scroll</span>
            <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;