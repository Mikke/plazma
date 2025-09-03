import { Cannabis, Droplets, Pipette, Cookie, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";


import Bong from './../../../public/bong.svg';

const products = [
  {
    icon: Cannabis,
    title: "Premium Flower",
    description: "Hand-selected, locally grown cannabis flowers with exceptional potency and flavor profiles. Our collection features sativa, indica, and hybrid strains."
  },
  // {
  //   icon: Droplets,
  //   title: "Concentrates",
  //   description: "High-quality extracts, rosin produced using state-of-the-art extraction methods for maximum purity and potency."
  // },
  {
    icon: Pipette,
    title: "CBD Oils & Tinctures",
    description: "Precisely dosed CBD cannabis oils and tinctures perfect for therapeutic applications with consistent effects."
  },
  // {
  //   icon: Cookie,
  //   title: "Edibles",
  //   description: "Delicious cannabis-infused treats including gummies, chocolates, and baked goods with reliable dosing and tropical flavors."
  // },
  {
    icon: Bong,
    title: "Accessories",
    description: "Premium smoking accessories, vaporizers, and cannabis lifestyle products to enhance your experience and storage solutions."
  }
];

export function Products() {
  console.log(Bong)
  return (
    <section className="py-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium cannabis products, each chosen for quality and consistency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/40 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-green-500/30 transition-all">
                    <IconComponent className="w-8 h-8 text-purple-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}