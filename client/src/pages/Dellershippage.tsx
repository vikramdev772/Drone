import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, TrendingUp, Users, Leaf, Globe } from 'lucide-react';
import { Button } from "../ui/button";

const Dealershippage = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Exclusive Partnership",
      description: "First Indian company to seek DGCA certification with fully in-house design"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "High Revenue Potential",
      description: "Earn up to ₹1 crore per year with proven business model"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Superior Product",
      description: "Enhanced durability and efficiency compared to imported alternatives"
    }
  ];

  const dealerBenefits = [
    "Full dealer support and training",
    "Marketing materials provided",
    "Technical expertise development",
    "Local service capabilities",
    "Exclusive territory rights",
    "Growing market opportunity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Become an Aries Solutions Dealer
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join India's leading agricultural drone technology provider and be part of the future of farming
            </p>
            <Button 
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white"
            >
              Apply for Dealership
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gray-800 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Apply for Dealership</h2>
            <div className="p-8 rounded-xl bg-gray-800 border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
                  />
                </div>
                <Button 
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="text-gray-300">
            <p className="mb-2">ARIES SOLUTIONS PRIVATE LIMITED</p>
            <p className="mb-2">5-9-262/2/17/1, 2nd floor, Street No-1,</p>
            <p className="mb-2">Rajiv Gandhi Nagar, I.E Kukatpally,</p>
            <p className="mb-2">Hyderabad, Telangana, India- 500072</p>
            <p className="mt-4">Phone: +918712226962</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dealershippage;