import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, Users, Shield, Star, Heart, Globe, Award } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Innovation",
      description: "Creating groundbreaking solutions that push the boundaries of technology"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      title: "Sustainability",
      description: "Developing eco-friendly solutions that contribute to a greener planet"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Customer Centricity",
      description: "Putting customers at the heart of everything we do"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Quality & Reliability",
      description: "Delivering products built to last with highest standards"
    },
    {
      icon: <Star className="w-8 h-8 text-red-400" />,
      title: "Empowerment",
      description: "Making advanced technology accessible and beneficial for all"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Integrity",
      description: "Operating with honesty and transparency in all aspects"
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: "Collaboration",
      description: "Valuing teamwork and partnerships for greater innovation"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
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
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"
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
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              About Aries Solutions
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              India's first company to offer cutting-edge drones, robots, and energy systems, 
              specializing in designing simple, smart, safe, and highly efficient products for 
              industrial and agricultural sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission Statement */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-blue-500/5"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-green-400">Mission</span>
            </motion.h2>
            <motion.div 
              className="p-10 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-green-500/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-300 leading-relaxed">
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

      {/* Enhanced Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core <span className="text-green-400">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                           hover:border-green-500/30 transition-all duration-300
                           hover:shadow-lg hover:shadow-green-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced History Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-blue-500/5"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-green-400">Journey</span>
            </motion.h2>
            <motion.div 
              className="p-10 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                         hover:border-green-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Founded in 2018</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Established by a team of passionate Aeronautical and Electronics & Communication 
                Engineers with a vision to integrate modern technology into sustainable farming 
                and revolutionize the agricultural sector through advanced drone solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="text-green-400">Team</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                           hover:border-green-500/30 transition-all duration-300
                           hover:shadow-lg hover:shadow-green-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-blue-500/20 
                               rounded-full mb-6 flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;