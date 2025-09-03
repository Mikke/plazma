import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const strains = [
  {
    name: "10G's",
    type: "Indica",
    thc: "27-30%",
    description:
      "The strongest indica from the limited drop by Compound Genetics will make you feel your own weight 10 times more than usual!",
    image:
      "https://cdn.shopify.com/s/files/1/0455/6446/1210/files/10Gs.png?v=1687542874",
  },
  {
    name: "Mofongo",
    type: "Indica",
    thc: "30%",
    cbd: "0.8%",
    description:
      "Our signature indica strain with deep relaxation properties, perfect for unwinding at the plaza.",
    image:
      "/strains/mofongo.jpg",
  },
  {
    name: "Violet Meadows",
    type: "Hybrid",
    thc: "28%",
    cbd: "1.2%",
    description:
      "A tropical blend inspired by the island's natural beauty, offering balanced effects perfect for sunset sessions.",
    image:
      "/strains/violet_meadows.jpeg",
  },
  {
    name: "Mango Mochi",
    type: "Sativa",
    thc: "26%",
    cbd: "2.1%",
    description:
      "A modern tribute to Thailand's legendary Thai Stick, delivering energetic and creative effects.",
    image:
      "/strains/mango_mochi.jpeg",
  },
  {
    name: "Permanent Marker",
    type: "Hybrid",
    thc: "28%",
    cbd: "1.8%",
    description:
      "Light and uplifting like the sea breeze, perfect for daytime adventures and beach activities.",
    image:
      "/strains/permanent_marker.jpg",
  },
  {
    name: "Red Taffi",
    type: "Hybrid",
    thc: "28%",
    cbd: "1.8%",
    description:
      "Delicious smells and taste light day hybrid for perfect mood!",
    image:
      "/strains/red_taffi.jpg",
  },
];

export function BrandedStrains() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const maxSlide =
    Math.ceil(strains.length / itemsPerSlide) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= maxSlide ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? maxSlide : prev - 1,
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Indica":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Sativa":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "Hybrid":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 px-4 bg-black/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            Branded Strains
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive strains developed and curated specifically
            for Puff Puff Pass Plaza, each with unique
            characteristics inspired by Phuket's natural beauty.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({
                length: Math.ceil(
                  strains.length / itemsPerSlide,
                ),
              }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {strains
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide,
                      )
                      .map((strain, index) => (
                        <Card
                          key={index}
                          className="bg-white/5 backdrop-blur-sm border-green-500/20 hover:bg-white/10 transition-all duration-300 hover:border-green-400/40 overflow-hidden group"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <ImageWithFallback
                              src={strain.image}
                              alt={strain.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <CardContent className="p-6 relative">
                            <h3 className="text-xl font-semibold mb-2 text-green-300">
                              {strain.name}
                            </h3>
                            <div className="absolute top-6 right-6">
                              <Badge
                                className={`${getTypeColor(strain.type)} border`}
                              >
                                {strain.type}
                              </Badge>
                            </div>

                            <div className="flex gap-4 mb-4">
                              <div className="text-left">
                                <div className="text-xs text-gray-400">
                                  THC
                                </div>
                                <div className="text-2xl font-bold text-green-400">
                                  {strain.thc}
                                </div>
                              </div>
                              {strain.cbd && <div className="text-left">
                                <div className="text-xs text-gray-400">
                                  CBD
                                </div>
                                <div className="text-2xl font-bold text-blue-400">
                                  {strain.cbd}
                                </div>
                              </div>}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                              {strain.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/60 border-green-500/30 text-green-400 hover:bg-green-500/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/60 border-green-500/30 text-green-400 hover:bg-green-500/20"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-green-400"
                    : "bg-gray-600"
                }`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}