import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, Users, Shield, Star, Heart, Globe, Award } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Innovation",
      description: "Creating groundbreaking solutions that push the boundaries of technology"
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: "Sustainability",
      description: "Developing eco-friendly solutions that contribute to a greener planet"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Customer Centricity",
      description: "Putting customers at the heart of everything we do"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Quality & Reliability",
      description: "Delivering products built to last with highest standards"
    },
    {
      icon: <Star className="w-6 h-6 text-red-400" />,
      title: "Empowerment",
      description: "Making advanced technology accessible and beneficial for all"
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: "Integrity",
      description: "Operating with honesty and transparency in all aspects"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: "Collaboration",
      description: "Valuing teamwork and partnerships for greater innovation"
    },
    {
      icon: <Award className="w-6 h-6 text-orange-400" />,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our work"
    }
  ];

  const teamMembers = [
    { name: "Tulsi Ram Y", role: "Director, Co-founder" },
    { name: "B Santhosh Kumar", role: "Co-founder, CTO" },
    { name: "Naveen Kumar P", role: "CMO" },
    { name: "V Vishwa Teja", role: "Manager-Production and Services" },
    { name: "Vamsi Krishna K", role: "Manager-Operations" },
    { name: "G Sreeshman", role: "Chief Drone Designer" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">About Aries Solutions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              India's first company to offer cutting-edge drones, robots, and energy systems, 
              specializing in designing simple, smart, safe, and highly efficient products for 
              industrial and agricultural sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <motion.div 
              className="p-8 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                We are committed to pioneering innovative technological solutions that address 
                the challenges of modern life. By leveraging our engineering expertise, we strive 
                to empower industries, enhance productivity, and promote sustainability. Our mission 
                is to create a safer, smarter, and more sustainable world, providing a solid 
                foundation for a future where technology drives progress and improves lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Founded in 2018</h3>
                <p className="text-gray-300">
                  Established by a team of passionate Aeronautical and Electronics & Communication 
                  Engineers with a vision to integrate modern technology into sustainable farming 
                  and revolutionize the agricultural sector through advanced drone solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;