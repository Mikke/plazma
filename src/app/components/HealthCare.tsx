import { Stethoscope, ClipboardList, ShieldCheck, UserCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const healthServices = [
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    description: "Professional medical examination by licensed healthcare providers to assess your individual health status and cannabis compatibility."
  },
  {
    icon: ClipboardList,
    title: "Risk Assessment",
    description: "Comprehensive evaluation of potential risks, drug interactions, and personalized recommendations based on your medical history."
  },
  {
    icon: ShieldCheck,
    title: "Safe Usage Guidelines",
    description: "Detailed guidance on proper dosing, consumption methods, and safety protocols tailored to your specific needs and conditions."
  },
  {
    icon: UserCheck,
    title: "Cannabis Prescription",
    description: "Legal cannabis prescription services for qualifying patients, ensuring compliant and regulated access to medical cannabis."
  }
];

export function HealthCare() {
  return (
    <section className="py-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Health Care Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Puff Puff Pass Plaza, we prioritize your health and safety. Our certified medical professionals provide comprehensive cannabis health consultations to ensure you make informed decisions about your cannabis use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {healthServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-transparent border-none rounded-2xl p-6 transition-all duration-300 group text-center hover:bg-white/5">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-500/10 to-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/20 group-hover:to-green-500/20 transition-all border border-purple-500/20">
                    <IconComponent className="w-8 h-8 text-purple-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-green-900/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm border border-purple-500/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Professional Medical Cannabis Consultation
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our licensed medical professionals will conduct a thorough health assessment, review your medical history, and provide personalized recommendations. For qualifying patients, we can issue legal cannabis prescriptions in compliance with Thai regulations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">30 min</div>
                <div className="text-gray-400">Consultation Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">Licensed</div>
                <div className="text-gray-400">Medical Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Same Day</div>
                <div className="text-gray-400">Prescription Available</div>
              </div>
            </div>
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Book Medical Consultation
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Medical cannabis consultations are provided by licensed healthcare professionals. Prescriptions are issued only for qualifying medical conditions in accordance with Thai cannabis regulations. All consultations are confidential and HIPAA compliant.
          </p>
        </div>
      </div>
    </section>
  );
}