import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/Products"; // Ensure this path is correct

interface Product {
  name: string;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
