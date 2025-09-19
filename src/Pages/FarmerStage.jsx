import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Leaf, 
  Package, 
  FlaskConical, 
  Factory, 
  Ship, 
  QrCode, 
  User, 
  Camera, 
  CheckCircle, 
  XCircle, 
  CreditCard, 
  History,
  Upload,
  Search,
  Eye,
  Award,
  MapPin,
  TrendingUp,
  Clock,
  Shield,
  Globe,
  FileText,
  Bell,
  Settings,
  Menu,
  X,
  ChevronRight,
  Star,
  Home,
  Phone,
  Mail,
  Building,
  LogOut,
  UserCheck,
  Banknote,
  Calendar,
  Weight
} from 'lucide-react';

// Enhanced mock data for farmer
const mockFarmerData = {
  name: 'Ramesh Kumar',
  mobile: '+91-9876543210',
  aadhaar: '1234-5678-9012',
  village: 'Singhpur',
  district: 'Kanpur',
  state: 'Uttar Pradesh',
  farmSize: '2.5 acres',
  totalEarnings: 45000,
  batchesContributed: 12,
  rating: 4.8,
  verified: true,
  bankAccount: 'HDFC Bank - ****1234',
  registrationDate: '2023-01-15'
};

const mockBatches = [
  {
    id: 'AYUSH-HTB-001',
    herbs: 'Turmeric',
    quantity: '125kg',
    grade: 'A',
    rate: 36,
    amount: 4500,
    share: 45,
    status: 'Paid',
    date: '15-Sep-24',
    location: 'Export Ready'
  },
  {
    id: 'AYUSH-HTB-002',
    herbs: 'Ashwagandha',
    quantity: '80kg',
    grade: 'A',
    rate: 45,
    amount: 3600,
    share: 35,
    status: 'Testing',
    date: '18-Sep-24',
    location: 'Lab Testing'
  },
  {
    id: 'AYUSH-HTB-003',
    herbs: 'Tulsi',
    quantity: '60kg',
    grade: 'B',
    rate: 28,
    amount: 1680,
    share: 25,
    status: 'Verified',
    date: '20-Sep-24',
    location: 'Middleman'
  }
];

