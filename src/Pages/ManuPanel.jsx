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
  Microscope,
  AlertTriangle,
  Download,
  Clipboard,
  TestTube,
  Activity,
  Boxes,
  Truck,
  ShoppingCart,
  BarChart3,
  Plus,
  Edit
} from 'lucide-react';

// Enhanced mock data for manufacturer
const mockManufacturerData = {
  name: 'Ayurvedic Medicines Pvt. Ltd.',
  contactPerson: 'Mr. Vikash Gupta',
  mobile: '+91-9876543210',
  manufacturerId: 'MFG-2023-078',
  gstNumber: '07AABCT1332L1ZZ',
  licenseNumber: 'DL-AY-2023-4567',
  address: 'Industrial Area, Sector 15, Gurgaon',
  district: 'Gurgaon',
  state: 'Haryana',
  capacity: '500 tons/month',
  totalProduction: 1250,
  activeStocks: 18,
  rating: 4.7,
  verified: true,
  certifications: ['ISO 9001:2015', 'WHO-GMP', 'AYUSH License'],
  registrationDate: '2023-02-10'
};

const mockStock = [
  {
    stockId: 'STK-2024-001',
    labId: 'AYUSH-HTB-001',
    labName: 'Central Ayurveda Testing Lab, Delhi',
    herbs: 'Turmeric',
    farmer: 'Ramesh Kumar',
    receivedDate: '20-Sep-24',
    quantity: '125kg',
    grade: 'A',
    labTestResult: 'Pass',
    curcumin: '6.8%',
    moisture: '4.2%',
    purity: '98.5%',
    status: 'In Production',
    productType: 'Turmeric Capsules',
    batchSize: '5000 units',
    productionStarted: '22-Sep-24',
    expectedCompletion: '28-Sep-24',
    qualityCheck: 'Pending',
    storageLocation: 'Warehouse A-12'
  },
  {
    stockId: 'STK-2024-002',
    labId: 'AYUSH-HTB-002',
    labName: 'Regional Testing Lab, Mumbai',
    herbs: 'Ashwagandha',
    farmer: 'Suresh Patel',
    receivedDate: '18-Sep-24',
    quantity: '80kg',
    grade: 'A',
    labTestResult: 'Pass',
    withanolides: '5.2%',
    moisture: '3.8%',
    purity: '96.8%',
    status: 'Ready for Production',
    productType: 'Ashwagandha Powder',
    batchSize: '3000 units',
    productionStarted: null,
    expectedCompletion: null,
    qualityCheck: 'Approved',
    storageLocation: 'Warehouse B-05'
  },
  {
    stockId: 'STK-2024-003',
    labId: 'AYUSH-HTB-005',
    labName: 'State Testing Lab, Bangalore',
    herbs: 'Tulsi',
    farmer: 'Kavita Singh',
    receivedDate: '15-Sep-24',
    quantity: '60kg',
    grade: 'B',
    labTestResult: 'Pass',
    essentialOils: '2.8%',
    moisture: '5.1%',
    purity: '92.3%',
    status: 'Completed',
    productType: 'Tulsi Tea Bags',
    batchSize: '8000 units',
    productionStarted: '16-Sep-24',
    expectedCompletion: '20-Sep-24',
    qualityCheck: 'Approved',
    storageLocation: 'Warehouse C-18'
  },
  {
    stockId: 'STK-2024-004',
    labId: 'AYUSH-HTB-008',
    labName: 'Central Ayurveda Testing Lab, Delhi',
    herbs: 'Brahmi',
    farmer: 'Rajesh Kumar',
    receivedDate: '25-Sep-24',
    quantity: '90kg',
    grade: 'A',
    labTestResult: 'Pass',
    saponins: '8.5%',
    moisture: '4.0%',
    purity: '97.2%',
    status: 'Quality Check',
    productType: 'Brahmi Syrup',
    batchSize: '2500 units',
    productionStarted: '26-Sep-24',
    expectedCompletion: '02-Oct-24',
    qualityCheck: 'In Progress',
    storageLocation: 'Warehouse A-08'
  },
  {
    stockId: 'STK-2024-005',
    labId: 'AYUSH-HTB-012',
    labName: 'Regional Testing Lab, Chennai',
    herbs: 'Neem',
    farmer: 'Priya Sharma',
    receivedDate: '12-Sep-24',
    quantity: '150kg',
    grade: 'A',
    labTestResult: 'Pass',
    azadirachtin: '1200ppm',
    moisture: '3.5%',
    purity: '99.1%',
    status: 'Shipped',
    productType: 'Neem Oil Capsules',
    batchSize: '10000 units',
    productionStarted: '13-Sep-24',
    expectedCompletion: '18-Sep-24',
    qualityCheck: 'Approved',
    storageLocation: 'Dispatched'
  }
];

