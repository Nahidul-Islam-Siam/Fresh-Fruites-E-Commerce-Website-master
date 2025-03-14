"use client";

import React, { useState } from "react";
import { FaHeart, FaStar, FaStarHalf, FaShoppingCart } from "react-icons/fa";
import { useGetCategoriesQuery, useGetProductByIdQuery } from "@/redux/api/auth/authApi";
import { useParams } from "next/navigation";
import Image from "next/image";
import { addToCart, clearError } from "@/redux/feature/productSlices/cartSlices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartError = useSelector((state) => state.cart.error);
  const { data: category, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();
  const { data: products, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading product details...</p>;
  if (error) return <p className="text-red-500">Error loading product details.</p>;

  const product = products?.data;
  if (!product) return <p className="text-gray-500">Product not found.</p>;

  const categoryName = category?.data?.find(cat => cat.id === product.categoryId)?.categoryName || "Unknown";

  const relatedProducts = category?.data
    ?.filter(cat => cat.categoryName === categoryName)
    ?.flatMap(cat => cat.products || [])
    ?.filter(p => p.id !== product.id) || [];

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
    setQuantity((prev) => (action === "increment" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.productName,
      price: product.price,
      image: product.images?.[0] || "",
      quantity,
    };

    dispatch(addToCart(cartItem));

    if (cartError) {
      toast.error(cartError, { position: "top-right", autoClose: 3000 });
      dispatch(clearError());
    } else {
      toast.success("Added to cart!", { position: "top-right", autoClose: 2000 });
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

        <div className="lg:w-1/2 w-full">
          <p className="mb-3">
            <span className="text-sm text-tr uppercase md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md">
              {categoryLoading ? "Loading category..." : categoryError ? "Category not found" : categoryName}
            </span>
          </p>

          <h1 className="text-5xl font-bold mb-4 text-[#212337]">{product.productName}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-[#FFB848]">{renderStars(product.rating || 5)}</div>
            <span className="text-[#212337] text-xs">(Stock: {product.stock})</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-semibold text-[#FF6A1A]">${product.price}</span>
            <p className="text-gray-600 ml-2">
              From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-2">
              <button onClick={() => handleQuantityChange("decrement")} className="px-3 py-1 border rounded-md">-</button>
              <span className="px-4 py-1 border rounded-md">{quantity}</span>
              <button onClick={() => handleQuantityChange("increment")} className="px-3 py-1 border rounded-md">+</button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#FF6A1A] text-white py-3 rounded-md hover:bg-orange-600 flex items-center justify-center gap-2">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold">Related Products</h2>
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="border p-4 rounded-md">
                <Image src={item.images?.[0] || "/placeholder.jpg"} alt={item.productName} width={200} height={200} />
                <h3 className="text-lg font-semibold mt-2">{item.productName}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;