import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Home, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

  interface FormData {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    propertyType: string;
    rooms: string[];
    budget: string;
    timeline: string;
    consultationType: string;
    preferredDate: string;
    preferredTime: string;
    address: string;
    additionalNotes: string;
  }

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1: Personal Info
    name: '',
    email: '',
    phone: '',
    
    // Step 2: Project Details
    projectType: '',
    propertyType: '',
    rooms: [],
    budget: '',
    timeline: '',
    
    // Step 3: Consultation Details
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    additionalNotes: ''
  });


  const handleRoomToggle = (room) => {
    setFormData(prev => ({
      ...prev,
      rooms: prev.rooms.includes(room)
        ? prev.rooms.filter(r => r !== room)
        : [...prev.rooms, room]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailContent = `
New Consultation Booking:

PERSONAL INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

PROJECT DETAILS:
Project Type: ${formData.projectType}
Property Type: ${formData.propertyType}
Rooms to Design: ${formData.rooms.join(', ')}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

CONSULTATION DETAILS:
Consultation Type: ${formData.consultationType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
${formData.consultationType === 'site-visit' ? `Address: ${formData.address}` : ''}

ADDITIONAL NOTES:
${formData.additionalNotes}

Please contact the client to confirm the consultation appointment.
    `;

    // Create mailto link
    const mailtoLink = `mailto:SriNilayam.Interiors@gmail.com?subject=New Consultation Booking - ${formData.name}&body=${encodeURIComponent(emailContent)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    nextStep(); // Go to confirmation step
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Project Details', icon: Home },
    { number: 3, title: 'Schedule', icon: Calendar },
    { number: 4, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Free <span className="text-orange-500">Consultation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life. Our consultation is completely free with no obligations.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                  currentStep >= step.number
                    ? 'bg-orange-500 border-orange-500 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <step.icon size={20} />
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-orange-500' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </div>
                  <div className={`text-xs ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-orange-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 7981841442"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Interior</option>
                      <option value="commercial">Commercial Interior</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="renovation">Home Renovation</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="furnishings">Furnishings</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="office">Office</option>
                      <option value="retail">Retail Space</option>
                      <option value="restaurant">Restaurant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Rooms to Design</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Bathroom', 'Study Room'].map((room) => (
                        <button
                          key={room}
                          type="button"
                          onClick={() => handleRoomToggle(room)}
                          className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                            formData.rooms.includes(room)
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-orange-300'
                          }`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        <option value="under-5-lakh">Under ₹5 Lakh</option>
                        <option value="5-10-lakh">₹5 - 10 Lakh</option>
                        <option value="10-20-lakh">₹10 - 20 Lakh</option>
                        <option value="20-50-lakh">₹20 - 50 Lakh</option>
                        <option value="above-50-lakh">Above ₹50 Lakh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="planning">Just planning</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Consultation</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Type *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, consultationType: 'virtual' }))}
                        className={`p-4 rounded-lg border-2 text-left transition-colors ${
                          formData.consultationType === 'virtual'
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-300 bg-white hover:border-orange-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900">Virtual Consultation</div>
                        <div className="text-sm text-gray-600">Video call from comfort of your home</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, consultationType: 'site-visit' }))}
                        className={`p-4 rounded-lg border-2 text-left transition-colors ${
                          formData.consultationType === 'site-visit'
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-300 bg-white hover:border-orange-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900">Site Visit</div>
                        <div className="text-sm text-gray-600">Our designer visits your location</div>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {formData.consultationType === 'site-visit' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                        placeholder="Enter complete address with landmarks"
                        required={formData.consultationType === 'site-visit'}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="Any specific requirements, style preferences, or questions..."
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Booked!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for booking your consultation with SriNilayam Interiors. 
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
                  <h3 className="font-semibold text-gray-900 mb-4">Consultation Details:</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Name:</span> {formData.name}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                    <p><span className="font-medium">Project Type:</span> {formData.projectType}</p>
                    <p><span className="font-medium">Consultation Type:</span> {formData.consultationType}</p>
                    <p><span className="font-medium">Preferred Date:</span> {formData.preferredDate}</p>
                    <p><span className="font-medium">Preferred Time:</span> {formData.preferredTime}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Your consultation details have been sent to our team. We will contact you at +91 7981841442 to confirm your appointment.
                  </p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    currentStep === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  <ArrowLeft size={20} />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={currentStep === 3 ? handleSubmit : nextStep}
                  className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
                >
                  <span>{currentStep === 3 ? 'Book Consultation' : 'Next'}</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;