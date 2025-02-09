import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Product {id}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg text-gray-700">Detailed information about product {id}.</p>
      </div>
    </div>
  );
};

export default ProductDetail;