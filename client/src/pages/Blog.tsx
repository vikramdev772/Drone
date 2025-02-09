import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Clock, ChevronRight, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Latest Insights & Updates
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay informed about the latest developments in agricultural drone technology and sustainable farming practices
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400 flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                  <button className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm">
                    Read More 
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates in agricultural drone technology
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;