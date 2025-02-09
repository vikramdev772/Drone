import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from "../ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-green-400" />,
      title: "Address",
      details: [
        "ARIES SOLUTIONS PRIVATE LIMITED",
        "5-9-262/2/17/1, 2nd floor, Street No-1",
        "Rajiv Gandhi Nagar, I.E Kukatpally",
        "Hyderabad, Telangana, India- 500072"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      details: ["+918712226962"]
    },
    {
      icon: <Clock className="w-6 h-6 text-green-400" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help and answer any questions you might have.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit"
                variant="gradient"
                className="w-full py-3"
                icon={<Send className="w-4 h-4 mr-2" />}
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  {info.icon}
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Location */}
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 h-64">
              <div className="w-full h-full rounded-lg bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Map Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;