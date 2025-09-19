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
  Activity
} from 'lucide-react';

// Enhanced mock data for lab technician
const mockLabTechData = {
  name: 'Dr. Priya Sharma',
  mobile: '+91-9876543210',
  empId: 'LAB-2023-045',
  labName: 'Central Ayurveda Testing Laboratory',
  district: 'Delhi',
  state: 'Delhi',
  qualification: 'PhD Chemistry',
  experience: '8 years',
  totalTests: 245,
  testsCompleted: 12,
  rating: 4.9,
  verified: true,
  certificationNo: 'NABL-2023-456',
  registrationDate: '2023-03-20'
};

const mockLabReports = [
  {
    id: 'AYUSH-HTB-001',
    batchId: 'BTH-001',
    herbs: 'Turmeric',
    farmer: 'Ramesh Kumar',
    quantity: '125kg',
    receivedDate: '15-Sep-24',
    testDate: '16-Sep-24',
    completedDate: '18-Sep-24',
    status: 'Completed',
    grade: 'A',
    purity: '98.5%',
    moisture: '4.2%',
    pesticides: 'Not Detected',
    heavyMetals: 'Within Limits',
    microbiology: 'Safe',
    overallResult: 'Pass',
    curcumin: '6.8%',
    notes: 'Excellent quality turmeric'
  },
  {
    id: 'AYUSH-HTB-002',
    batchId: 'BTH-002',
    herbs: 'Ashwagandha',
    farmer: 'Suresh Patel',
    quantity: '80kg',
    receivedDate: '18-Sep-24',
    testDate: '19-Sep-24',
    completedDate: null,
    status: 'In Progress',
    grade: 'Pending',
    purity: 'Testing',
    moisture: '3.8%',
    pesticides: 'Testing',
    heavyMetals: 'Testing',
    microbiology: 'Testing',
    overallResult: 'Pending',
    withanolides: 'Testing',
    notes: 'Sample under analysis'
  },
  {
    id: 'AYUSH-HTB-003',
    batchId: 'BTH-003',
    herbs: 'Tulsi',
    farmer: 'Kavita Singh',
    quantity: '60kg',
    receivedDate: '20-Sep-24',
    testDate: null,
    completedDate: null,
    status: 'Received',
    grade: 'Pending',
    purity: 'Pending',
    moisture: 'Pending',
    pesticides: 'Pending',
    heavyMetals: 'Pending',
    microbiology: 'Pending',
    overallResult: 'Pending',
    essentialOils: 'Pending',
    notes: 'Sample received, awaiting testing'
  },
  {
    id: 'AYUSH-HTB-004',
    batchId: 'BTH-004',
    herbs: 'Brahmi',
    farmer: 'Mohan Lal',
    quantity: '45kg',
    receivedDate: '12-Sep-24',
    testDate: '13-Sep-24',
    completedDate: '15-Sep-24',
    status: 'Rejected',
    grade: 'D',
    purity: '75.2%',
    moisture: '12.8%',
    pesticides: 'Detected',
    heavyMetals: 'Excessive Lead',
    microbiology: 'Contaminated',
    overallResult: 'Fail',
    saponins: '2.1%',
    notes: 'High pesticide residue and heavy metal contamination'
  }
];

