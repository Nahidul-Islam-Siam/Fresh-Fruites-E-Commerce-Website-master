'use client';
import React, { useState } from "react";
import Image from "next/image";
import { useGetCategoriesQuery } from "@/redux/api/auth/authApi";

const ProductCard = ({ name, price, image }) => {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden group transition-all duration-300 hover:shadow-lg">
        <div className="relative w-full h-48">
          <Image src={`/assets/${image}`} alt={name} height={200} width={200} />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-[#212337] font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{price}</p>
          <button className="w-full py-2 bg-orange-500 text-white rounded transition-all transform group-hover:scale-105 group-hover:bg-orange-600 duration-300">
            Add to cart
          </button>
        </div>
      </div>
    );
};

  

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;
  if (!data || !Array.isArray(data.data)) return <div>No categories found</div>;

  const categoryList = ["All", ...data.data.map(category => category.categoryName)];

  return (
    <div className="flex justify-center gap-2 mb-6">
      {categoryList.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-md mx-1 transition-all 
            ${selectedCategory === category ? "bg-green-500 text-white" : " text-[#A6A6A6] border-2 border-[#A6A6A6] hover:bg-gray-300"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { name: "Mushroom", price: "2.3/kg", image: "4.svg", category: "Fruits" },
    { name: "Mustard", price: "1.3/kg",image: "4.svg", category: "Vegetables" },
    { name: "Orange", price: "4.2/kg", image: "4.svg", category: "Fruits" },
    { name: "Pomegranate", price: "11.2/kg", image: "4.svg", category: "Fruits" },
    { name: "Kiwi", price: "5.3/kg", image: "4.svg", category: "Fruits" },
    { name: "Coconut", price: "6.3/kg", image: "4.svg", category: "Fruits" },
    { name: "Guava", price: "2.2/kg", image: "4.svg", category: "Fruits" },
    { name: "Eggplant", price: "1.2/kg", image: "4.svg",category: "Vegetables" },
  ];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-8">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Fresh Products</h2>
          <p className="text-gray-600">We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
        </div>

        {/* Category Filter */}
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all">
            See All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
