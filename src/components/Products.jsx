'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/redux/api/auth/authApi";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} height={200} width={200} />
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

const CategoryFilter = ({ selectedCategory, onSelectCategory, categories }) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {categories.map((category, index) => (
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
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const { data: productsData, error, isLoading } = useGetProductsQuery();
  const { data: categoriesData, isLoading: isLoadingCategories } = useGetCategoriesQuery();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (productsData && categoriesData) {
      const categories = Array.isArray(categoriesData?.data) ? categoriesData.data : [];
      const products = Array.isArray(productsData?.data) ? productsData.data : [];

      const filteredProducts =
        selectedCategory === "All"
          ? products
          : products.filter((product) => {
              const category = categories.find((cat) => cat.categoryName === selectedCategory);
              return category && product.categoryId === category.id;
            });

      const sliceCount = isMobile ? 4 : 8;
      setDisplayedProducts(filteredProducts.slice(0, sliceCount));
    }
  }, [productsData, categoriesData, selectedCategory, isMobile]);

  if (isLoading || isLoadingCategories) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  const categories = Array.isArray(categoriesData?.data) ? categoriesData.data : [];
  const categoryNames = ["All", ...categories.map((category) => category.categoryName)];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Fresh Products</h2>
          <p className="text-gray-600">
            We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={categoryNames}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Array.isArray(displayedProducts) && displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.productName}
                price={`${product.price}/kg`}
                image={`${product.images[0]}`}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/shop">
            <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all">
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;