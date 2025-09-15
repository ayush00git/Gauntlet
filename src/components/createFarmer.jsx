import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Leaf, MapPin, Smartphone, Mail, Home, IdCard, Calendar, ArrowLeft } from 'lucide-react';

const CreateFarmer = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    farmAddress: '',
    district: '',
    state: '',
    pincode: '',
    aadhaarNumber: '',
    dateOfBirth: '',
    farmSize: '',
    cropTypes: '',
    experience: '',
    agreeToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.farmAddress.trim()) {
      newErrors.farmAddress = 'Farm address is required';
    }
    
    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    
    if (!formData.aadhaarNumber.trim()) {
      newErrors.aadhaarNumber = 'Aadhaar number is required';
    } else if (!/^\d{12}$/.test(formData.aadhaarNumber.replace(/\s/g, ''))) {
      newErrors.aadhaarNumber = 'Please enter a valid 12-digit Aadhaar number';
    }
    
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.farmSize.trim()) {
      newErrors.farmSize = 'Farm size is required';
    }
    
    if (!formData.cropTypes.trim()) {
      newErrors.cropTypes = 'Crop types are required';
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    }
    
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // In real implementation, you would call your registration API here
      console.log('Registration data:', formData);
      alert('Registration successful! Please login with your credentials.');
      
      // Redirect to login
      onBackToLogin();
      
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatAadhaar = (value) => {
    // Remove all spaces and limit to 12 digits
    const cleaned = value.replace(/\s/g, '').slice(0, 12);
    // Add spaces every 4 digits
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleAadhaarChange = (e) => {
    const formatted = formatAadhaar(e.target.value);
    handleInputChange({
      target: {
        name: 'aadhaarNumber',
        value: formatted
      }
    });
  };

  const renderStep1 = () => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
      
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
        </div>
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
          Mobile Number *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Smartphone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.phoneNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter your 10-digit mobile number"
            maxLength="10"
          />
        </div>
        {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
        </div>
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Create a password (min 6 characters)"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Confirm your password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
        {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Address & Identity</h3>
      
      {/* Farm Address */}
      <div>
        <label htmlFor="farmAddress" className="block text-sm font-medium text-gray-700 mb-2">
          Farm Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Home className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="farmAddress"
            name="farmAddress"
            value={formData.farmAddress}
            onChange={handleInputChange}
            rows="3"
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none ${
              errors.farmAddress ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter your complete farm address"
          />
        </div>
        {errors.farmAddress && <p className="mt-1 text-sm text-red-600">{errors.farmAddress}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* District */}
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
            District *
          </label>
          <input
            id="district"
            name="district"
            type="text"
            value={formData.district}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.district ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="District"
          />
          {errors.district && <p className="mt-1 text-sm text-red-600">{errors.district}</p>}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            State *
          </label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.state ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="State"
          />
          {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
        </div>
      </div>

      {/* Pincode */}
      <div>
        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
          Pincode *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="pincode"
            name="pincode"
            type="text"
            value={formData.pincode}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.pincode ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter 6-digit pincode"
            maxLength="6"
          />
        </div>
        {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
      </div>

      {/* Aadhaar Number */}
      <div>
        <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-2">
          Aadhaar Number *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IdCard className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="aadhaarNumber"
            name="aadhaarNumber"
            type="text"
            value={formData.aadhaarNumber}
            onChange={handleAadhaarChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.aadhaarNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="XXXX XXXX XXXX"
            maxLength="14"
          />
        </div>
        {errors.aadhaarNumber && <p className="mt-1 text-sm text-red-600">{errors.aadhaarNumber}</p>}
      </div>

      {/* Date of Birth */}
      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.dateOfBirth ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
          />
        </div>
        {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Information</h3>
      
      {/* Farm Size */}
      <div>
        <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-2">
          Farm Size (in acres) *
        </label>
        <input
          id="farmSize"
          name="farmSize"
          type="number"
          step="0.1"
          min="0.1"
          value={formData.farmSize}
          onChange={handleInputChange}
          className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
            errors.farmSize ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="e.g., 2.5"
        />
        {errors.farmSize && <p className="mt-1 text-sm text-red-600">{errors.farmSize}</p>}
      </div>

      {/* Crop Types */}
      <div>
        <label htmlFor="cropTypes" className="block text-sm font-medium text-gray-700 mb-2">
          Types of Crops/Herbs Grown *
        </label>
        <textarea
          id="cropTypes"
          name="cropTypes"
          value={formData.cropTypes}
          onChange={handleInputChange}
          rows="3"
          className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none ${
            errors.cropTypes ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="e.g., Turmeric, Ashwagandha, Tulsi, Rice, Wheat..."
        />
        {errors.cropTypes && <p className="mt-1 text-sm text-red-600">{errors.cropTypes}</p>}
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
          Farming Experience *
        </label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
            errors.experience ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
        >
          <option value="">Select your experience</option>
          <option value="0-2">0-2 years (Beginner)</option>
          <option value="3-5">3-5 years</option>
          <option value="6-10">6-10 years</option>
          <option value="11-20">11-20 years</option>
          <option value="20+">20+ years (Expert)</option>
        </select>
        {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
        />
        <label htmlFor="agreeToTerms" className="ml-3 block text-sm text-gray-700">
          I agree to the <span className="text-green-600 hover:text-green-500 cursor-pointer">Terms and Conditions</span> and <span className="text-green-600 hover:text-green-500 cursor-pointer">Privacy Policy</span>. I consent to share my farm data for research and conservation purposes.
        </label>
      </div>
      {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>}
    </>
  );

  return (
    <div className="min-h-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Farmer Account
          </h2>
          <p className="text-gray-600">
            Join India's medicinal herbs conservation network
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-4 border border-green-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {currentStep} of 3</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <div className="space-y-6">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevious}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
            ) : (
              <button
                type="button"
                onClick={onBackToLogin}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Your data is secure and will be used only for medicinal herbs research and conservation
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateFarmer;