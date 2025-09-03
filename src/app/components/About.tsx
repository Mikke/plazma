import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from 'next/image';

const storeImages = [
  "/exterior/1.jpg",
  "/exterior/2.jpg",
  "/exterior/3.jpg"
];

const interiorImages = [
  "/interior/1.jpg",
  "/interior/2.jpg",
  "/interior/3.jpg",
  "/interior/4.jpg",
  "/interior/5.jpg"
];

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % storeImages.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % interiorImages.length);
    }, 5000);
    return () => clearInterval(carouselInterval);
  }, []);

  const nextSlide = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % interiorImages.length);
  };

  const prevSlide = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  return (
    <section className="py-20 px-4 relative scroll-mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={storeImages[currentImageIndex]}
          alt="Store Interior"
          className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            About Puff Puff Pass Plaza
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-300">
              Paradise Found
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nestled in the heart of Phuket Island, Puff Puff Pass Plaza represents the pinnacle of cannabis culture in Thailand. Our store offers a carefully curated selection of premium products in a welcoming and unique atmosphere.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We pride ourselves on providing education, quality, and exceptional customer service to both locals and visitors seeking the finest cannabis experience Thailand has to offer.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={interiorImages[currentCarouselIndex]}
                  alt={`Store Interior ${currentCarouselIndex + 1}`}
                  className="w-full h-84 object-cover transition-all duration-500"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                  {currentCarouselIndex + 1} / {interiorImages.length}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {interiorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCarouselIndex 
                        ? 'bg-purple-400 w-6' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Visit Us Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Visit Our Store
          </button>
        </div>
      </div>
    </section>
  );
}