const HerbalSupplyChain = () => {
  const [showProfile, setShowProfile] = useState(false);

  const FarmerDashboard = () => (
    <div className="h-screen bg-gray-50 flex flex-col">
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
                <p className="text-blue-700 text-sm font-medium">Herbal Supply Chain Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right text-sm">
                <p className="font-medium text-gray-800">{mockFarmerData.name}</p>
                <p className="text-xs text-gray-600">ID: F-{mockFarmerData.aadhaar.slice(-4)}</p>
              </div>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700"
              >
                <User className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Compact Navigation */}
        <div className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 text-sm">
              <button className="px-3 py-2 border-b-2 border-orange-400 bg-blue-800 font-medium">
                Farmer Portal
              </button>
              <button className="px-3 py-2 hover:bg-blue-600">Upload</button>
              <button className="px-3 py-2 hover:bg-blue-600">Payments</button>
              <button className="px-3 py-2 hover:bg-blue-600">Track</button>
              <button className="px-3 py-2 hover:bg-blue-600">Support</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Sidebar */}
      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-2xl">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Profile</h3>
                <button 
                  onClick={() => setShowProfile(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="text-center pb-4 border-b mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold">{mockFarmerData.name}</h4>
                  <p className="text-green-600 text-sm">Verified Farmer</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mobile:</span>
                    <span className="font-medium">{mockFarmerData.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Aadhaar:</span>
                    <span className="font-medium">{mockFarmerData.aadhaar}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-right">{mockFarmerData.village}, {mockFarmerData.district}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Farm Size:</span>
                    <span className="font-medium">{mockFarmerData.farmSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium">{mockFarmerData.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registered:</span>
                    <span className="font-medium">{mockFarmerData.registrationDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 flex items-center justify-center text-sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Single View */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* Left Panel - Stats & Actions */}
            <div className="col-span-4 space-y-4">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-lg p-4">
                <h2 className="text-xl font-bold mb-1">नमस्कार, {mockFarmerData.name}</h2>
                <p className="text-green-100 text-sm mb-2">Welcome to AYUSH Portal</p>
                <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-2 text-center">
                  <p className="text-lg font-bold">₹{mockFarmerData.totalEarnings.toLocaleString()}</p>
                  <p className="text-xs">Total Earnings</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">{mockFarmerData.batchesContributed}</p>
                  <p className="text-gray-600 text-xs">Batches</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-600">{mockFarmerData.rating}</p>
                  <p className="text-gray-600 text-xs">Rating</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-orange-600">2</p>
                  <p className="text-gray-600 text-xs">Pending</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-purple-600">✓</p>
                  <p className="text-gray-600 text-xs">Verified</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 flex items-center justify-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Produce
                </button>
                <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 flex items-center justify-center">
                  <Banknote className="h-4 w-4 mr-2" />
                  Check Payments
                </button>
                <button className="w-full bg-orange-600 text-white p-3 rounded hover:bg-orange-700 flex items-center justify-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Track Batches
                </button>
              </div>

              {/* Support Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-bold text-blue-800 mb-2 text-sm">Need Help?</h4>
                <div className="text-xs text-blue-700 space-y-1">
                  <p className="flex items-center"><Phone className="h-3 w-3 mr-1" />1800-11-1111</p>
                  <p className="flex items-center"><Mail className="h-3 w-3 mr-1" />support@ayush.gov.in</p>
                  <p>Mon-Fri: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Batch History Table */}
            <div className="col-span-8">
              <div className="bg-white border rounded-lg h-full flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">Your Batch History</h3>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Export Report
                  </button>
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b text-xs">
                      <tr>
                        <th className="text-left p-3 font-medium">Batch Details</th>
                        <th className="text-left p-3 font-medium">Quantity</th>
                        <th className="text-left p-3 font-medium">Rate/Kg</th>
                        <th className="text-left p-3 font-medium">Share%</th>
                        <th className="text-left p-3 font-medium">Earnings</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Location</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockBatches.map((batch, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium text-gray-800">{batch.herbs}</p>
                              <p className="text-xs text-gray-500">{batch.id}</p>
                              <p className="text-xs text-gray-500">Grade: {batch.grade}</p>
                              <p className="text-xs text-gray-500">{batch.date}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <p className="font-medium">{batch.quantity}</p>
                          </td>
                          <td className="p-3">
                            <p className="font-medium">₹{batch.rate}</p>
                          </td>
                          <td className="p-3">
                            <p className="font-medium">{batch.share}%</p>
                          </td>
                          <td className="p-3">
                            <p className="font-bold text-green-600">₹{batch.amount.toLocaleString()}</p>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              batch.status === 'Paid' 
                                ? 'bg-green-100 text-green-800' 
                                : batch.status === 'Testing'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {batch.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <p className="text-xs text-gray-600">{batch.location}</p>
                          </td>
                          <td className="p-3">
                            <div className="flex space-x-1">
                              <button className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100">
                                View
                              </button>
                              <button className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs hover:bg-green-100">
                                Track
                              </button>
                              {batch.status === 'Paid' && (
                                <button className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs hover:bg-purple-100">
                                  Receipt
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Summary Footer */}
                <div className="border-t bg-gray-50 p-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Total Batches: {mockBatches.length}</span>
                    <span className="text-gray-600">
                      Total Earnings: ₹{mockBatches.reduce((sum, batch) => sum + batch.amount, 0).toLocaleString()}
                    </span>
                    <span className="text-gray-600">Avg Rating: {mockFarmerData.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Footer */}
      <div className="bg-gray-800 text-white text-xs flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <span>© 2024 Ministry of AYUSH, Government of India</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400">Terms of Use</a>
              <a href="#" className="hover:text-orange-400">Help</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <FarmerDashboard />;
};

export default HerbalSupplyChain;