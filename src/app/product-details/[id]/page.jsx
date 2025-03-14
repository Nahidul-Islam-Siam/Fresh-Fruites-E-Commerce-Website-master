'use client';

import React, { useState } from "react";
import { FaHeart, FaStar, FaStarHalf, FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Coconut",
    price: 6.3,
    unit: "/kg",
    rating: 5.0,
    reviews: 1,
    description: "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
    image: "/coconut.png",
    details: "Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and carefully prepared, offering you the freshest product possible. Rich in healthy fats, electrolytes, and essential nutrients, coconuts provide both hydration and nourishment."
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
    }
    return stars;
  };

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity(prev => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen py-8 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Section - Product Image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-[#749B3F] text-white py-3 rounded-md flex items-center justify-center gap-2">
              <FaShoppingCart /> Description
            </button>
            <button className="flex-1 bg-[#F4F6F6] text-[#4A4A52] py-3 rounded-md flex items-center justify-center gap-2">
              <FaShoppingCart /> Reviews (1)
            </button>
          </div>

          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="lg:w-1/2 w-full">
          <p className="mb-3">
            <span className="text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md">
              Fruits
            </span>
          </p>

          <h1 className="text-5xl font-bold mb-4 text-[#212337]">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-[#FFB848]">{renderStars(product.rating)}</div>
            <span className="text-[#212337] text-xs">({product.reviews} reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-semibold text-[#FF6A1A]">${product.price}{product.unit}</span>
            <p className="text-gray-600 ml-2">
              From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-3 py-1 border rounded-md"
              >
                -
              </button>
              <span className="px-4 py-1 border rounded-md">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-[#FF6A1A] text-white py-3 rounded-md hover:bg-orange-600 flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="flex-1 bg-[#F4F6F6] text-[#4A4A52] py-3 rounded-md flex items-center justify-center gap-2">
              <FaHeart /> Save as favorite
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
