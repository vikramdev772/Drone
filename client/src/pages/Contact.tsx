import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-green-400" />,
      title: "Address",
      details: [
        "ARIES SOLUTIONS PRIVATE LIMITED",
        "5-9-262/2/17/1, 2nd floor, Street No-1",
        "Rajiv Gandhi Nagar, I.E Kukatpally",
        "Hyderabad, Telangana, India- 500072"
      ]
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: "Phone",
      details: ["+918712226962"]
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM"]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about our products or services? We're here to help and answer any questions you might have.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                       hover:border-green-500/30 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-semibold mb-8">Send us a Message</h2>
                  {['name', 'email', 'subject', 'message'].map((field) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ['name', 'email', 'subject', 'message'].indexOf(field) * 0.1 }}
                    >
                      <label 
                        htmlFor={field}
                        className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          focusedField === field ? 'text-green-400' : 'text-gray-300'
                        }`}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      {field === 'message' ? (
                        <textarea
                          id={field}
                          rows={4}
                          className="w-full px-6 py-4 rounded-xl bg-black/40 backdrop-blur-xl 
                                   border border-white/10 text-white placeholder-gray-400 
                                   focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 
                                   transition-all duration-300"
                          placeholder={`Your ${field}...`}
                          value={formState[field]}
                          onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                          onFocus={() => setFocusedField(field)}
                          onBlur={() => setFocusedField(null)}
                        />
                      ) : (
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          id={field}
                          className="w-full px-6 py-4 rounded-xl bg-black/40 backdrop-blur-xl 
                                   border border-white/10 text-white placeholder-gray-400 
                                   focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 
                                   transition-all duration-300"
                          placeholder={`Your ${field}...`}
                          value={formState[field]}
                          onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                          onFocus={() => setFocusedField(field)}
                          onBlur={() => setFocusedField(null)}
                        />
                      )}
                    </motion.div>
                  ))}

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl 
                             transition-colors shadow-lg shadow-green-500/20 flex items-center justify-center
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                         hover:border-green-500/30 transition-all duration-300
                         hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-green-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300"
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold group-hover:text-green-400 transition-colors">
                    {info.title}
                  </h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-lg">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Enhanced Map Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                        hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-full h-64 rounded-xl bg-black/40 flex items-center justify-center
                            border border-white/10 overflow-hidden">
                <span className="text-gray-400 text-lg">Map Integration</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;