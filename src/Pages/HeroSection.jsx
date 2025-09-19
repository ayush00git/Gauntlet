import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Plus, Minus, Bell, Calendar, FileText, Users, Award, ExternalLink, ChevronRight, Home, Info, Phone, Settings, Search, Clock } from 'lucide-react';

const GovernmentPortal = () => {
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState('base');
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  const navigate = useNavigate();
  const formatDate = (date) => {
    if (language === 'en') {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else {
      return date.toLocaleDateString('hi-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  const content = {
    en: {
      title: "Ministry of Ayush",
      subtitle: "Government of India - HerbChain",
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services", 
        schemes: "Schemes",
        contact: "Contact",
        tracking: "Herb Tracking"
      },
      announcements: "Latest Herb Transport Updates",
      news: "News & Updates",
      services: "Herb Transport Services",
      schemes: "Ayurveda Schemes",
      quickLinks: "Quick Access",
      contact: "Contact Information"
    },
    hi: {
      title: "आयुष मंत्रालय",
      subtitle: "भारत सरकार - हर्बचेन",
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएं",
        schemes: "योजनाएं", 
        contact: "संपर्क",
        tracking: "हर्ब ट्रैकिंग"
      },
      announcements: "नवीनतम हर्ब परिवहन अपडेट",
      news: "समाचार और अपडेट",
      services: "हर्ब परिवहन सेवाएं",
      schemes: "आयुर्वेद योजनाएं",
      quickLinks: "त्वरित पहुंच",
      contact: "संपर्क जानकारी"
    }
  };

  const fontSizes = {
    small: 'text-sm',
    base: 'text-base', 
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  const increaseFontSize = () => {
    const sizes = ['small', 'base', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes = ['small', 'base', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentContent = content[language];
  const baseClass = darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen ${baseClass} ${fontSizes[fontSize]} transition-all duration-300`}>
      {/* Top Utility Bar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'en' ? 'Last Updated: September 20, 2025' : 'अंतिम अपडेट: 20 सितंबर, 2025'}
            </span>
            
            {/* Digital Clock */}
            <div className="flex items-center space-x-3 bg-green-50 dark:bg-green-900 px-4 py-2 rounded-lg border border-green-200 dark:border-green-700">
              <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
              <div className="text-sm">
                <div className="font-mono font-bold text-green-700 dark:text-green-300">
                  {formatTime(currentTime)}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Font Size Controls */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={decreaseFontSize}
                className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                title="Decrease Font Size"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xs">A</span>
              <button 
                onClick={increaseFontSize}
                className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                title="Increase Font Size"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-md border ${darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'} transition-colors`}
            >
              {language === 'en' ? 'हिं' : 'En'}
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${darkMode ? 'bg-green-900' : 'bg-green-800'} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Government Logo" className="w-16 h-16 rounded-full object-cover bg-white p-2 shadow" />
              <div>
                <h1 className="text-xl font-bold">{currentContent.title}</h1>
                <p className="text-sm text-green-200">{currentContent.subtitle}</p>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-yellow-300 font-medium flex items-center space-x-1">
                <Home className="w-4 h-4" />
                <span>{currentContent.nav.home}</span>
              </a>
              <a href="#" className="hover:text-yellow-300 flex items-center space-x-1"
              onClick={() => navigate('/about')}>
                <Info className="w-4 h-4" />
                <span>{currentContent.nav.about}</span>
              </a>
              <a href="#" className="hover:text-yellow-300 flex items-center space-x-1">
                <Settings className="w-4 h-4" />
                <span>{currentContent.nav.services}</span>
              </a>
              <a href="#" className="hover:text-yellow-300 flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>{currentContent.nav.tracking}</span>
              </a>
              <a href="#" className="hover:text-yellow-300 flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>{currentContent.nav.contact}</span>
              </a>
              {/* Login Button */}
              <button
                onClick={() => navigate('/login')}
                className="ml-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                Login
              </button>
            </div>

            {/* Search */}
            <div className="flex items-center">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder={language === 'en' ? 'Search...' : 'खोजें...'}
                  className={`pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} focus:ring-2 focus:ring-yellow-400 outline-none`}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Bento Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Announcement Banner */}
        <div className={`${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white rounded-xl p-8 mb-8 shadow-xl`}>
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-6 h-6 animate-pulse" />
            <span className="font-semibold">
              {language === 'en' ? 'Important Announcement' : 'महत्वपूर्ण घोषणा'}
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' 
              ? 'HerbChain Secure Transport Network - Enhanced Security Protocol Activated' 
              : 'हर्बचेन सुरक्षित परिवहन नेटवर्क - उन्नत सुरक्षा प्रोटोकॉल सक्रिय'
            }
          </h2>
          <p className="text-green-100 mb-6">
            {language === 'en'
              ? 'All medicinal herb shipments are now protected with blockchain-based tracking and real-time security monitoring. Track your herbs from farm to pharmacy with complete transparency.'
              : 'सभी औषधीय जड़ी-बूटी शिपमेंट अब ब्लॉकचेन-आधारित ट्रैकिंग और रियल-टाइम सुरक्षा निगरानी से सुरक्षित हैं। पूर्ण पारदर्शिता के साथ अपनी जड़ी-बूटियों को खेत से फार्मेसी तक ट्रैक करें।'
            }
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center space-x-2">
            <span>{language === 'en' ? 'Learn More' : 'और जानें'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Latest Announcements - Large Card */}
          <div className={`col-span-12 lg:col-span-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center space-x-3">
                <Bell className="w-6 h-6 text-green-600" />
                <span>{currentContent.announcements}</span>
              </h3>
              <button className="text-green-600 hover:text-green-800 font-medium flex items-center space-x-1">
                <span>{language === 'en' ? 'View All' : 'सभी देखें'}</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: language === 'en' ? 'New Blockchain Tracking System for Ashwagandha Shipments' : 'अश्वगंधा शिपमेंट के लिए नया ब्लॉकचेन ट्रैकिंग सिस्टम',
                  date: '18 Sep 2025',
                  category: language === 'en' ? 'Security' : 'सुरक्षा'
                },
                {
                  title: language === 'en' ? 'Temperature-Controlled Transport Launched for Tulsi Extracts' : 'तुलसी अर्क के लिए तापमान-नियंत्रित परिवहन शुरू',
                  date: '15 Sep 2025', 
                  category: language === 'en' ? 'Transport' : 'परिवहन'
                },
                {
                  title: language === 'en' ? 'Anti-Counterfeit Measures Enhanced for Saffron Trade' : 'केसर व्यापार के लिए नकली-रोधी उपाय बढ़ाए गए',
                  date: '12 Sep 2025',
                  category: language === 'en' ? 'Authentication' : 'प्रमाणीकरण'
                },
                {
                  title: language === 'en' ? 'GPS Monitoring Mandatory for All Ayurvedic Herb Consignments' : 'सभी आयुर्वेदिक जड़ी-बूटी खेपों के लिए GPS निगरानी अनिवार्य',
                  date: '10 Sep 2025',
                  category: language === 'en' ? 'Tracking' : 'ट्रैकिंग'
                }
              ].map((item, index) => (
                <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow cursor-pointer`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                        {language === 'en' 
                          ? 'Click to read full transport security update and implementation details.'
                          : 'पूर्ण परिवहन सुरक्षा अपडेट और कार्यान्वयन विवरण पढ़ने के लिए क्लिक करें।'
                        }
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-green-600 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - Vertical Card */}
          <div className={`col-span-12 lg:col-span-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <ExternalLink className="w-5 h-5 text-green-600" />
              <span>{currentContent.quickLinks}</span>
            </h3>
            
            <div className="space-y-3">
              {[
                { name: language === 'en' ? 'Register Herb Supplier' : 'हर्ब आपूर्तिकर्ता पंजीकरण', icon: <FileText className="w-4 h-4" /> },
                { name: language === 'en' ? 'Track Herb Shipment' : 'हर्ब शिपमेंट ट्रैक करें', icon: <Award className="w-4 h-4" /> },
                { name: language === 'en' ? 'Quality Certificate Verification' : 'गुणवत्ता प्रमाणपत्र सत्यापन', icon: <Users className="w-4 h-4" /> },
                { name: language === 'en' ? 'Transport License Application' : 'परिवहन लाइसेंस आवेदन', icon: <FileText className="w-4 h-4" /> },
                { name: language === 'en' ? 'Ayurveda Product Authentication' : 'आयुर्वेद उत्पाद प्रमाणीकरण', icon: <Award className="w-4 h-4" /> },
                { name: language === 'en' ? 'HerbChain Network Status' : 'हर्बचेन नेटवर्क स्थिति', icon: <Users className="w-4 h-4" /> }
              ].map((link, index) => (
                <a key={index} href="#" className={`block p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-green-50'} transition-colors group`}>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-600 group-hover:text-green-700">
                      {link.icon}
                    </div>
                    <span className="font-medium group-hover:text-green-700">{link.name}</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-green-600" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-200'} border-t py-8`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">
                {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
              </h4>
              <div className="space-y-2 text-sm">
                <a href="#" className={`block hover:text-green-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
                </a>
                <a href="#" className={`block hover:text-green-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Terms of Service' : 'सेवा की शर्तें'}
                </a>
                <a href="#" className={`block hover:text-green-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'en' ? 'Accessibility' : 'पहुंच'}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">
                {language === 'en' ? 'Contact' : 'संपर्क'}
              </h4>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>Email: herbchain@ayush.gov.in</p>
                <p>{language === 'en' ? 'Phone: 1800-123-4567' : 'फोन: 1800-123-4567'}</p>
              </div>
            </div>
            
            
          </div>
          
          <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} mt-8 pt-4 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>
              &copy; 2025 {language === 'en' ? 'Government of India. All rights reserved.' : 'भारत सरकार। सभी अधिकार सुरक्षित।'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovernmentPortal;