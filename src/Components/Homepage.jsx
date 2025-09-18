import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Database, 
  Map, 
  Scan, 
  Users, 
  FlaskConical, 
  Building2, 
  Leaf,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import PanelSection from './Panels';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedPins, setAnimatedPins] = useState([]);

  // Animate map pins on mount
  useEffect(() => {
    const pins = [
      { id: 1, x: 25, y: 30, delay: 0 },
      { id: 2, x: 65, y: 45, delay: 200 },
      { id: 3, x: 40, y: 60, delay: 400 },
      { id: 4, x: 80, y: 25, delay: 600 },
      { id: 5, x: 15, y: 70, delay: 800 }
    ];
    
    pins.forEach(pin => {
      setTimeout(() => {
        setAnimatedPins(prev => [...prev, pin.id]);
      }, pin.delay);
    });
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Geotag Herbs",
      description: "Precisely locate and map medicinal plants with GPS coordinates"
    },
    {
      icon: Database,
      title: "Herb Database",
      description: "Comprehensive repository of medicinal plants and their properties"
    },
    {
      icon: Map,
      title: "Interactive Map",
      description: "Explore herb distributions across India with real-time data"
    },
    {
      icon: Scan,
      title: "AI Identification",
      description: "Advanced image recognition for accurate plant identification"
    }
  ];

  const stakeholders = [
    {
      icon: Users,
      title: "Farmers & Collectors",
      benefits: ["Income opportunities", "Sustainable harvesting", "Market access"]
    },
    {
      icon: FlaskConical,
      title: "Researchers",
      benefits: ["Rich datasets", "Distribution patterns", "Conservation insights"]
    },
    {
      icon: Building2,
      title: "Pharma Industry",
      benefits: ["Supply chain transparency", "Quality assurance", "Sourcing efficiency"]
    },
    {
      icon: Leaf,
      title: "Conservationists",
      benefits: ["Biodiversity mapping", "Habitat protection", "Species monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HerbMap</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Database</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Research</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Database</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Research</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-green-100 to-emerald-100 relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M20,20 Q30,10 40,20 T60,20 Q70,15 80,25 L85,40 Q80,50 70,45 L60,50 Q50,60 40,50 L30,55 Q25,45 20,40 Z" 
                    fill="currentColor" className="text-green-200/30" />
              <path d="M10,60 Q20,55 30,65 T50,65 Q60,60 70,70 L75,80 Q70,90 60,85 L50,90 Q40,95 30,85 L20,90 Q15,80 10,75 Z" 
                    fill="currentColor" className="text-emerald-200/30" />
            </svg>
          </div>
        </div>

        {/* Floating Herb Illustrations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float">
            <Leaf className="h-12 w-12 text-green-300/40 transform rotate-12" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
            <Leaf className="h-8 w-8 text-emerald-400/40 transform -rotate-45" />
          </div>
          <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
            <Leaf className="h-10 w-10 text-green-400/40 transform rotate-90" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Mapping India's
            <span className="block text-green-600">Medicinal Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Discover, document, and preserve the rich biodiversity of medicinal plants across India through community-driven geotagging
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg cursor-pointer font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Explore Map
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg cursor-pointer font-semibold border-2 border-green-600 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contribute Herb Data
            </button>
          </div>
        </div>
      </section>
      <PanelSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Plant <span className='text-green-700'>Conservation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets traditional knowledge to create a comprehensive medicinal plant mapping platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Every Stakeholder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform creates value for diverse communities working with medicinal plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <stakeholder.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{stakeholder.title}</h3>
                <ul className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;