const HerbalManufacturerPanel = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Production': return 'bg-blue-100 text-blue-800';
      case 'Ready for Production': return 'bg-yellow-100 text-yellow-800';
      case 'Quality Check': return 'bg-purple-100 text-purple-800';
      case 'Shipped': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getQualityColor = (quality) => {
    switch (quality) {
      case 'Approved': return 'text-green-600';
      case 'In Progress': return 'text-blue-600';
      case 'Pending': return 'text-yellow-600';
      case 'Failed': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const ManufacturerDashboard = () => (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Compact Government Header */}
      <div className="bg-white border-b-4 border-orange-500 shadow-sm flex-shrink-0">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 py-1">
            <div className="flex justify-between items-center">
              <span>Manufacturer Helpline: 1800-11-3333 | mfg.support@ayush.gov.in</span>
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
                <p className="text-blue-700 text-sm font-medium">Manufacturer Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right text-sm">
                <p className="font-medium text-gray-800">{mockManufacturerData.contactPerson}</p>
                <p className="text-xs text-gray-600">ID: {mockManufacturerData.manufacturerId}</p>
              </div>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700"
              >
                <Factory className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Compact Navigation */}
        <div className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 text-sm">
              <button className="px-3 py-2 border-b-2 border-orange-400 bg-blue-800 font-medium">
                Manufacturing
              </button>
              <button className="px-3 py-2 hover:bg-blue-600">Stock</button>
              <button className="px-3 py-2 hover:bg-blue-600">Production</button>
              <button className="px-3 py-2 hover:bg-blue-600">Quality</button>
              <button className="px-3 py-2 hover:bg-blue-600">Dispatch</button>
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
                <h3 className="text-lg font-bold">Company Profile</h3>
                <button 
                  onClick={() => setShowProfile(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="text-center pb-4 border-b mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Factory className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold">{mockManufacturerData.name}</h4>
                  <p className="text-blue-600 text-sm">Licensed Manufacturer</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact Person:</span>
                    <span className="font-medium text-right">{mockManufacturerData.contactPerson}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mobile:</span>
                    <span className="font-medium">{mockManufacturerData.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST Number:</span>
                    <span className="font-medium text-right">{mockManufacturerData.gstNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">License:</span>
                    <span className="font-medium text-right">{mockManufacturerData.licenseNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-right">{mockManufacturerData.district}, {mockManufacturerData.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-medium">{mockManufacturerData.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium">{mockManufacturerData.rating}/5</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <h5 className="font-medium mb-2">Certifications</h5>
                  <div className="space-y-1">
                    {mockManufacturerData.certifications.map((cert, index) => (
                      <div key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        {cert}
                      </div>
                    ))}
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

      {/* Stock Detail Modal */}
      {selectedStock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Stock Details - {selectedStock.stockId}</h3>
                <button 
                  onClick={() => setSelectedStock(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Stock Header */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Stock ID:</p>
                    <p className="font-medium">{selectedStock.stockId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Herb Type:</p>
                    <p className="font-medium">{selectedStock.herbs}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Quantity:</p>
                    <p className="font-medium">{selectedStock.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Grade:</p>
                    <p className="font-medium">{selectedStock.grade}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Lab Information */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Microscope className="h-5 w-5 mr-2 text-blue-600" />
                    Lab Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lab ID:</span>
                      <span className="font-medium">{selectedStock.labId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lab Name:</span>
                      <span className="font-medium text-right">{selectedStock.labName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Test Result:</span>
                      <span className={`font-medium ${selectedStock.labTestResult === 'Pass' ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedStock.labTestResult}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Farmer:</span>
                      <span className="font-medium">{selectedStock.farmer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Received Date:</span>
                      <span className="font-medium">{selectedStock.receivedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Quality Parameters */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <TestTube className="h-5 w-5 mr-2 text-green-600" />
                    Quality Parameters
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Purity:</span>
                      <span className="font-medium">{selectedStock.purity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Moisture:</span>
                      <span className="font-medium">{selectedStock.moisture}</span>
                    </div>
                    {selectedStock.curcumin && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Curcumin:</span>
                        <span className="font-medium">{selectedStock.curcumin}</span>
                      </div>
                    )}
                    {selectedStock.withanolides && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Withanolides:</span>
                        <span className="font-medium">{selectedStock.withanolides}</span>
                      </div>
                    )}
                    {selectedStock.essentialOils && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Essential Oils:</span>
                        <span className="font-medium">{selectedStock.essentialOils}</span>
                      </div>
                    )}
                    {selectedStock.saponins && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saponins:</span>
                        <span className="font-medium">{selectedStock.saponins}</span>
                      </div>
                    )}
                    {selectedStock.azadirachtin && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Azadirachtin:</span>
                        <span className="font-medium">{selectedStock.azadirachtin}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Manufacturing Details */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Factory className="h-5 w-5 mr-2 text-purple-600" />
                    Manufacturing Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product Type:</span>
                      <span className="font-medium">{selectedStock.productType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Batch Size:</span>
                      <span className="font-medium">{selectedStock.batchSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Production Started:</span>
                      <span className="font-medium">{selectedStock.productionStarted || 'Not Started'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Completion:</span>
                      <span className="font-medium">{selectedStock.expectedCompletion || 'Not Scheduled'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage Location:</span>
                      <span className="font-medium">{selectedStock.storageLocation}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Quality */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-orange-600" />
                    Status & Quality
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current Status:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedStock.status)}`}>
                        {selectedStock.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Quality Check:</span>
                      <span className={`font-medium ${getQualityColor(selectedStock.qualityCheck)}`}>
                        {selectedStock.qualityCheck}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Production Progress</span>
                        <span>
                          {selectedStock.status === 'Completed' ? '100%' : 
                           selectedStock.status === 'In Production' ? '60%' : 
                           selectedStock.status === 'Quality Check' ? '85%' :
                           selectedStock.status === 'Shipped' ? '100%' : '0%'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            selectedStock.status === 'Completed' ? 'bg-green-500 w-full' :
                            selectedStock.status === 'In Production' ? 'bg-blue-500 w-3/5' :
                            selectedStock.status === 'Quality Check' ? 'bg-purple-500 w-5/6' :
                            selectedStock.status === 'Shipped' ? 'bg-gray-500 w-full' :
                            'bg-yellow-500 w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-6 border-t">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Details
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Status
                </button>
                {selectedStock.status === 'Ready for Production' && (
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center">
                    <Factory className="h-4 w-4 mr-2" />
                    Start Production
                  </button>
                )}
                {selectedStock.status === 'Completed' && (
                  <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center">
                    <Truck className="h-4 w-4 mr-2" />
                    Ready to Ship
                  </button>
                )}
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
              <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-lg p-4">
                <h2 className="text-lg font-bold mb-1">{mockManufacturerData.name}</h2>
                <p className="text-purple-100 text-sm mb-2">Manufacturing Portal</p>
                <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-2 text-center">
                  <p className="text-lg font-bold">{mockManufacturerData.totalProduction}</p>
                  <p className="text-xs">Total Production (tons)</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">1</p>
                  <p className="text-gray-600 text-xs">Completed</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-600">1</p>
                  <p className="text-gray-600 text-xs">In Production</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                  <p className="text-gray-600 text-xs">Ready</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-purple-600">1</p>
                  <p className="text-gray-600 text-xs">Quality Check</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 flex items-center justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Stock
                </button>
                <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 flex items-center justify-center">
                  <Factory className="h-4 w-4 mr-2" />
                  Start Production
                </button>
                <button className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Production Report
                </button>
              </div>

              {/* Capacity Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-bold text-blue-800 mb-2 text-sm">Manufacturing Capacity</h4>
                <div className="text-xs text-blue-700 space-y-1">
                  <p className="flex items-center"><Factory className="h-3 w-3 mr-1" />{mockManufacturerData.capacity}</p>
                  <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-center">75% Utilized</p>
                </div>
              </div>

              {/* Support Info */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <h4 className="font-bold text-orange-800 mb-2 text-sm">Support</h4>
                <div className="text-xs text-orange-700 space-y-1">
                  <p className="flex items-center"><Phone className="h-3 w-3 mr-1" />1800-11-3333</p>
                  <p className="flex items-center"><Mail className="h-3 w-3 mr-1" />mfg.support@ayush.gov.in</p>
                  <p>Mon-Sat: 9 AM - 7 PM</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Stock Management Table */}
            <div className="col-span-8">
              <div className="bg-white border rounded-lg h-full flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">Stock & Production Management</h3>
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                      Export Stock
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 overflow-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b text-xs sticky top-0">
                      <tr>
                        <th className="text-left p-3 font-medium">Stock & Lab Info</th>
                        <th className="text-left p-3 font-medium">Herb Details</th>
                        <th className="text-left p-3 font-medium">Lab Test Results</th>
                        <th className="text-left p-3 font-medium">Production</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Quality</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockStock.map((stock, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium text-gray-800">{stock.stockId}</p>
                              <p className="text-xs text-blue-600">{stock.labId}</p>
                              <p className="text-xs text-gray-500">{stock.labName}</p>
                              <p className="text-xs text-gray-500">Farmer: {stock.farmer}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div>
                              <p className="font-medium text-green-700">{stock.herbs}</p>
                              <p className="text-xs text-gray-500">Qty: {stock.quantity}</p>
                              <p className="text-xs text-gray-500">Grade: {stock.grade}</p>
                              <p className="text-xs text-gray-500">Received: {stock.receivedDate}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-xs">
                              <p className={`font-medium ${stock.labTestResult === 'Pass' ? 'text-green-600' : 'text-red-600'}`}>
                                {stock.labTestResult}
                              </p>
                              <p>Purity: {stock.purity}</p>
                              <p>Moisture: {stock.moisture}</p>
                              {stock.curcumin && <p>Curcumin: {stock.curcumin}</p>}
                              {stock.withanolides && <p>Withanolides: {stock.withanolides}</p>}
                              {stock.essentialOils && <p>Essential Oils: {stock.essentialOils}</p>}
                              {stock.saponins && <p>Saponins: {stock.saponins}</p>}
                              {stock.azadirachtin && <p>Azadirachtin: {stock.azadirachtin}</p>}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-xs">
                              <p className="font-medium">{stock.productType}</p>
                              <p>Batch: {stock.batchSize}</p>
                              <p>Started: {stock.productionStarted || 'Not Started'}</p>
                              <p>Expected: {stock.expectedCompletion || 'N/A'}</p>
                              <p>Location: {stock.storageLocation}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(stock.status)}`}>
                              {stock.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <span className={`font-medium text-sm ${getQualityColor(stock.qualityCheck)}`}>
                              {stock.qualityCheck}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col space-y-1">
                              <button 
                                onClick={() => setSelectedStock(stock)}
                                className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100"
                              >
                                View Details
                              </button>
                              {stock.status === 'Ready for Production' && (
                                <button className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs hover:bg-green-100">
                                  Start Production
                                </button>
                              )}
                              {stock.status === 'In Production' && (
                                <button className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs hover:bg-orange-100">
                                  Update Status
                                </button>
                              )}
                              {stock.status === 'Completed' && (
                                <button className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs hover:bg-purple-100">
                                  Ship Order
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
                    <span className="text-gray-600">Total Stock Items: {mockStock.length}</span>
                    <span className="text-gray-600">
                      Active Production: {mockStock.filter(s => s.status === 'In Production').length}
                    </span>
                    <span className="text-gray-600">Completed: {mockStock.filter(s => s.status === 'Completed').length}</span>
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

  return <ManufacturerDashboard />;
};

export default HerbalManufacturerPanel;