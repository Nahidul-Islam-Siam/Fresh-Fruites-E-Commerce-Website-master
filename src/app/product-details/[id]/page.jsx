"use client";

import React, { useState } from "react";
import { FaHeart, FaStar, FaStarHalf, FaShoppingCart } from "react-icons/fa";
import { useGetCategoriesQuery, useGetProductByIdQuery } from "@/redux/api/auth/authApi";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: category, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();
  console.log(category?.data[0]?.id);
  // id is saved in the category.datas.index.id
  //and  categoryName is save category?.data[0]?.categoryName
  // to do is filter product.categoryId with categor to get category name from use getcategory
  
  const { data: products, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading product details...</p>;
  if (error) return <p>Error loading product details.</p>;

  const product = products?.data;
  if (!product) return <p>Product not found.</p>;


  const categoryName = category?.data?.find(cat => cat.id === product.categoryId)?.categoryName || "Unknown";

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
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen py-8 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
    

    
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-lg">
            {product.images?.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={product.productName}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            ) : (
              <p>No Image Available</p>
            )}
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
              Category ID: {product.categoryId}
            </span>
          </p>
          <p className="mb-3">
  <span className="text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md">
    {categoryLoading ? "Loading category..." : categoryError ? "Category not found" : categoryName}
  </span>
</p>

          <h1 className="text-5xl font-bold mb-4 text-[#212337]">{product.productName}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-[#FFB848]">{renderStars(product.rating || 5)}</div>
            <span className="text-[#212337] text-xs">(Stock: {product.stock})</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-semibold text-[#FF6A1A]">
              ${product.price}
            </span>
            <p className="text-gray-600 ml-2">
              From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-2">
              <button onClick={() => handleQuantityChange("decrement")} className="px-3 py-1 border rounded-md">
                -
              </button>
              <span className="px-4 py-1 border rounded-md">{quantity}</span>
              <button onClick={() => handleQuantityChange("increment")} className="px-3 py-1 border rounded-md">
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
