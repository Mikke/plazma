import { Facebook, Instagram, Send } from "lucide-react";

const socialNetworks = [
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@PuffPuffPassPlaza",
    followers: "18.3K",
    description: "Behind-the-scenes content and product showcases",
    link: "http://instagram.com/puffpuffpassplaza",
    color: "from-pink-600 via-purple-600 to-indigo-600"
  },
  // {
  //   name: "Facebook",
  //   icon: Facebook,
  //   handle: "@PuffPuffPassPlaza",
  //   followers: "12.5K",
  //   description: "Latest updates, events, and community discussions",
  //   link: "#",
  //   color: "from-blue-600 to-blue-500"
  // },
  {
    name: "Telegram",
    icon: Send,
    handle: "@puffpuffplaza",
    followers: "5.2K",
    description: "Direct updates, exclusive offers, and customer support",
    link: "https://t.me/puffpuffplaza",
    color: "from-blue-500 to-cyan-500"
  }
];

export function SocialNetworks() {
  return (
    <section className="py-20 px-4 bg-black/20 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            Follow Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay connected with Puff Puff Pass Plaza across all social platforms for the latest updates, exclusive content, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {socialNetworks.map((network, index) => {
            const IconComponent = network.icon;
            return (
              <div key={index} className="group">
                <a
                  href={network.link}
                  className="block bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-green-400/40 transform hover:scale-105"
                >
                  <div className="text-center">
                    <div className={`bg-gradient-to-r ${network.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {network.name}
                    </h3>
                    
                    <p className="text-green-400 mb-2">
                      {network.handle}
                    </p>
                    
                    <div className="hidden text-3xl font-bold text-green-300 mb-4">
                      {network.followers}
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {network.description}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Join our growing community of cannabis enthusiasts in Phuket
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
              #PuffPuffPassPlaza
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
              #PhuketCannabis
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
              #ThailandCannabis
            </span>
          </div>
        </div>
       {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-500/20">
          <p className="text-gray-400 mb-4">
            © 2025 Puff Puff Pass Plaza. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Please consume responsibly. Must be 20+ years old. Valid ID required.
          </p>
        </div>
      </div>
    </section>
  );
}