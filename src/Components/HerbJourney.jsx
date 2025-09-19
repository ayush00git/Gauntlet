import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { QrCode, CheckCircle, FlaskConical, Factory, Building2, Users } from "lucide-react";

export default function HerbJourney() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: 1,
      title: "Farmer & Wild Collector",
      description: "Farmers and wild collectors gather herbs and take a live photo using the farmer panel. GPS location and timestamp are automatically captured and linked to a QR code.",
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      id: 2,
      title: "Middleman (Verified by Ayush Ministry)",
      description: "The herbs are packaged and handed over to a verified middleman authorized by the Ayush Ministry to ensure supply chain legitimacy.",
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 3,
      title: "Ayush Ministry",
      description: "The middleman forwards the herb unit to the Ayush Ministry for official logging and validation, maintaining transparency.",
      icon: <Building2 className="w-10 h-10 text-indigo-600" />,
    },
    {
      id: 4,
      title: "Laboratory Testing",
      description: "The herb batch undergoes authenticity and purity testing. Reports are uploaded directly to the system and linked to the QR code.",
      icon: <FlaskConical className="w-10 h-10 text-purple-600" />,
    },
    {
      id: 5,
      title: "Manufacturer",
      description: "After successful verification, the herbs are delivered to manufacturers. The QR code shows the entire transparent journey from farm to pharma.",
      icon: <Factory className="w-10 h-10 text-orange-600" />,
    },
  ];

  const handleNext = () => {
    if (stage < steps.length) {
      setIsAnimating(true);
      const newStage = stage + 1;
      
      setTimeout(() => {
        setStage(newStage);
        setIsAnimating(false);
        
        // Scroll to the current step
        if (stepRefs.current[newStage - 1]) {
          stepRefs.current[newStage - 1].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 600);
    }
  };

  const resetJourney = () => {
    setStage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center py-12 px-6">
      {/* Sticky Back Button */}
      <div className="sticky top-0 left-0 w-full z-20 flex justify-start bg-transparent pt-2 pb-4">
        <button
          onClick={() => navigate('/')}
          className="ml-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg font-semibold shadow transition-colors"
        >
          ← Back
        </button>
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        Transparent Ayurveda <span className="text-green-700">Supply Chain</span>
      </h1>

      {/* QR Code Display with Animation - Only show at top if no stage completed */}
      {stage === 0 && (
        <div className="flex flex-col items-center mb-8 bg-white rounded-2xl p-6 shadow-lg border">
          <div className="relative">
            <QrCode 
              className="w-20 h-20 text-gray-700 transition-all duration-600" 
            />
          </div>
          
          <p className="text-sm text-gray-600 mt-3 text-center font-medium">
            QR not yet updated
          </p>
          
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className={`px-6 py-2 bg-green-600 rounded-lg text-white font-medium transition-all duration-200 ${
                isAnimating 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-green-700 hover:scale-105 active:scale-95'
              }`}
            >
              {isAnimating ? 'Updating...' : 'Start Journey'}
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-md mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `0%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Vertical Steps */}
      <div className="w-full max-w-3xl space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="space-y-4">
            <div
              ref={(el) => (stepRefs.current[index] = el)}
              className={`flex items-start gap-4 p-6 rounded-2xl shadow-md border-l-4 transition-all duration-700 transform ${
                stage >= step.id
                  ? "bg-green-100 border-green-500 scale-100 opacity-100"
                  : "bg-white border-gray-200 scale-95 opacity-70"
              } ${stage === step.id ? 'ring-2 ring-green-300 ring-opacity-50' : ''}`}
            >
              <div className="flex-shrink-0 relative">
                {step.icon}
                {stage >= step.id && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h2 className={`text-lg font-semibold transition-colors duration-300 ${
                  stage >= step.id ? 'text-green-800' : 'text-gray-800'
                }`}>
                  {step.title}
                </h2>
                <p className={`text-sm mt-1 transition-colors duration-300 ${
                  stage >= step.id ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
                {stage === step.id && (
                  <div className="mt-2 text-xs text-green-600 font-medium animate-pulse">
                    ← Current Stage
                  </div>
                )}
              </div>
            </div>
            
            {/* QR Code after each completed stage */}
            {stage >= step.id && (
              <div className="flex justify-center">
                <div className="bg-white rounded-xl p-4 shadow-md border border-green-200 max-w-sm w-full">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <QrCode className="w-16 h-16 text-green-600" />
                      {isAnimating && stage === step.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({length: 9}).map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
                                style={{
                                  animationDelay: `${i * 100}ms`,
                                  animationDuration: '600ms'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">
                      Updated: Stage {step.id}
                    </p>
                    
                    {/* Progress bar for each stage */}
                    <div className="w-full max-w-md mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${Math.min((step.id / steps.length) * 100, 100)}%` }}
                      ></div>
                    </div>
                    
                    {stage < steps.length && step.id === stage && (
                      <button
                        onClick={handleNext}
                        disabled={isAnimating}
                        className={`mt-3 px-4 py-2 bg-green-600 rounded-lg text-white text-sm font-medium transition-all duration-200 ${
                          isAnimating 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-green-700 hover:scale-105 active:scale-95'
                        }`}
                      >
                        {isAnimating ? 'Updating...' : 'Next Stage'}
                      </button>
                    )}
                    
                    {step.id === steps.length && stage === steps.length && (
                      <button
                        onClick={resetJourney}
                        className="mt-3 px-4 py-2 bg-gray-600 rounded-lg text-white text-sm font-medium hover:bg-gray-700 transition-all duration-200"
                      >
                        Reset Journey
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {stage === steps.length && (
        <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white text-center shadow-xl">
          <h3 className="text-xl font-bold mb-2">Journey Complete!</h3>
          <p className="text-green-100">
            Your herbs have successfully completed the transparent supply chain journey.
            The QR code now contains the complete traceability information.
          </p>
        </div>
      )}
    </div>
  );
}