import React from 'react';

import { MapPin, CheckCircle, XCircle, FileText, Factory, Users, FlaskConical, Leaf } from 'lucide-react';



const AshwagandhaTraceability = () => {

  const timelineData = {

    farmer: {

      name: "Rajesh Kumar",

      id: "FRM-2024-0892",

      photo: "/images/farmer.avif", // Place your farmer image in public/images/farmer.jpg

      harvestPhoto: "/images/herb.png", // Place your harvest image in public/images/harvest.jpg

      timestamp: "2024-03-15 06:30 AM",

      location: "28.6139° N, 77.2090° E",

      farmLocation: "Rajasthan, India"

    },

    middleman: {

      name: "Manan Jindal",

      id: "MID-2024-1445",

      photo: "/images/middleman.jpeg", // Place your middleman image in public/images/middleman.jpg (optional)

      batchNumber: "ASH-2024-MAR-001",

      quantity: "500 KG",

      verified: true

    },

    lab: {

      name: "National Institute of Ayurveda (NIA), Jaipur",

      photo: "/images/lab.jpg", // Place your lab image in public/images/lab.jpg

      testDate: "2024-03-18",

      status: "passed",

      reportLink: "#test-report-pdf"

    },

    manufacturer: {

      name: "Shree Devbhumi Herboceutial Pvt. Ltd.",

      location: "Rajasthan, India",

      photo: "/images/manufacturer.webp", // Place your manufacturer image in public/images/manufacturer.jpg

      processes: ["Cleaning", "Drying", "Powdering", "Capsule Filling", "Packaging"]

    }

  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        

        {/* Header */}

        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-12 relative overflow-hidden">

          <div className="absolute top-4 right-4 text-6xl opacity-20">🌿</div>

          <div className="relative z-10">

            <h1 className="text-4xl font-bold mb-2">Ashwagandha Capsule</h1>

            <p className="text-green-100 text-lg">Complete Farm to Pharma Journey</p>

            <div className="mt-4 inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full">

              <span className="text-sm text-black">QR Code Verified ✓</span>

            </div>

          </div>

        </div>



        {/* Why Ashwagandha Section */}

        <div className="px-8 py-10 bg-gradient-to-r from-amber-50 to-orange-50">

          <div className="flex items-center mb-6">

            <Leaf className="w-8 h-8 text-green-600 mr-3" />

            <h2 className="text-3xl font-bold text-gray-800">Why Ashwagandha?</h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">

              <div className="text-4xl mb-3"></div>

              <h3 className="font-semibold text-gray-800 mb-2">Stress Relief</h3>

              <p className="text-gray-600 text-sm">Natural adaptogen that helps manage cortisol levels and reduce stress</p>

            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">

              <div className="text-4xl mb-3"></div>

              <h3 className="font-semibold text-gray-800 mb-2">Immunity Boost</h3>

              <p className="text-gray-600 text-sm">Strengthens immune system and enhances body's natural defense mechanisms</p>

            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">

              <div className="text-4xl mb-3"></div>

              <h3 className="font-semibold text-gray-800 mb-2">Enhanced Vitality</h3>

              <p className="text-gray-600 text-sm">Increases energy levels and supports overall physical and mental performance</p>

            </div>

          </div>

          <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">

            <p className="text-gray-700 leading-relaxed">

              <strong>Ayurvedic Heritage:</strong> Known as "Rasayana" in Ayurveda, Ashwagandha has been treasured for over 3,000 years as a powerful rejuvenative herb. This "Indian Winter Cherry" is scientifically proven to support hormonal balance, cognitive function, and physical endurance.

            </p>

          </div>

        </div>



        {/* Timeline Container */}

        <div className="px-8 py-10">

          <div className="relative">

            {/* Timeline Line */}

            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>



            {/* Farmer Panel */}

            <div className="relative mb-12">

              <div className="flex items-center mb-4">

                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">1</div>

                <h2 className="text-2xl font-bold ml-6 text-gray-800">Farmer Panel</h2>

              </div>

              <div className="ml-22 bg-green-50 rounded-2xl p-6 shadow-lg border-l-4 border-green-500">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <div className="flex items-center mb-4">

                      <img 

                        src={timelineData.farmer.photo} 

                        alt="Farmer" 

                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"

                      />

                      <div>

                        <h3 className="text-xl font-semibold text-gray-800">{timelineData.farmer.name}</h3>

                        <p className="text-green-600 font-medium">ID: {timelineData.farmer.id}</p>

                      </div>

                    </div>

                    <div className="space-y-3">

                      <div className="flex items-center text-gray-700">

                        <MapPin className="w-4 h-4 mr-2" />

                        <span className="text-sm">{timelineData.farmer.location}</span>

                      </div>

                      <div className="text-sm text-gray-600">

                        <strong>Harvest Time:</strong> {timelineData.farmer.timestamp}

                      </div>

                      <div className="text-sm text-gray-600">

                        <strong>Farm Location:</strong> {timelineData.farmer.farmLocation}

                      </div>

                    </div>

                  </div>

                  <div>

                    <h4 className="font-semibold text-gray-800 mb-3">Live Harvest Photo</h4>

                    <img 

                      src={timelineData.farmer.harvestPhoto} 

                      alt="Ashwagandha Harvest" 

                      className="w-full h-48 object-cover rounded-xl shadow-lg"

                    />

                    <div className="mt-3 p-3 bg-white rounded-lg shadow">

                      <div className="text-xs text-gray-500">Metadata: Geotagged & Timestamped</div>

                      <div className="text-xs text-green-600 mt-1">✓ Verified Live Capture</div>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* Middleman Panel */}

            <div className="relative mb-12">

              <div className="flex items-center mb-4">

                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">2</div>

                <h2 className="text-2xl font-bold ml-6 text-gray-800">Middleman Panel</h2>

              </div>

              <div className="ml-22 bg-blue-50 rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <div className="flex items-center mb-4">

                      <img 

                        src={timelineData.middleman.photo} 

                        alt="Middleman" 

                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"

                      />

                      <div>

                        <h3 className="text-xl font-semibold text-gray-800">{timelineData.middleman.name}</h3>

                        <p className="text-blue-600 font-medium">ID: {timelineData.middleman.id}</p>

                      </div>

                    </div>

                    {timelineData.middleman.verified && (

                      <div className="flex items-center mb-4">

                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />

                        <span className="text-green-700 font-medium text-sm bg-green-100 px-3 py-1 rounded-full">

                          Ministry Verified

                        </span>

                      </div>

                    )}

                  </div>

                  <div className="space-y-3">

                    <div className="bg-white p-4 rounded-lg shadow">

                      <h4 className="font-semibold text-gray-800 mb-2">Transaction Details</h4>

                      <div className="text-sm text-gray-600 space-y-1">

                        <div><strong>Batch Number:</strong> {timelineData.middleman.batchNumber}</div>

                        <div><strong>Quantity Transferred:</strong> {timelineData.middleman.quantity}</div>

                        <div><strong>Status:</strong> <span className="text-green-600">✓ Completed</span></div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* Ministry Lab Panel */}

            <div className="relative mb-12">

              <div className="flex items-center mb-4">

                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">3</div>

                <h2 className="text-2xl font-bold ml-6 text-gray-800">Ministry Lab Panel</h2>

              </div>

              <div className="ml-22 bg-purple-50 rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{timelineData.lab.name}</h3>

                    <img 

                      src={timelineData.lab.photo} 

                      alt="Lab" 

                      className="w-full h-32 object-cover rounded-xl shadow-lg mb-4"

                    />

                    <div className="text-sm text-gray-600">

                      <strong>Test Date:</strong> {timelineData.lab.testDate}

                    </div>

                  </div>

                  <div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">

                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">

                        <FlaskConical className="w-5 h-5 mr-2" />

                        Test Summary

                      </h4>

                      {timelineData.lab.status === 'passed' ? (

                        <div className="flex items-center mb-4">

                          <CheckCircle className="w-8 h-8 text-green-500 mr-3" />

                          <div>

                            <div className="text-green-700 font-semibold">✓ PASSED</div>

                            <div className="text-sm text-gray-600">No heavy metals detected</div>

                            <div className="text-sm text-gray-600">No adulteration found</div>

                          </div>

                        </div>

                      ) : (

                        <div className="flex items-center mb-4">

                          <XCircle className="w-8 h-8 text-red-500 mr-3" />

                          <div>

                            <div className="text-red-700 font-semibold">❌ FAILED</div>

                          </div>

                        </div>

                      )}

                      <a 

                        href={timelineData.lab.reportLink}

                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"

                      >

                        <FileText className="w-4 h-4 mr-2" />

                        View Full Test Report

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* Manufacturer Panel */}

            <div className="relative mb-12">

              <div className="flex items-center mb-4">

                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">4</div>

                <h2 className="text-2xl font-bold ml-6 text-gray-800">Manufacturer Panel</h2>

              </div>

              <div className="ml-22 bg-orange-50 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{timelineData.manufacturer.name}</h3>

                    <p className="text-orange-600 font-medium mb-4">{timelineData.manufacturer.location}</p>

                    <img 

                      src={timelineData.manufacturer.photo} 

                      alt="Manufacturing Unit" 

                      className="w-full h-40 object-cover rounded-xl shadow-lg"

                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">

                      <Factory className="w-5 h-5 mr-2" />

                      Manufacturing Process

                    </h4>

                    <div className="space-y-3">

                      {timelineData.manufacturer.processes.map((process, index) => (

                        <div key={index} className="flex items-center">

                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm mr-3">

                            {index + 1}

                          </div>

                          <span className="text-gray-700">{process}</span>

                        </div>

                      ))}

                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg shadow">

                      <div className="text-green-700 font-semibold mb-2">✓ Quality Check Complete</div>

                      <div className="text-sm text-gray-600">This batch is now ready for distribution</div>

                      <div className="text-xs text-gray-500 mt-2">Final QR reassignment completed</div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Footer */}

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-8">

          <div className="text-center">

            <h3 className="text-2xl font-bold mb-4">Verified by Ministry of AYUSH</h3>

            <p className="text-gray-300 text-lg mb-6">Transparency from Farm to Pharma</p>

            <div className="flex justify-center items-center space-x-8">

              <div className="flex items-center">

                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3">

                  <span className="text-orange-500 font-bold text-sm">AYUSH</span>

                </div>

                <span className="text-gray-300">Ministry of AYUSH</span>

              </div>

              <div className="flex items-center">

                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-3">

                  <Leaf className="w-8 h-8 text-white" />

                </div>

                <span className="text-gray-300">Vedic Wellness</span>

              </div>

            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">

              <p className="text-sm text-gray-400">

                This product has been verified through our blockchain-based traceability system. 

                Scan QR code for real-time verification.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};



export default AshwagandhaTraceability;