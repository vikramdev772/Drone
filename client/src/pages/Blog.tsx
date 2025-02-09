import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <div className="grid gap-8">
        {[1, 2, 3].map((post) => (
          <article key={post} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Blog Post {post}</h2>
            <p className="text-gray-700">Blog post content goes here.</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;