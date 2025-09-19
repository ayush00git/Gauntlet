import React, { useState } from 'react';
import { 
  Building,
  User,
  X,
  Settings,
  LogOut,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

// Mock data for the user profile
const mockUserData = {
  // For Middleman
  name: 'Mahesh Trading Co.',
  contactPerson: 'Mahesh Gupta',
  mobile: '+91-9876543210',
  gstin: 'GSTIN-987654321',
  license: 'AYUSH-LIC-2024-001',
  location: 'Baddi Industrial Area',
  district: 'Solan',
  state: 'Himachal Pradesh',
  rating: 4.6,
  verified: true,
  registrationDate: '2023-03-15',
  userType: 'middleman', // Can be 'farmer', 'middleman', 'lab', 'manufacturer', 'exporter', 'consumer'
  
  // For Farmer (alternate data)
  // name: 'Ramesh Kumar',
  // mobile: '+91-9876543210',
  // aadhaar: '1234-5678-9012',
  // village: 'Singhpur',
  // district: 'Kanpur',
  // state: 'Uttar Pradesh',
  // farmSize: '2.5 acres',
  // rating: 4.8,
  // verified: true,
  // registrationDate: '2023-01-15',
  // userType: 'farmer'
};

const AyushHeader = ({ activeTab, setActiveTab, userType = 'middleman' }) => {
  const [showProfile, setShowProfile] = useState(false);

  // Configuration for different user types
  const userConfigs = {
    farmer: {
      portalName: 'Farmer Portal',
      themeColor: 'blue',
      bgColor: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-600',
      activeColor: 'bg-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      icon: User,
      tabs: [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'upload', label: 'Upload' },
        { id: 'payments', label: 'Payments' },
        { id: 'track', label: 'Track' },
        { id: 'support', label: 'Support' }
      ]
    },
    middleman: {
      portalName: 'Middleman/Mandi Portal',
      themeColor: 'purple',
      bgColor: 'bg-purple-700',
      hoverColor: 'hover:bg-purple-600',
      activeColor: 'bg-purple-800',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      icon: Building,
      tabs: [
        { id: 'verification', label: 'Verify Produce' },
        { id: 'batches', label: 'Create Batches' },
        { id: 'forward', label: 'Forward to Lab' },
        { id: 'manage', label: 'Manage Batches' },
        { id: 'support', label: 'Support' }
      ]
    },
    lab: {
      portalName: 'Lab/Ministry Portal',
      themeColor: 'cyan',
      bgColor: 'bg-cyan-700',
      hoverColor: 'hover:bg-cyan-600',
      activeColor: 'bg-cyan-800',
      buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
      icon: User,
      tabs: [
        { id: 'testing', label: 'Batch Testing' },
        { id: 'reports', label: 'Upload Reports' },
        { id: 'blockchain', label: 'Blockchain Link' },
        { id: 'approve', label: 'Approve/Reject' },
        { id: 'support', label: 'Support' }
      ]
    },
    manufacturer: {
      portalName: 'Manufacturer Portal',
      themeColor: 'green',
      bgColor: 'bg-green-700',
      hoverColor: 'hover:bg-green-600',
      activeColor: 'bg-green-800',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      icon: Building,
      tabs: [
        { id: 'scan', label: 'Scan Batches' },
        { id: 'production', label: 'Production Link' },
        { id: 'qr', label: 'Generate QR' },
        { id: 'records', label: 'Records' },
        { id: 'support', label: 'Support' }
      ]
    },
    exporter: {
      portalName: 'Exporter Portal',
      themeColor: 'orange',
      bgColor: 'bg-orange-700',
      hoverColor: 'hover:bg-orange-600',
      activeColor: 'bg-orange-800',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      icon: Building,
      tabs: [
        { id: 'docs', label: 'Generate Docs' },
        { id: 'phyto', label: 'Phytosanitary' },
        { id: 'shipment', label: 'Track Shipments' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'support', label: 'Support' }
      ]
    },
    consumer: {
      portalName: 'Consumer Portal',
      themeColor: 'pink',
      bgColor: 'bg-pink-700',
      hoverColor: 'hover:bg-pink-600',
      activeColor: 'bg-pink-800',
      buttonColor: 'bg-pink-600 hover:bg-pink-700',
      icon: User,
      tabs: [
        { id: 'scan', label: 'Scan Product' },
        { id: 'journey', label: 'Product Journey' },
        { id: 'rewards', label: 'Rewards' },
        { id: 'stories', label: 'Farmer Stories' },
        { id: 'support', label: 'Support' }
      ]
    }
  };

  const config = userConfigs[userType] || userConfigs.middleman;
  const IconComponent = config.icon;

  return (
    <>
      {/* Compact Government Header */}
      <div className="bg-white border-b-4 border-orange-500 shadow-sm flex-shrink-0">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 py-1">
            <div className="flex justify-between items-center">
              <span>Helpline: 1800-11-1111 | support@ayush.gov.in</span>
              <span>हिंदी | English</span>
            </div>
          </div>
        </div>
        
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Government of India" 
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-800">Ministry of AYUSH</h1>
                <p className={`text-${config.themeColor}-700 text-sm font-medium`}>
                  {config.portalName}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right text-sm">
                <p className="font-medium text-gray-800">
                  {mockUserData.name}
                  {mockUserData.contactPerson && (
                    <span className="block text-xs text-gray-600">{mockUserData.contactPerson}</span>
                  )}
                </p>
                <p className="text-xs text-gray-600">
                  {userType === 'middleman' ? `License: ${mockUserData.license}` : 
                   userType === 'farmer' ? `ID: F-${mockUserData.aadhaar?.slice(-4)}` : 
                   `ID: ${userType.toUpperCase()}-001`}
                </p>
              </div>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className={`${config.buttonColor} text-white p-1.5 rounded-full`}
              >
                <IconComponent className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Compact Navigation */}
        <div className={`${config.bgColor} text-white`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 text-sm">
              {config.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab && setActiveTab(tab.id)}
                  className={`px-3 py-2 ${
                    activeTab === tab.id 
                      ? `border-b-2 border-orange-400 ${config.activeColor} font-medium` 
                      : config.hoverColor
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sidebar */}
      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">
                  {userType === 'middleman' ? 'Business Profile' : 
                   userType === 'farmer' ? 'Farmer Profile' :
                   'User Profile'}
                </h3>
                <button 
                  onClick={() => setShowProfile(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="text-center pb-4 border-b mb-4">
                  <div className={`w-16 h-16 bg-${config.themeColor}-100 rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <IconComponent className={`h-8 w-8 text-${config.themeColor}-600`} />
                  </div>
                  <h4 className="font-bold">{mockUserData.name}</h4>
                  <p className={`text-${config.themeColor}-600 text-sm`}>
                    {userType === 'middleman' ? 'Licensed Middleman' :
                     userType === 'farmer' ? 'Verified Farmer' :
                     'Verified User'}
                  </p>
                  {mockUserData.contactPerson && (
                    <p className="text-xs text-gray-600">{mockUserData.contactPerson}</p>
                  )}
                </div>
                
                <div className="space-y-3 text-sm">
                  {/* Verification Status */}
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">Verification Status</h5>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>AYUSH Verified</span>
                    </div>
                  </div>
                  
                  {/* User Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mobile:</span>
                      <span className="font-medium">{mockUserData.mobile}</span>
                    </div>
                    
                    {/* Conditional fields based on user type */}
                    {userType === 'middleman' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GSTIN:</span>
                          <span className="font-medium">{mockUserData.gstin}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">License:</span>
                          <span className="font-medium">{mockUserData.license}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-medium text-right">{mockUserData.location}</span>
                        </div>
                      </>
                    )}
                    
                    {userType === 'farmer' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Aadhaar:</span>
                          <span className="font-medium">{mockUserData.aadhaar}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Village:</span>
                          <span className="font-medium">{mockUserData.village}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Farm Size:</span>
                          <span className="font-medium">{mockUserData.farmSize}</span>
                        </div>
                      </>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">State:</span>
                      <span className="font-medium">{mockUserData.state}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium">{mockUserData.rating}/5 ⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registered:</span>
                      <span className="font-medium">{mockUserData.registrationDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="pt-4 border-t space-y-2">
                <button className={`w-full ${config.buttonColor} text-white py-2 px-4 rounded flex items-center justify-center text-sm`}>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 flex items-center justify-center text-sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Usage Example Component */}
      <div className="p-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold mb-4">Header Usage Examples</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-3 rounded border">
              <h4 className="font-medium mb-2">Change User Type:</h4>
              <div className="space-y-1">
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-xs">
                  userType="farmer"
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-xs">
                  userType="middleman"
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-xs">
                  userType="lab"
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-xs">
                  userType="manufacturer"
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-xs">
                  userType="exporter"
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-xs">
                  userType="consumer"
                </button>
              </div>
            </div>
            <div className="bg-white p-3 rounded border">
              <h4 className="font-medium mb-2">Props:</h4>
              <div className="text-xs space-y-1">
                <p><span className="font-mono bg-gray-100 px-1 rounded">activeTab</span> - Current active tab</p>
                <p><span className="font-mono bg-gray-100 px-1 rounded">setActiveTab</span> - Function to change tab</p>
                <p><span className="font-mono bg-gray-100 px-1 rounded">userType</span> - Type of user portal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AyushHeader;