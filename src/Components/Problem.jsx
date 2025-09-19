import React from 'react';
import { AlertTriangle, CheckCircle, Globe, Users, Beaker, Leaf, QrCode, Shield, Award, FlaskConical, MapPin, TreePine } from 'lucide-react';

const ProblemSolvedSection = () => {
  const sections = [
    {
      id: 1,
      title: "Ayurveda's Global Reputation",
      problem: {
        text: "Ayurveda is a $15B industry in India, but fake herb mixing and toxic metals have damaged its credibility. Exports often get rejected, hurting India's status as a global Ayurveda hub.",
        icon: AlertTriangle
      },
      solution: {
        text: "We ensure transparency with a live QR-based traceability system. Every step from farm to pharma is logged, so consumers and regulators can instantly verify authenticity.",
        icon: CheckCircle
      },
      imageLeft: true,
      illustration: "global-trade"
    },
    {
      id: 2,
      title: "Farmers Losing Profits & Recognition",
      problem: {
        text: "Farmers sell to middlemen who take away maximum profits, leaving farmers underpaid and unrecognized for their contributions.",
        icon: AlertTriangle
      },
      solution: {
        text: "We introduce a verified middleman system authorized by the Ayush Ministry. Middlemen earn a salary, not farmer profits. Farmers upload directly to the QR, gaining fair value and recognition.",
        icon: CheckCircle
      },
      imageLeft: false,
      illustration: "farmers"
    },
    {
      id: 3,
      title: "Detecting Adulteration & Accountability",
      problem: {
        text: "If 1 out of 100 herb units is adulterated, mixed batches make it impossible to identify the culprit, leading to unfair blame and unsafe supply chains.",
        icon: AlertTriangle
      },
      solution: {
        text: "Middlemen store small samples from each farmer with unique batch IDs. If lab results fail, the culprit farmer is traceable. After 3 warnings, the farmer is declared unverified — ensuring accountability.",
        icon: CheckCircle
      },
      imageLeft: true,
      illustration: "lab-testing"
    },
    {
      id: 4,
      title: "Endangered Herb Conservation",
      problem: {
        text: "Private farmers and wild collectors harvest endangered herbs without any tracking system. We have no visibility into which species are being over-harvested or where they're being collected from.",
        icon: AlertTriangle
      },
      solution: {
        text: "Through geo-tagging technology, we now track the exact GPS location of every herb collection. This enables authorities to monitor endangered species harvesting and take immediate action to prevent over-exploitation.",
        icon: CheckCircle
      },
      imageLeft: false,
      illustration: "geo-tracking"
    }
  ];

  const GlobalTradeIllustration = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl overflow-hidden">
      {/* Background world map pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-20 border-2 border-emerald-400 rounded-full transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-16 border-2 border-emerald-400 rounded-full transform -rotate-12"></div>
      </div>
      
      {/* Central globe */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Globe className="w-20 h-20 text-emerald-600 drop-shadow-lg" />
          <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1">
            <QrCode className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      
      {/* Floating herbs */}
      <div className="absolute top-8 left-12 bg-white rounded-full p-3 shadow-lg">
        <Leaf className="w-6 h-6 text-green-600" />
      </div>
      <div className="absolute bottom-12 right-8 bg-white rounded-full p-3 shadow-lg">
        <Leaf className="w-6 h-6 text-emerald-600 transform rotate-45" />
      </div>
      <div className="absolute top-16 right-16 bg-white rounded-full p-2 shadow-md">
        <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
      </div>
      
      {/* Export routes */}
      <div className="absolute top-1/3 left-8 w-16 h-0.5 bg-emerald-400 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-12 w-20 h-0.5 bg-emerald-400 transform -rotate-12"></div>
      
      {/* Verification badge */}
      <div className="absolute bottom-6 left-6 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
        <Shield className="w-3 h-3" />
        Verified
      </div>
    </div>
  );

  const FarmersIllustration = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl overflow-hidden">
      {/* Farm background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-200 to-transparent"></div>
        <div className="absolute top-8 left-8 right-8 h-0.5 bg-amber-300 opacity-50"></div>
      </div>
      
      {/* Farmer figure */}
      <div className="absolute bottom-20 left-1/4 transform -translate-x-1/2">
        <div className="bg-white rounded-full p-4 shadow-lg">
          <Users className="w-8 h-8 text-amber-600" />
        </div>
      </div>
      
      {/* Harvest baskets */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-8 h-6 bg-amber-600 rounded-b-full"></div>
        <div className="w-8 h-6 bg-green-600 rounded-b-full"></div>
        <div className="w-8 h-6 bg-emerald-600 rounded-b-full"></div>
      </div>
      
      {/* Verified middleman badge */}
      <div className="absolute top-1/3 right-1/4">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-emerald-200">
          <Award className="w-8 h-8 text-emerald-600 mb-2" />
          <div className="text-xs font-semibold text-emerald-700">Verified</div>
          <div className="text-xs text-gray-600">Middleman</div>
        </div>
      </div>
      
      {/* QR codes connecting elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <QrCode className="w-12 h-12 text-emerald-500 opacity-80" />
      </div>
      
      {/* Floating coins representing fair profits */}
      <div className="absolute top-12 right-12 space-y-1">
        <div className="w-6 h-6 bg-amber-400 rounded-full shadow-md"></div>
        <div className="w-6 h-6 bg-amber-400 rounded-full shadow-md ml-2"></div>
        <div className="w-6 h-6 bg-amber-400 rounded-full shadow-md"></div>
      </div>
    </div>
  );

  const LabTestingIllustration = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl overflow-hidden">
      {/* Lab bench */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-200 rounded-b-3xl"></div>
      
      {/* Test tubes */}
      <div className="absolute bottom-16 left-1/4 transform -translate-x-1/2 flex gap-2">
        <div className="w-3 h-12 bg-gradient-to-t from-red-400 to-transparent rounded-t-full border border-gray-300"></div>
        <div className="w-3 h-12 bg-gradient-to-t from-green-400 to-transparent rounded-t-full border border-gray-300"></div>
        <div className="w-3 h-12 bg-gradient-to-t from-blue-400 to-transparent rounded-t-full border border-gray-300"></div>
      </div>
      
      {/* Lab equipment */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <FlaskConical className="w-16 h-16 text-indigo-600" />
      </div>
      
      {/* Batch ID samples */}
      <div className="absolute top-1/3 right-1/4 space-y-2">
        <div className="bg-white rounded-lg p-2 shadow-md border">
          <div className="text-xs font-mono text-gray-600">ID: B001</div>
          <div className="w-6 h-4 bg-green-500 rounded mt-1"></div>
        </div>
        <div className="bg-white rounded-lg p-2 shadow-md border">
          <div className="text-xs font-mono text-gray-600">ID: B002</div>
          <div className="w-6 h-4 bg-red-500 rounded mt-1"></div>
        </div>
      </div>
      
      {/* QR verification */}
      <div className="absolute bottom-20 right-8">
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <QrCode className="w-8 h-8 text-indigo-600 mb-2" />
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-xs font-semibold text-green-600">Verified</span>
          </div>
        </div>
      </div>
      
      {/* Warning indicators */}
      <div className="absolute top-12 left-8 space-y-2">
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-md">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="text-xs">Warning 1</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-md">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <span className="text-xs">Warning 2</span>
        </div>
      </div>
    </div>
  );

  const GeoTrackingIllustration = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl overflow-hidden">
      {/* Mountain/forest background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-300 to-green-200 opacity-60"></div>
        <div className="absolute bottom-20 left-8 w-16 h-16 bg-green-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-16 right-12 w-20 h-20 bg-green-500 rounded-full opacity-30"></div>
        <div className="absolute top-12 left-1/4 w-12 h-12 bg-emerald-400 rounded-full opacity-50"></div>
      </div>
      
      {/* Endangered herbs */}
      <div className="absolute top-1/4 left-1/6">
        <div className="bg-white rounded-xl p-3 shadow-lg border-2 border-red-300">
          <TreePine className="w-8 h-8 text-red-600 mb-1" />
          <div className="text-xs font-semibold text-red-700">Endangered</div>
        </div>
      </div>
      
      <div className="absolute top-2/3 right-1/4">
        <div className="bg-white rounded-xl p-3 shadow-lg border-2 border-red-300">
          <Leaf className="w-8 h-8 text-red-600 mb-1 transform -rotate-12" />
          <div className="text-xs font-semibold text-red-700">Protected</div>
        </div>
      </div>
      
      {/* GPS tracking points */}
      <div className="absolute top-1/3 left-1/3 bg-blue-500 rounded-full p-2 shadow-lg animate-pulse">
        <MapPin className="w-4 h-4 text-white" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 bg-blue-500 rounded-full p-2 shadow-lg animate-pulse">
        <MapPin className="w-4 h-4 text-white" />
      </div>
      
      {/* Central monitoring dashboard */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-emerald-200">
          <Globe className="w-10 h-10 text-emerald-600 mb-2 mx-auto" />
          <div className="text-xs font-bold text-emerald-700 text-center">Live Tracking</div>
          <div className="flex items-center justify-center gap-1 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Warning zone indicator */}
      <div className="absolute bottom-8 left-8 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
        <AlertTriangle className="w-4 h-4" />
        Restricted Zone
      </div>
      
      {/* Geo-fence visualization */}
      <div className="absolute top-8 right-8 w-20 h-20 border-4 border-dashed border-emerald-400 rounded-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-emerald-600 rounded-full"></div>
      </div>
      
      {/* Coordinates display */}
      <div className="absolute top-12 left-12 bg-white rounded-lg p-2 shadow-md text-xs font-mono">
        <div className="text-gray-600">28.6139° N</div>
        <div className="text-gray-600">77.2090° E</div>
      </div>
    </div>
  );

  const renderIllustration = (type) => {
    switch (type) {
      case 'global-trade':
        return <GlobalTradeIllustration />;
      case 'farmers':
        return <FarmersIllustration />;
      case 'lab-testing':
        return <LabTestingIllustration />;
      case 'geo-tracking':
        return <GeoTrackingIllustration />;
      default:
        return <GlobalTradeIllustration />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Problems We <span className="text-emerald-600">Solve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming Ayurveda's supply chain through transparency, accountability, and technology-driven solutions.
          </p>
        </div>

        {/* Problem-Solution Sections */}
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Section container with alternating layout */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                section.imageLeft ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}>
                
                {/* Image Column */}
                <div className={`relative ${
                  section.imageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {renderIllustration(section.illustration)}
                </div>

                {/* Content Column */}
                <div className={`space-y-8 ${
                  section.imageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  {/* Section Title */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {section.id}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  {/* Problem Block */}
                  <div className="relative bg-red-50 border border-red-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <section.problem.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-800 mb-2">The Problem</h4>
                        <p className="text-red-700 leading-relaxed">{section.problem.text}</p>
                        <a href="#" className="text-xs text-blue-600 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">Source</a>
                      </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-red-200 rounded-full opacity-50"></div>
                  </div>

                  {/* Solution Block */}
                  <div className="relative bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                        <section.solution.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-800 mb-2">Our Solution</h4>
                        <p className="text-emerald-700 leading-relaxed">{section.solution.text}</p>
                      </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-200 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Section divider */}
              {index < sections.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvedSection;