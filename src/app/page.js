'use client'

import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { BrandedStrains } from "./components/BrandedStrains";
import { HealthCare } from "./components/HealthCare";
import { Partners } from "./components/Partners";
import { SocialNetworks } from "./components/SocialNetworks";
import { Contact } from "./components/Contact";
import { AgeVerification } from "./components/AgeVerification";

export default function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if age verification exists and is still valid
    const checkAgeVerification = () => {
      try {
        const stored = localStorage.getItem('ageVerified');
        if (stored) {
          const { verified, expiry } = JSON.parse(stored);
          const now = new Date().getTime();
          
          if (verified && expiry > now) {
            setIsAgeVerified(true);
          } else {
            // Expired, remove from localStorage
            localStorage.removeItem('ageVerified');
          }
        }
      } catch (error) {
        // Error parsing, remove invalid data
        localStorage.removeItem('ageVerified');
      }
      setIsLoading(false);
    };

    checkAgeVerification();
  }, []);

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  // Show loading state briefly to prevent flash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  // Show age verification if not verified
  if (!isAgeVerified) {
    return <AgeVerification onVerified={handleAgeVerified} />;
  }

  // Show main website content
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/12 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-green-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-fuchsia-400/6 rounded-full blur-3xl"></div>
      </div>
      
      <Navigation />
      
      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="strains">
          <BrandedStrains />
        </section>
        <section id="healthcare">
          <HealthCare />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="social">
          <SocialNetworks />
        </section>
      </div>
    </div>
  );
}