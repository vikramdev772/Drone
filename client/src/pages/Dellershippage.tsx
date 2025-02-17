import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, TrendingUp, Users, Leaf, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const Dealershippage = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Exclusive Partnership",
      description: "First Indian company to seek DGCA certification with fully in-house design"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: "High Revenue Potential",
      description: "Earn up to ₹1 crore per year with proven business model"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Superior Product",
      description: "Enhanced durability and efficiency compared to imported alternatives"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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

      {/* Enhanced Hero Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Become an Aries Solutions Dealer
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Join India's leading agricultural drone technology provider and be part of the future of farming
            </p>
            <motion.button 
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl
                       shadow-lg shadow-green-500/20 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Dealership
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Why Partner With <span className="text-green-400">Us</span>?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group p-8 rounded-2xl bg-black/40 backdrop-blur-xl 
                         border border-white/10 hover:border-green-500/30 
                         transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 
                           rounded-xl mb-6 flex items-center justify-center
                           group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Apply for <span className="text-green-400">Dealership</span>
            </motion.h2>
            
            <motion.div 
              className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                       hover:border-green-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    <h3 className="text-2xl font-semibold mb-4">Application Submitted!</h3>
                    <p className="text-gray-300">Thank you for your interest. We'll contact you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    {['name', 'email', 'phone', 'location'].map((field, index) => (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          focusedField === field ? 'text-green-400' : 'text-gray-300'
                        }`}>
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input 
                          type={field === 'email' ? 'email' : 'text'}
                          className="w-full px-6 py-4 rounded-xl bg-black/40 backdrop-blur-xl 
                                   border border-white/10 text-white placeholder-gray-400 
                                   focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 
                                   transition-all duration-300"
                          placeholder={`Enter your ${field}`}
                          onFocus={() => setFocusedField(field)}
                          onBlur={() => setFocusedField(null)}
                        />
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
                        "Submit Application"
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dealershippage;