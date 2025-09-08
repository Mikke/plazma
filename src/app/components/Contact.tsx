import { useState } from "react";
import { Star, Send, MapPin, Phone, Mail, Navigation as NavigationIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const testimonials = [
  {
    name: "Eric James",
    rating: 5,
    comment: "Very nice quality weed. Im from California and was honestly impressed with the quality they have here..many options too for all budgets . This my 2nd time coming back at that",
    link: "https://maps.app.goo.gl/mjQxdXYuqvWm9Gb48"
  },
  {
    name: "Luca Ubizzoni",
    rating: 5,
    comment: "Best coffeeshop in town, very good quality, people behind the desk very helpful and kind",
    link: "https://maps.app.goo.gl/XGRD3D4UHs6ANfd78"
  },
  {
    name: "WAVYLUCCA",
    rating: 5,
    comment: "True love for what they do. Excellent quality and good prices. Keep in mind I come from the east coast, all I know is high quality 🔥🔥🔥",
    link: "https://maps.app.goo.gl/tobcBFVchsJZj6rE9"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Address & Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We value your feedback and are here to help. Reach out to us or share your experience with the community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            {/* Map */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-green-900/20 border-purple-500/20 overflow-hidden">
              <CardContent className="p-4">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                  Location
                </h3>
                <div className="relative w-full h-100 lg:h-[520px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9961314975176!2d98.326465!3d7.790233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502903a865392d%3A0xcee588f55c39790c!2sPuff%20Puff%20Pass%20Plaza!5e0!3m2!1sen!2sru!4v1754405949333!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                    title="Puff Puff Pass Plaza Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-purple-900/20 to-green-900/20 backdrop-blur-sm border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-300">
                  Visit Our Store
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <p className="text-white">43/205 Soi Saiyuan, Rawai</p>
                      <p className="text-gray-400">Mueang District, Phuket 83130, Thailand</p>
                    </div>
                    {/* Navigation Button */}
                    <Button 
                      className="hidden lg:flex w-60 bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-purple-500/30"
                      onClick={() => window.open('https://maps.app.goo.gl/HFVhEM6wqY2PkGQT8', '_blank')}
                    >
                      <NavigationIcon className="w-5 h-5 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                  {/* Navigation Button */}
                  <Button 
                    className="lg:hidden w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-purple-500/30 mb-8"
                    onClick={() => window.open('https://maps.app.goo.gl/HFVhEM6wqY2PkGQT8', '_blank')}
                  >
                    <NavigationIcon className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <p className="text-white">+66 76 123 456</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
            <p className="text-white">info@puffpuffpassplaza.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-green-900/20 backdrop-blur-sm border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                  Store Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-white">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 01:00 AM</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Saturday - Sunday</span>
                    <span>10:00 AM - 02:00 AM</span>
                  </div>
                  <div className="flex justify-between text-purple-400 font-semibold pt-2 border-t border-purple-500/20">
                    <span>Holiday Hours</span>
                    <span>May Vary</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-green-900/20 border-purple-500/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-green-300">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Distance from Airport</span>
                    <span className="text-purple-400">1 hour</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Parking Available</span>
                    <span className="text-green-400">Free</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/20 to-green-900/20 backdrop-blur-sm border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}