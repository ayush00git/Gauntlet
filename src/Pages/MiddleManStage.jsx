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
  Weight,
  Scale,
  Truck,
  Send,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

// Enhanced mock data for middleman
const mockMiddlemanData = {
  name: 'Mahesh Trading Co.',
  contactPerson: 'Mahesh Gupta',
  mobile: '+91-9876543210',
  gstin: 'GSTIN-987654321',
  license: 'AYUSH-LIC-2024-001',
  location: 'Baddi Industrial Area',
  district: 'Solan',
  state: 'Himachal Pradesh',
  totalVolume: 12500,
  activeBatches: 8,
  farmersConnected: 45,
  rating: 4.6,
  verified: true,
  registrationDate: '2023-03-15',
  monthlyTarget: 15000,
  completedBatches: 157
};

const mockPendingProduce = [
  {
    id: 'FPR-001',
    farmerName: 'Ram Singh',
    farmerId: 'F-1234',
    village: 'Singhpur',
    herbs: 'Turmeric',
    quantity: '125kg',
    grade: 'A',
    submittedDate: '18-Sep-24',
    photos: 3,
    status: 'Pending Verification',
    moistureContent: '12%',
    estimatedValue: 4500
  },
  {
    id: 'FPR-002',
    farmerName: 'Priya Sharma',
    farmerId: 'F-5678',
    village: 'Rampur',
    herbs: 'Ashwagandha',
    quantity: '80kg',
    grade: 'A',
    submittedDate: '19-Sep-24',
    photos: 2,
    status: 'IoT Weighing Required',
    moistureContent: '10%',
    estimatedValue: 3600
  },
  {
    id: 'FPR-003',
    farmerName: 'Suresh Kumar',
    farmerId: 'F-9012',
    village: 'Kaithal',
    herbs: 'Tulsi',
    quantity: '60kg',
    grade: 'B',
    submittedDate: '20-Sep-24',
    photos: 4,
    status: 'Quality Check Needed',
    moistureContent: '14%',
    estimatedValue: 1680
  }
];

const mockActiveBatches = [
  {
    id: 'AYUSH-BTH-101',
    batchName: 'Premium Turmeric Mix',
    totalWeight: '350kg',
    farmers: 4,
    compositions: [
      { farmer: 'Ram Singh', share: 35, quantity: '125kg', rate: 36 },
      { farmer: 'Mohan Lal', share: 30, quantity: '100kg', rate: 35 },
      { farmer: 'Raj Kumar', share: 20, quantity: '75kg', rate: 34 },
      { farmer: 'Sunil Sharma', share: 15, quantity: '50kg', rate: 33 }
    ],
    createdDate: '15-Sep-24',
    status: 'Ready for Lab',
    estimatedValue: 12250,
    qrGenerated: true,
    labAssignment: 'Pending'
  },
  {
    id: 'AYUSH-BTH-102',
    batchName: 'Organic Ashwagandha',
    totalWeight: '200kg',
    farmers: 3,
    compositions: [
      { farmer: 'Priya Sharma', share: 40, quantity: '80kg', rate: 45 },
      { farmer: 'Deepak Singh', share: 35, quantity: '70kg', rate: 44 },
      { farmer: 'Anita Devi', share: 25, quantity: '50kg', rate: 43 }
    ],
    createdDate: '17-Sep-24',
    status: 'Lab Testing',
    estimatedValue: 8800,
    qrGenerated: true,
    labAssignment: 'Delhi Ayush Lab'
  },
  {
    id: 'AYUSH-BTH-103',
    batchName: 'Mixed Herbs',
    totalWeight: '180kg',
    farmers: 2,
    compositions: [
      { farmer: 'Suresh Kumar', share: 55, quantity: '100kg', rate: 28 },
      { farmer: 'Vinod Gupta', share: 45, quantity: '80kg', rate: 30 }
    ],
    createdDate: '20-Sep-24',
    status: 'In Preparation',
    estimatedValue: 5200,
    qrGenerated: false,
    labAssignment: 'Not Assigned'
  }
];