const HerbalLabPanel = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Received': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResultColor = (result) => {
    switch (result) {
      case 'Pass': return 'text-green-600';
      case 'Fail': return 'text-red-600';
      case 'Pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const LabDashboard = () => (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Compact Government Header */}
      <div className="bg-white border-b-4 border-orange-500 shadow-sm flex-shrink-0">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 py-1">
            <div className="flex justify-between items-center">
              <span>Lab Helpline: 1800-11-2222 | lab.support@ayush.gov.in</span>
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
                <p className="text-blue-700 text-sm font-medium">Laboratory Testing Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right text-sm">
                <p className="font-medium text-gray-800">{mockLabTechData.name}</p>
                <p className="text-xs text-gray-600">ID: {mockLabTechData.empId}</p>
              </div>
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700"
              >
                <Microscope className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Compact Navigation */}
        <div className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 text-sm">
              <button className="px-3 py-2 border-b-2 border-orange-400 bg-blue-800 font-medium">
                Lab Dashboard
              </button>
              <button className="px-3 py-2 hover:bg-blue-600">Testing</button>
              <button className="px-3 py-2 hover:bg-blue-600">Reports</button>
              <button className="px-3 py-2 hover:bg-blue-600">Quality Control</button>
              <button className="px-3 py-2 hover:bg-blue-600">Settings</button>
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Microscope className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold">{mockLabTechData.name}</h4>
                  <p className="text-blue-600 text-sm">Lab Technician</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employee ID:</span>
                    <span className="font-medium">{mockLabTechData.empId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mobile:</span>
                    <span className="font-medium">{mockLabTechData.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lab:</span>
                    <span className="font-medium text-right">{mockLabTechData.labName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{mockLabTechData.district}, {mockLabTechData.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Qualification:</span>
                    <span className="font-medium">{mockLabTechData.qualification}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{mockLabTechData.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certification:</span>
                    <span className="font-medium">{mockLabTechData.certificationNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium">{mockLabTechData.rating}/5</span>
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

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Lab Report - {selectedReport.id}</h3>
                <button 
                  onClick={() => setSelectedReport(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Report Header */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Batch ID:</p>
                    <p className="font-medium">{selectedReport.batchId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Herb Type:</p>
                    <p className="font-medium">{selectedReport.herbs}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Quantity:</p>
                    <p className="font-medium">{selectedReport.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Farmer:</p>
                    <p className="font-medium">{selectedReport.farmer}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Test Date:</p>
                    <p className="font-medium">{selectedReport.testDate || 'Pending'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Status:</p>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedReport.status)}`}>
                      {selectedReport.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Test Results */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Test Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <h5 className="font-medium mb-3">Physical & Chemical Tests</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Grade:</span>
                          <span className="font-medium">{selectedReport.grade}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Purity:</span>
                          <span className="font-medium">{selectedReport.purity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Moisture Content:</span>
                          <span className="font-medium">{selectedReport.moisture}</span>
                        </div>
                        {selectedReport.curcumin && (
                          <div className="flex justify-between">
                            <span>Curcumin:</span>
                            <span className="font-medium">{selectedReport.curcumin}</span>
                          </div>
                        )}
                        {selectedReport.withanolides && (
                          <div className="flex justify-between">
                            <span>Withanolides:</span>
                            <span className="font-medium">{selectedReport.withanolides}</span>
                          </div>
                        )}
                        {selectedReport.essentialOils && (
                          <div className="flex justify-between">
                            <span>Essential Oils:</span>
                            <span className="font-medium">{selectedReport.essentialOils}</span>
                          </div>
                        )}
                        {selectedReport.saponins && (
                          <div className="flex justify-between">
                            <span>Saponins:</span>
                            <span className="font-medium">{selectedReport.saponins}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-4">
                      <h5 className="font-medium mb-3">Safety Tests</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Pesticides:</span>
                          <span className={`font-medium ${selectedReport.pesticides === 'Not Detected' ? 'text-green-600' : selectedReport.pesticides === 'Detected' ? 'text-red-600' : ''}`}>
                            {selectedReport.pesticides}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Heavy Metals:</span>
                          <span className={`font-medium ${selectedReport.heavyMetals === 'Within Limits' ? 'text-green-600' : selectedReport.heavyMetals.includes('Excessive') ? 'text-red-600' : ''}`}>
                            {selectedReport.heavyMetals}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Microbiology:</span>
                          <span className={`font-medium ${selectedReport.microbiology === 'Safe' ? 'text-green-600' : selectedReport.microbiology === 'Contaminated' ? 'text-red-600' : ''}`}>
                            {selectedReport.microbiology}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overall Result */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Overall Result:</h5>
                      <p className={`text-lg font-bold ${getResultColor(selectedReport.overallResult)}`}>
                        {selectedReport.overallResult}
                      </p>
                    </div>
                    {selectedReport.overallResult === 'Pass' && (
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    )}
                    {selectedReport.overallResult === 'Fail' && (
                      <XCircle className="h-12 w-12 text-red-500" />
                    )}
                    {selectedReport.overallResult === 'Pending' && (
                      <Clock className="h-12 w-12 text-yellow-500" />
                    )}
                  </div>
                </div>

                {/* Notes */}
                {selectedReport.notes && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium mb-2">Notes:</h5>
                    <p className="text-sm text-gray-700">{selectedReport.notes}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-6 border-t">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Send to Farmer
                </button>
                {selectedReport.status === 'In Progress' && (
                  <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center">
                    <Clipboard className="h-4 w-4 mr-2" />
                    Update Results
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
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-4">
                <h2 className="text-xl font-bold mb-1">नमस्कार, {mockLabTechData.name}</h2>
                <p className="text-blue-100 text-sm mb-2">Lab Testing Portal</p>
                <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-2 text-center">
                  <p className="text-lg font-bold">{mockLabTechData.totalTests}</p>
                  <p className="text-xs">Total Tests Completed</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-600">1</p>
                  <p className="text-gray-600 text-xs">Completed Today</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-600">1</p>
                  <p className="text-gray-600 text-xs">In Progress</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-orange-600">1</p>
                  <p className="text-gray-600 text-xs">Received</p>
                </div>
                <div className="bg-white border rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-red-600">1</p>
                  <p className="text-gray-600 text-xs">Rejected</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 flex items-center justify-center">
                  <TestTube className="h-4 w-4 mr-2" />
                  Start New Test
                </button>
                <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 flex items-center justify-center">
                  <Activity className="h-4 w-4 mr-2" />
                  View Test Queue
                </button>
                <button className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 flex items-center justify-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Reports
                </button>
              </div>

              {/* Lab Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-bold text-blue-800 mb-2 text-sm">{mockLabTechData.labName}</h4>
                <div className="text-xs text-blue-700 space-y-1">
                  <p className="flex items-center"><Shield className="h-3 w-3 mr-1" />NABL Accredited</p>
                  <p className="flex items-center"><Award className="h-3 w-3 mr-1" />ISO 17025:2017</p>
                  <p>Quality Assured Testing</p>
                </div>
              </div>

              {/* Support Info */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <h4 className="font-bold text-orange-800 mb-2 text-sm">Lab Support</h4>
                <div className="text-xs text-orange-700 space-y-1">
                  <p className="flex items-center"><Phone className="h-3 w-3 mr-1" />1800-11-2222</p>
                  <p className="flex items-center"><Mail className="h-3 w-3 mr-1" />lab.support@ayush.gov.in</p>
                  <p>24x7 Technical Support</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Lab Reports Table */}
            <div className="col-span-8">
              <div className="bg-white border rounded-lg h-full flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">Lab Test Reports</h3>
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                      Export All
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
                        <th className="text-left p-3 font-medium">Sample Details</th>
                        <th className="text-left p-3 font-medium">Farmer</th>
                        <th className="text-left p-3 font-medium">Dates</th>
                        <th className="text-left p-3 font-medium">Test Results</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Overall</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockLabReports.map((report, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium text-gray-800">{report.herbs}</p>
                              <p className="text-xs text-gray-500">{report.id}</p>
                              <p className="text-xs text-gray-500">Batch: {report.batchId}</p>
                              <p className="text-xs text-gray-500">{report.quantity}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <p className="font-medium">{report.farmer}</p>
                          </td>
                          <td className="p-3">
                            <div className="text-xs">
                              <p>Received: {report.receivedDate}</p>
                              <p>Started: {report.testDate || 'Pending'}</p>
                              <p>Completed: {report.completedDate || 'Pending'}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-xs">
                              <p>Grade: {report.grade}</p>
                              <p>Purity: {report.purity}</p>
                              <p>Pesticides: {report.pesticides}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <span className={`font-bold text-sm ${getResultColor(report.overallResult)}`}>
                              {report.overallResult}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex space-x-1">
                              <button 
                                onClick={() => setSelectedReport(report)}
                                className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100"
                              >
                                View
                              </button>
                              {report.status === 'Completed' && (
                                <button className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs hover:bg-green-100">
                                  Download
                                </button>
                              )}
                              {report.status === 'In Progress' && (
                                <button className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs hover:bg-orange-100">
                                  Update
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
                    <span className="text-gray-600">Total Reports: {mockLabReports.length}</span>
                    <span className="text-gray-600">
                      Completed: {mockLabReports.filter(r => r.status === 'Completed').length}
                    </span>
                    <span className="text-gray-600">Average Rating: {mockLabTechData.rating}/5</span>
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

  return <LabDashboard />;
};

export default HerbalLabPanel;