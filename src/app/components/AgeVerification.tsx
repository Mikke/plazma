import { useState, useEffect } from "react";
import { Calendar, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from './../../../public/logo.png';

interface AgeVerificationProps {
  onVerified: () => void;
}

export function AgeVerification({ onVerified }: AgeVerificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleVerification = (isOfAge: boolean) => {
    if (isOfAge) {
      // Store verification in localStorage for 30 days
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      localStorage.setItem('ageVerified', JSON.stringify({
        verified: true,
        expiry: expiryDate.getTime()
      }));
      setIsVisible(false);
      onVerified();
    } else {
      // Redirect to a safe page or show appropriate message
      window.location.href = "https://www.google.com";
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      {/* Background Abstract Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-violet-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600/25 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-md w-full mx-4">
        <div className="bg-gradient-to-br from-purple-900/80 to-black/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 text-center shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logoImage} 
              alt="Puff Puff Pass Plaza Logo" 
              className="w-24 h-12 object-contain"
            />
          </div>

          {/* Warning Icon */}
          <div className="bg-gradient-to-br from-purple-500/20 to-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
            <AlertTriangle className="w-8 h-8 text-amber-400" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Age Verification Required
          </h1>

          {/* Description */}
          <div className="mb-8 space-y-3">
            <p className="text-gray-300 text-sm leading-relaxed">
              You must be <strong className="text-purple-400">20 years or older</strong> to access this website.
            </p>
            <p className="text-gray-400 text-xs">
              This website contains information about cannabis products in accordance with Thai law.
            </p>
          </div>

          {/* Date Display */}
          <div className="bg-purple-900/40 rounded-2xl p-4 mb-8 border border-purple-500/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Today's Date</span>
            </div>
            <div className="text-xl font-semibold text-white">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Age Question */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-white mb-6">
              Are you 20 years of age or older?
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => handleVerification(true)}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-green-500/30"
              >
                Yes, I'm 20+
              </Button>
              <Button
                onClick={() => handleVerification(false)}
                variant="outline"
                className="bg-transparent border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 py-4 px-6 rounded-xl font-semibold transition-all duration-300"
              >
                No, I'm under 20
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-500 space-y-1">
            <p>By clicking "Yes", you certify that you are of legal age.</p>
            <p>Puff Puff Pass Plaza • Phuket, Thailand</p>
          </div>
        </div>
      </div>
    </div>
  );
}