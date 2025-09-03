import { ImageWithFallback } from "./figma/ImageWithFallback";

const partners = [
  {
    name: "Mellow Face",
    logo: "/partners/mellow_face.jpg",
    description:
      "Leading living soil cannabis cultivation and research partner",
  },
  {
    name: "Lil Batches",
    logo: "/partners/lil_batches.png",
    description:
      "Inhouse crafted cannabis cultivationn by Puff Puff Pass Plaza team",
  },
  {
    name: "Weekend Boxing",
    logo: "/partners/weed_boxing.jpg",
    description:
      "Weed boxing championship",
  },
];

export function Partners() {
  return (
    <section className="py-20 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with trusted partners to bring you
            the highest quality cannabis products and
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <div className="rounded-2xl p-8 transition-all duration-300">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">
                  {partner.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Interested in partnering with us?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}