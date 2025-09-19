import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, User, MapPin, Leaf, Phone, CreditCard, Building2 } from 'lucide-react';

const FarmerSignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    aadhaar: '',
    state: '',
    district: '',
    village: '',
    pincode: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    bankName: '',
    accountHolderName: ''
  });

  const navigate = useNavigate();
  
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const districts = {
  // Southern States
  'Karnataka': [
    'Bangalore Urban', 'Bangalore Rural', 'Mysore', 'Hubli-Dharwad', 'Mangalore', 
    'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Bijapur', 'Tumkur', 
    'Raichur', 'Bidar', 'Shimoga', 'Chitradurga', 'Kolar', 'Mandya', 
    'Hassan', 'Dakshina Kannada', 'Udupi', 'Uttara Kannada', 'Chikmagalur', 
    'Kodagu', 'Chamarajanagar', 'Gadag', 'Bagalkot', 'Haveri', 'Koppal', 
    'Ramanagara', 'Chikkaballapur', 'Yadgir', 'Vijayapura'
  ],
  'Kerala': [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 
    'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 
    'Wayanad', 'Kannur', 'Kasaragod'
  ],
  'Tamil Nadu': [
    'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 
    'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 
    'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivaganga', 
    'Thanjavur', 'The Nilgiris', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 
    'Tirunelveli', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 
    'Vellore', 'Viluppuram', 'Virudhunagar', 'Ariyalur', 'Chengalpattu', 
    'Kallakurichi', 'Ranipet', 'Tenkasi', 'Tirupathur', 'Mayiladuthurai'
  ],
  'Andhra Pradesh': [
    'Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 
    'Prakasam', 'Nellore', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 
    'West Godavari', 'YSR Kadapa', 'Alluri Sitharama Raju', 'Anakapalli', 
    'Bapatla', 'Eluru', 'Kakinada', 'Konaseema', 'Nandyal', 'NTR', 'Palnadu', 
    'Parvathipuram Manyam', 'Sri Sathya Sai', 'Tirupati'
  ],
  'Telangana': [
    'Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 
    'Jayashankar Bhoopalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 
    'Khammam', 'Kumuram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 
    'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 
    'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 
    'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 
    'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'
  ],

  // Western States
  'Maharashtra': [
    'Mumbai City', 'Mumbai Suburban', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 
    'Solapur', 'Thane', 'Kolhapur', 'Sangli', 'Satara', 'Raigad', 'Osmanabad', 
    'Nanded', 'Latur', 'Jalgaon', 'Akola', 'Amravati', 'Yavatmal', 'Wardha', 
    'Chandrapur', 'Gadchiroli', 'Bhandara', 'Gondia', 'Buldhana', 'Washim', 
    'Hingoli', 'Parbhani', 'Jalna', 'Beed', 'Ratnagiri', 'Sindhudurg', 
    'Dhule', 'Nandurbar', 'Ahmednagar'
  ],
  'Gujarat': [
    'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 
    'Junagadh', 'Gandhinagar', 'Anand', 'Bharuch', 'Kheda', 'Panchmahal', 
    'Dahod', 'Narmada', 'Tapi', 'Navsari', 'Valsad', 'Dang', 'Amreli', 
    'Porbandar', 'Surendranagar', 'Kachchh', 'Patan', 'Mehsana', 'Sabarkantha', 
    'Banaskantha', 'Aravalli', 'Mahisagar', 'Botad', 'Morbi', 'Gir Somnath', 
    'Devbhoomi Dwarka'
  ],
  'Goa': [
    'North Goa', 'South Goa'
  ],

  // Northern States
  'Uttar Pradesh': [
    'Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 
    'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 
    'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 
    'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 
    'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 
    'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 
    'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 
    'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kheri', 'Kushinagar', 'Lalitpur', 
    'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 
    'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 
    'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 
    'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 
    'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'
  ],
  'Rajasthan': [
    'Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 
    'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 
    'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 
    'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 
    'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'
  ],
  'Punjab': [
    'Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 
    'Fazilka', 'Firozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 
    'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Nawanshahr', 
    'Pathankot', 'Patiala', 'Ropar', 'Sangrur', 'Tarn Taran', 'Malerkotla', 
    'Mohali'
  ],
  'Haryana': [
    'Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 
    'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 
    'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 
    'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'
  ],
  'Himachal Pradesh': [
    'Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 
    'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'
  ],
  'Uttarakhand': [
    'Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 
    'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 
    'Udham Singh Nagar', 'Uttarkashi'
  ],
  'Jammu and Kashmir': [
    'Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 
    'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 
    'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 
    'Srinagar', 'Udhampur'
  ],
  'Ladakh': [
    'Kargil', 'Leh'
  ],

  // Eastern States
  'West Bengal': [
    'Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 
    'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 
    'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 
    'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 
    'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'
  ],
  'Bihar': [
    'Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 
    'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 
    'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 
    'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 
    'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 
    'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 
    'Siwan', 'Supaul', 'Vaishali', 'West Champaran'
  ],
  'Jharkhand': [
    'Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 
    'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 
    'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 
    'Ramgarh', 'Ranchi', 'Sahebganj', 'Seraikela Kharsawan', 'Simdega', 
    'West Singhbhum'
  ],
  'Odisha': [
    'Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 
    'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 
    'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 
    'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 
    'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 
    'Sonepur', 'Sundargarh'
  ],

  // Central States
  'Madhya Pradesh': [
    'Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 
    'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 
    'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 
    'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 
    'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 
    'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 
    'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 
    'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 
    'Ujjain', 'Umaria', 'Vidisha'
  ],
  'Chhattisgarh': [
    'Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 
    'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Janjgir-Champa', 
    'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Korea', 
    'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 
    'Sukma', 'Surajpur', 'Surguja'
  ],

  // Northeastern States
  'Assam': [
    'Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 
    'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Goalpara', 
    'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 
    'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 
    'Morigaon', 'Nagaon', 'Nalbari', 'Dima Hasao', 'Sivasagar', 'Sonitpur', 
    'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'
  ],
  'Arunachal Pradesh': [
    'Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 
    'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 
    'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 
    'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 
    'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'
  ],
  'Manipur': [
    'Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 
    'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 
    'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'
  ],
  'Meghalaya': [
    'East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 
    'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 
    'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 
    'West Khasi Hills'
  ],
  'Mizoram': [
    'Aizawl', 'Champhai', 'Hnahthial', 'Kolasib', 'Khawzawl', 'Lawngtlai', 
    'Lunglei', 'Mamit', 'Saiha', 'Saitul', 'Serchhip'
  ],
  'Nagaland': [
    'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 
    'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'
  ],
  'Sikkim': [
    'East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'
  ],
  'Tripura': [
    'Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 
    'South Tripura', 'Unakoti', 'West Tripura'
  ],

  // Union Territories
  'Andaman and Nicobar Islands': [
    'Nicobar', 'North and Middle Andaman', 'South Andaman'
  ],
  'Chandigarh': [
    'Chandigarh'
  ],
  'Dadra and Nagar Haveli and Daman and Diu': [
    'Dadra and Nagar Haveli', 'Daman', 'Diu'
  ],
  'Delhi': [
    'Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 
    'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 
    'South East Delhi', 'South West Delhi', 'West Delhi'
  ],
  'Lakshadweep': [
    'Lakshadweep'
  ],
  'Puducherry': [
    'Karaikal', 'Mahe', 'Puducherry', 'Yanam'
  ]
};

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step) => {
    if (step === 1) {
      return formData.name && formData.phone && formData.aadhaar;
    }
    if (step === 2) {
      return formData.state && formData.district && formData.village && formData.pincode;
    }
    if (step === 3) {
      return formData.accountNumber && 
             formData.confirmAccountNumber && 
             formData.ifscCode && 
             formData.bankName && 
             formData.accountHolderName &&
             formData.accountNumber === formData.confirmAccountNumber;
    }
    return false;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Leaf Illustrations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Leaf className="w-32 h-32 text-green-600 transform rotate-12" />
        </div>
        <div className="absolute top-1/4 right-20">
          <Leaf className="w-24 h-24 text-green-500 transform -rotate-45" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Leaf className="w-28 h-28 text-emerald-600 transform rotate-45" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Leaf className="w-20 h-20 text-green-400 transform -rotate-12" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 text-green-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Ayurveda Transparency Platform
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Join our community of trusted farmers</p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              currentStep >= 1 ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 text-gray-400'
            }`}>
              1
            </div>
            <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
              currentStep >= 2 ? 'bg-green-600' : 'bg-gray-300'
            }`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              currentStep >= 2 ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 text-gray-400'
            }`}>
              2
            </div>
            <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
              currentStep >= 3 ? 'bg-green-600' : 'bg-gray-300'
            }`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              currentStep >= 3 ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 text-gray-400'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2 px-1">
            <span className="text-xs text-gray-600">Personal Info</span>
            <span className="text-xs text-gray-600">Location</span>
            <span className="text-xs text-gray-600">Bank Details</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <User className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
                    <p className="text-gray-600">Let's start with your basic details</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-200 bg-gray-50 text-gray-600 rounded-l-xl">
                        <Phone className="w-4 h-4 mr-1" />
                        +91
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.aadhaar}
                        onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                        placeholder="Enter 12-digit Aadhaar number"
                        maxLength="12"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Location Information</h2>
                    <p className="text-gray-600">Help us locate your farm</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <select
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg bg-white"
                      >
                        <option value="">Select State</option>
                        {states.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                      <select
                        value={formData.district}
                        onChange={(e) => handleInputChange('district', e.target.value)}
                        disabled={!formData.state}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg bg-white disabled:bg-gray-50"
                      >
                        <option value="">Select District</option>
                        {formData.state && districts[formData.state]?.map(district => (
                          <option key={district} value={district}>{district}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Village/City Name</label>
                    <input
                      type="text"
                      value={formData.village}
                      onChange={(e) => handleInputChange('village', e.target.value)}
                      placeholder="Enter your village or city name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="Enter 6-digit pincode"
                      maxLength="6"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Bank Account Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Building2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Bank Account Details</h2>
                    <p className="text-gray-600">Secure payment processing information</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                    <input
                      type="text"
                      value={formData.accountHolderName}
                      onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                      placeholder="Enter account holder's full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      placeholder="Enter your bank name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      placeholder="Enter your account number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Account Number</label>
                    <input
                      type="text"
                      value={formData.confirmAccountNumber}
                      onChange={(e) => handleInputChange('confirmAccountNumber', e.target.value)}
                      placeholder="Re-enter your account number"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg ${
                        formData.confirmAccountNumber && formData.accountNumber !== formData.confirmAccountNumber 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200'
                      }`}
                    />
                    {formData.confirmAccountNumber && formData.accountNumber !== formData.confirmAccountNumber && (
                      <p className="text-red-500 text-sm mt-1">Account numbers do not match</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                    <input
                      type="text"
                      value={formData.ifscCode}
                      onChange={(e) => handleInputChange('ifscCode', e.target.value.toUpperCase())}
                      placeholder="Enter IFSC code (e.g., SBIN0001234)"
                      maxLength="11"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg uppercase"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">
                          Secure Payment Processing
                        </h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>Your bank details are encrypted and used only for payment processing. We never store sensitive banking information.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep === 1 ? (
                  <div></div>
                ) : (
                  <button
                    onClick={handleBack}
                    className="flex items-center px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 font-medium"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    onClick={handleNext}
                    disabled={!validateStep(currentStep)}
                    className={`flex items-center px-8 py-3 rounded-xl transition-all duration-200 font-medium text-lg ${
                      validateStep(currentStep)
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/farmerPanel/farmerStage')}
                    disabled={!validateStep(3)}
                    className={`flex items-center px-8 py-3 rounded-xl transition-all duration-200 font-medium text-lg ${
                      validateStep(3)
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Submit & Continue
                    <Leaf className="w-5 h-5 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* QR Button */}
          <div className="text-center mt-4">
            <button
              onClick={() => navigate('/342er3')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-200 font-medium text-lg"
            >
              QR
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              By registering, you agree to promote transparency in Ayurveda farming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerSignupForm;