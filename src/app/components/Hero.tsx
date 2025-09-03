import { MapPin, ChevronDown } from "lucide-react";
import SmokeScene from "./Smoke";
import logoImage from "./../../../public/logo.png";
import Image from "next/image";

export function Hero() {
  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById('about');
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16 hero">
      <div className="z-1">
        <div className="text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-center mb-8">
            <Image 
              src={logoImage} 
              alt="Puff Puff Pass Plaza Logo" 
              className="w-120 h-72 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-green-400 bg-clip-text text-transparent">
            Puff Puff Pass Plaza
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-purple-300">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Phuket Island, Thailand</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Premium Cannabis Experience in Paradise
          </p>
        </div>
  
        {/* Scroll Indicator 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-3 text-purple-300/80 hover:text-purple-200 transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              {/* Gradient border container with glow /}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/40 to-green-400/40 p-0.5 group-hover:from-purple-400/70 group-hover:to-green-400/70 transition-all duration-300 shadow-lg group-hover:shadow-purple-400/25">
                <div className="w-full h-full rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <ChevronDown className="w-5 h-5 text-purple-400 group-hover:text-green-400 transition-colors duration-300 group-hover:scale-110" />
                </div>
              </div>
              {/* Animated pulse ring /}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 animate-ping group-hover:border-green-400/30"></div>
            </div>
          </button>
        </div>*/}
      </div>
      <div className="absolute inset-0 z-0"><SmokeScene /></div>
    </section>
  );
}