const HerbalSupplyChainMiddleman = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [activeTab, setActiveTab] = useState('verification'); // verification, batches, forward, manage

  const MiddlemanDashboard = () => (
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
                <p className="text-purple-700 text-sm font-medium">Middleman/Mandi Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right text-sm">
                <p className="font-medium text-gray-800">{mockMiddlemanData.name}</p>
                <p className="text-xs text-gray-600">License: {mockMiddlemanData.license}</p>
              </div>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="bg-purple-600 text-white p-1.5 rounded-full hover:bg-purple-700"
              >
                <Building className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Compact Navigation */}
        <div className="bg-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => setActiveTab('verification')}
                className={`px-3 py-2 ${activeTab === 'verification' ? 'border-b-2 border-orange-400 bg-purple-800 font-medium' : 'hover:bg-purple-600'}`}
              >
                Verify Produce
              </button>
              <button 
                onClick={() => setActiveTab('batches')}
                className={`px-3 py-2 ${activeTab === 'batches' ? 'border-b-2 border-orange-400 bg-purple-800 font-medium' : 'hover:bg-purple-600'}`}
              >
                Create Batches
              </button>
              <button 
                onClick={() => setActiveTab('forward')}
                className={`px-3 py-2 ${activeTab === 'forward' ? 'border-b-2 border-orange-400 bg-purple-800 font-medium' : 'hover:bg-purple-600'}`}
              >
                Forward to Lab
              </button>
              <button 
                onClick={() => setActiveTab('manage')}
                className={`px-3 py-2 ${activeTab === 'manage' ? 'border-b-2 border-orange-400 bg-purple-800 font-medium' : 'hover:bg-purple-600'}`}
              >
                Manage Batches
              </button>
              <button className="px-3 py-2 hover:bg-purple-600">Support</button>
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
                <h3 className="text-lg font-bold">Business Profile</h3>
                <button 
                  onClick={() => setShowProfile(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="text-center pb-4 border-b mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Building className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold">{mockMiddlemanData.name}</h4>
                  <p className="text-purple-600 text-sm">Licensed Middleman</p>
                  <p className="text-xs text-gray-600">{mockMiddlemanData.contactPerson}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">Verification Status</h5>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>AYUSH Verified</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mobile:</span>
                      <span className="font-medium">{mockMiddlemanData.mobile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GSTIN:</span>
                      <span className="font-medium">{mockMiddlemanData.gstin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium text-right">{mockMiddlemanData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">State:</span>
                      <span className="font-medium">{mockMiddlemanData.state}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium">{mockMiddlemanData.rating}/5 ⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registered:</span>
                      <span className="font-medium">{mockMiddlemanData.registrationDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t space-y-2">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 flex items-center justify-center text-sm">
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

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* Left Panel - Stats & Actions */}
            <div className="col-span-4 space-y-4">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4">
                <h2 className="text-xl font-bold mb-1">नमस्कार, {mockMiddlemanData.contactPerson}</h2>
                <p className="text-purple-100 text-sm mb-2">Middleman Dashboard</p>
                <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-2 text-center">
                  <p className="text-lg font-bold">{mockMiddlemanData.totalVolume.toLocaleString()}kg</p>
                  <p className="text-xs">Monthly Volume</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-purple-600">{mockMiddlemanData.activeBatches}</p>
                  <p className="text-gray-600 text-xs">Active Batches</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">{mockMiddlemanData.farmersConnected}</p>
                  <p className="text-gray-600 text-xs">Farmers</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-orange-600">{mockPendingProduce.length}</p>
                  <p className="text-gray-600 text-xs">Pending</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-blue-600">{mockMiddlemanData.rating}⭐</p>
                  <p className="text-gray-600 text-xs">Rating</p>
                </div>
              </div>

              {/* Progress Card */}
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Monthly Target</h4>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{width: `${(mockMiddlemanData.totalVolume / mockMiddlemanData.monthlyTarget) * 100}%`}}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{mockMiddlemanData.totalVolume}kg</span>
                  <span>{mockMiddlemanData.monthlyTarget}kg</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round((mockMiddlemanData.totalVolume / mockMiddlemanData.monthlyTarget) * 100)}% Complete
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => setActiveTab('verification')}
                  className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 flex items-center justify-center"
                >
                  <Scale className="h-4 w-4 mr-2" />
                  IoT Verification ({mockPendingProduce.length})
                </button>
                <button 
                  onClick={() => setActiveTab('batches')}
                  className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 flex items-center justify-center"
                >
                  <Package className="h-4 w-4 mr-2" />
                  Create New Batch
                </button>
                <button 
                  onClick={() => setActiveTab('forward')}
                  className="w-full bg-orange-600 text-white p-3 rounded hover:bg-orange-700 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Forward to Lab
                </button>
              </div>

              {/* Support Info */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-bold text-purple-800 mb-2 text-sm">Technical Support</h4>
                <div className="text-xs text-purple-700 space-y-1">
                  <p className="flex items-center"><Phone className="h-3 w-3 mr-1" />1800-11-1111</p>
                  <p className="flex items-center"><Mail className="h-3 w-3 mr-1" />middleman@ayush.gov.in</p>
                  <p>IoT Support: Mon-Fri: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Dynamic Content */}
            <div className="col-span-8">
              <div className="bg-white border rounded-lg h-full flex flex-col">
                
                {/* Verification Tab */}
                {activeTab === 'verification' && (
                  <>
                    <div className="p-4 border-b flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800">Farmer Produce Verification</h3>
                      <div className="flex items-center space-x-2">
                        <button className="bg-green-50 text-green-600 px-3 py-1 rounded text-sm hover:bg-green-100">
                          IoT Scale Connected ✓
                        </button>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Refresh
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b text-xs">
                          <tr>
                            <th className="text-left p-3 font-medium">Farmer Details</th>
                            <th className="text-left p-3 font-medium">Produce Info</th>
                            <th className="text-left p-3 font-medium">Quality Metrics</th>
                            <th className="text-left p-3 font-medium">Estimated Value</th>
                            <th className="text-left p-3 font-medium">Status</th>
                            <th className="text-left p-3 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {mockPendingProduce.map((produce, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="p-3">
                                <div>
                                  <p className="font-medium text-gray-800">{produce.farmerName}</p>
                                  <p className="text-xs text-gray-500">{produce.farmerId}</p>
                                  <p className="text-xs text-gray-500">{produce.village}</p>
                                  <p className="text-xs text-gray-500">{produce.submittedDate}</p>
                                </div>
                              </td>
                              <td className="p-3">
                                <div>
                                  <p className="font-medium">{produce.herbs}</p>
                                  <p className="text-sm text-gray-600">{produce.quantity}</p>
                                  <p className="text-xs text-gray-500">Grade: {produce.grade}</p>
                                  <p className="text-xs text-gray-500">📷 {produce.photos} photos</p>
                                </div>
                              </td>
                              <td className="p-3">
                                <div>
                                  <p className="text-sm">Moisture: {produce.moistureContent}</p>
                                  <div className="text-xs text-gray-600 space-y-1 mt-1">
                                    <div>Quality: Good</div>
                                    <div>Purity: 95%+</div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3">
                                <p className="font-bold text-green-600">₹{produce.estimatedValue.toLocaleString()}</p>
                              </td>
                              <td className="p-3">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  produce.status === 'Pending Verification' 
                                    ? 'bg-yellow-100 text-yellow-800' 
                                    : produce.status === 'IoT Weighing Required'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-orange-100 text-orange-800'
                                }`}>
                                  {produce.status}
                                </span>
                              </td>
                              <td className="p-3">
                                <div className="flex space-x-1">
                                  <button className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs hover:bg-green-100">
                                    <Scale className="h-3 w-3 inline mr-1" />
                                    Weigh
                                  </button>
                                  <button className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100">
                                    <Eye className="h-3 w-3 inline mr-1" />
                                    View
                                  </button>
                                  <button className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs hover:bg-purple-100">
                                    <CheckCircle className="h-3 w-3 inline mr-1" />
                                    Approve
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {/* Batch Creation Tab */}
                {activeTab === 'batches' && (
                  <>
                    <div className="p-4 border-b">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Create New Batch</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded text-sm"
                            placeholder="e.g., Premium Turmeric Mix"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Target Weight (kg)</label>
                          <input 
                            type="number" 
                            className="w-full p-2 border border-gray-300 rounded text-sm"
                            placeholder="350"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Verified Produces</label>
                        <div className="max-h-32 overflow-y-auto border border-gray-300 rounded p-2">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm">Ram Singh - Turmeric (125kg) - ₹4,500</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm">Mohan Lal - Turmeric (100kg) - ₹3,500</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm">Raj Kumar - Turmeric (75kg) - ₹2,550</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center">
                        <Package className="h-4 w-4 mr-2" />
                        Create Batch & Generate QR
                      </button>
                    </div>
                    
                    <div className="flex-1 p-4">
                      <h4 className="font-medium text-gray-800 mb-3">Batch Composition Preview</h4>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600">Select produces above to see batch composition and automatic share calculation</p>
                      </div>
                    </div>
                  </>
                )}

                {/* Forward to Lab Tab */}
                {activeTab === 'forward' && (
                  <>
                    <div className="p-4 border-b flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800">Ready for Lab Testing</h3>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Lab Directory
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b text-xs">
                          <tr>
                            <th className="text-left p-3 font-medium">Batch Details</th>
                            <th className="text-left p-3 font-medium">Composition</th>
                            <th className="text-left p-3 font-medium">Value</th>
                            <th className="text-left p-3 font-medium">Status</th>
                            <th className="text-left p-3 font-medium">Lab Assignment</th>
                            <th className="text-left p-3 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {mockActiveBatches.filter(batch => batch.status === 'Ready for Lab').map((batch, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="p-3">
                                <div>
                                  <p className="font-medium text-gray-800">{batch.batchName}</p>
                                  <p className="text-xs text-gray-500">{batch.id}</p>
                                  <p className="text-xs text-gray-500">Weight: {batch.totalWeight}</p>
                                  <p className="text-xs text-gray-500">{batch.createdDate}</p>
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="text-xs">
                                  <p>{batch.farmers} farmers</p>
                                  {batch.compositions.slice(0, 2).map((comp, i) => (
                                    <p key={i} className="text-gray-600">{comp.farmer} ({comp.share}%)</p>
                                  ))}
                                  {batch.farmers > 2 && <p className="text-gray-500">+{batch.farmers - 2} more</p>}
                                </div>
                              </td>
                              <td className="p-3">
                                <p className="font-bold text-green-600">₹{batch.estimatedValue.toLocaleString()}</p>
                              </td>
                              <td className="p-3">
                                <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                                  {batch.status}
                                </span>
                              </td>
                              <td className="p-3">
                                <div>
                                  <select className="w-full text-xs border border-gray-300 rounded p-1">
                                    <option>Select Lab</option>
                                    <option>Delhi Ayush Lab</option>
                                    <option>Mumbai Testing Center</option>
                                    <option>Chandigarh Lab</option>
                                    <option>Bangalore Research Lab</option>
                                  </select>
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="flex space-x-1">
                                  <button className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs hover:bg-orange-100">
                                    <Send className="h-3 w-3 inline mr-1" />
                                    Forward
                                  </button>
                                  <button className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100">
                                    <QrCode className="h-3 w-3 inline mr-1" />
                                    QR
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {/* Manage Batches Tab */}
                {activeTab === 'manage' && (
                  <>
                    <div className="p-4 border-b flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800">All Batch Management</h3>
                      <div className="flex items-center space-x-2">
                        <select className="text-sm border border-gray-300 rounded p-1">
                          <option>All Status</option>
                          <option>In Preparation</option>
                          <option>Ready for Lab</option>
                          <option>Lab Testing</option>
                          <option>Approved</option>
                        </select>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Export Report
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b text-xs">
                          <tr>
                            <th className="text-left p-3 font-medium">Batch Info</th>
                            <th className="text-left p-3 font-medium">Farmers & Composition</th>
                            <th className="text-left p-3 font-medium">Weight & Value</th>
                            <th className="text-left p-3 font-medium">Status & Lab</th>
                            <th className="text-left p-3 font-medium">QR & Tracking</th>
                            <th className="text-left p-3 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {mockActiveBatches.map((batch, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="p-3">
                                <div>
                                  <p className="font-medium text-gray-800">{batch.batchName}</p>
                                  <p className="text-xs text-gray-500">{batch.id}</p>
                                  <p className="text-xs text-gray-500">Created: {batch.createdDate}</p>
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="text-xs space-y-1">
                                  <p className="font-medium">{batch.farmers} farmers total</p>
                                  {batch.compositions.map((comp, i) => (
                                    <div key={i} className="flex justify-between">
                                      <span className="text-gray-600">{comp.farmer.split(' ')[0]}</span>
                                      <span className="font-medium">{comp.share}% ({comp.quantity})</span>
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="p-3">
                                <div>
                                  <p className="font-medium">{batch.totalWeight}</p>
                                  <p className="text-green-600 font-bold">₹{batch.estimatedValue.toLocaleString()}</p>
                                </div>
                              </td>
                              <td className="p-3">
                                <div>
                                  <span className={`px-2 py-1 rounded text-xs font-medium mb-1 block ${
                                    batch.status === 'Ready for Lab' 
                                      ? 'bg-green-100 text-green-800' 
                                      : batch.status === 'Lab Testing'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {batch.status}
                                  </span>
                                  <p className="text-xs text-gray-600">{batch.labAssignment}</p>
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="text-center">
                                  {batch.qrGenerated ? (
                                    <div>
                                      <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1 flex items-center justify-center">
                                        <QrCode className="h-4 w-4" />
                                      </div>
                                      <p className="text-xs text-green-600">Generated</p>
                                    </div>
                                  ) : (
                                    <div>
                                      <div className="w-8 h-8 bg-gray-100 rounded mx-auto mb-1 flex items-center justify-center">
                                        <QrCode className="h-4 w-4 text-gray-400" />
                                      </div>
                                      <p className="text-xs text-gray-400">Pending</p>
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="flex flex-col space-y-1">
                                  <button className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100 flex items-center">
                                    <Eye className="h-3 w-3 mr-1" />
                                    View Details
                                  </button>
                                  <button className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs hover:bg-green-100 flex items-center">
                                    <RefreshCw className="h-3 w-3 mr-1" />
                                    Update
                                  </button>
                                  {batch.status === 'Ready for Lab' && (
                                    <button className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs hover:bg-orange-100 flex items-center">
                                      <Send className="h-3 w-3 mr-1" />
                                      Forward
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Summary Footer for Manage Tab */}
                    <div className="border-t bg-gray-50 p-4">
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <span className="text-gray-600">Total Batches:</span>
                          <span className="font-bold ml-2">{mockActiveBatches.length}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-gray-600">Total Weight:</span>
                          <span className="font-bold ml-2">
                            {mockActiveBatches.reduce((sum, batch) => sum + parseInt(batch.totalWeight), 0)}kg
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-gray-600">Total Value:</span>
                          <span className="font-bold ml-2 text-green-600">
                            ₹{mockActiveBatches.reduce((sum, batch) => sum + batch.estimatedValue, 0).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-gray-600">Ready for Lab:</span>
                          <span className="font-bold ml-2 text-orange-600">
                            {mockActiveBatches.filter(batch => batch.status === 'Ready for Lab').length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Footer */}
      
    </div>
  );

  return <MiddlemanDashboard />;
};

export default HerbalSupplyChainMiddleman;