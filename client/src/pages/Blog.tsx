import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Tag, Clock, ChevronRight, Search, Mail } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchFocused, setSearchFocused] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Drone Technology' },
    { id: 'agriculture', name: 'Smart Farming' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'innovation', name: 'Innovation' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Precision Agriculture with AGRONE-X",
      excerpt: "Discover how our advanced drone technology is revolutionizing farming practices across India...",
      category: "technology",
      author: "Santhosh Kumar",
      date: "Feb 8, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Sustainable Farming Practices: The Drone Revolution",
      excerpt: "Learn how modern drone technology is making agriculture more sustainable and environmentally friendly...",
      category: "sustainability",
      author: "Naveen Kumar P",
      date: "Feb 7, 2024",
      readTime: "4 min read",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "AGRONE-X PRO: A New Era in Agricultural Drones",
      excerpt: "Introducing our latest innovation in agricultural drone technology with extended flight time and advanced features...",
      category: "innovation",
      author: "G Sreeshman",
      date: "Feb 6, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/800/400"
    },
    {
      id: 4,
      title: "Maximizing Crop Yields with Precision Spraying",
      excerpt: "How precise drone spraying technology is helping farmers optimize their crop yields and reduce waste...",
      category: "agriculture",
      author: "Tulsi Ram Y",
      date: "Feb 5, 2024",
      readTime: "4 min read",
      image: "/api/placeholder/800/400"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
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
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest Insights & Updates
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed about the latest developments in agricultural drone technology 
            and sustainable farming practices
          </motion.p>
        </div>

        {/* Enhanced Search and Filter */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Enhanced Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                searchFocused ? 'text-green-400' : 'text-gray-400'
              }`} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 backdrop-blur-xl 
                         border border-white/10 text-white placeholder-gray-400 
                         focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 
                         transition-all duration-300"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Enhanced Categories */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                      : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-white/10 hover:border-green-500/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Blog Posts Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-black/40 rounded-2xl overflow-hidden backdrop-blur-xl 
                         border border-white/10 hover:border-green-500/30 
                         transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-green-400" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-6 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                    <motion.button 
                      className="text-green-400 hover:text-green-300 flex items-center gap-2 text-sm
                               group-hover:gap-3 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Read More 
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Newsletter Subscription */}
        <motion.div 
          className="mt-20 p-10 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 
                     hover:border-green-500/30 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 
                         rounded-full flex items-center justify-center"
            >
              <Mail className="w-8 h-8 text-green-400" />
            </motion.div>
            <h3 className="text-3xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to our newsletter for the latest updates in agricultural drone technology
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-black/40 backdrop-blur-xl 
                         border border-white/10 text-white placeholder-gray-400 
                         focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 
                         transition-all duration-300"
              />
              <motion.button 
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl 
                         transition-colors shadow-lg shadow-green-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;