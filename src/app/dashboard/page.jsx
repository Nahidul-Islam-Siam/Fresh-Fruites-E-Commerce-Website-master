'use client';

import { useState } from "react";
import { FaUser, FaStore, FaDollarSign, FaPen, FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDeleteCategoryMutation, useDeleteProductMutation, useGetAllUserQuery, useGetCategoriesQuery, useGetProductsQuery } from "@/redux/api/auth/authApi";

const Dashboard = () => {
    const [selectedTable, setSelectedTable] = useState("categories"); 
    const [deleteProduct, { isLoading: isDeletingProduct, error: deleteProductError }] = useDeleteProductMutation();
    const [deleteCategory, { isLoading: isDeletingUser, error: deleteUserError }] = useDeleteCategoryMutation(); 
    const { data: usersData, error: userError, isLoading: userLoading } = useGetAllUserQuery();
    const { data: categoryData, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();
    const { data: productData, error: productError, isLoading: productLoading } = useGetProductsQuery();
    
    const users = usersData?.data?.data || [];
    const categories = categoryData?.data || [];
    const products = productData?.data || [];
    
    const handleChangeTable = (event) => {
      setSelectedTable(event.target.value);
    };
    
    const handleDelete = async (id, type) => {
      try {
        if (type === "category") {
          await deleteCategory(id).unwrap()
          console.log(`Deleting category with ID: ${id}`);
    
        } else if (type === "product") {
          console.log(`Deleting product with ID: ${id}`);
          await deleteProduct(id).unwrap();
          console.log("Product deleted successfully");
        } else if (type === "user") {
          console.log(`Deleting user with ID: ${id}`);
         
        }
      } catch (error) {
        console.error(`Failed to delete ${type} with ID: ${id}`, error);
      }
    };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 bg-green-50 min-h-screen"
    >
      <h1 className="text-3xl font-bold mb-6 text-green-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div className="p-6 bg-green-600 shadow-lg rounded-lg flex items-center gap-6">
          <FaUser className="text-white text-3xl" />
          <div>
            <p className="text-gray-300">Total Users</p>
            {userLoading ? <p>Loading...</p> : <p className="text-2xl font-semibold text-white">{users.length}</p>}
            {userError && <p className="text-red-500">Error loading users</p>}
          </div>
        </motion.div>

        <motion.div className="p-6 bg-green-700 shadow-lg rounded-lg flex items-center gap-6">
          <FaStore className="text-white text-3xl" />
          <div>
            <p className="text-gray-300">Total Categories</p>
            {categoryLoading ? <p>Loading...</p> : <p className="text-2xl font-semibold text-white">{categories.length}</p>}
            {categoryError && <p className="text-red-500">Error loading categories</p>}
          </div>
        </motion.div>

        <motion.div className="p-6 bg-green-800 shadow-lg rounded-lg flex items-center gap-6">
          <FaDollarSign className="text-white text-3xl" />
          <div>
            <p className="text-gray-300">Total Products</p>
            {productLoading ? <p>Loading...</p> : <p className="text-2xl font-semibold text-white">{products.length}</p>}
            {productError && <p className="text-red-500">Error loading products</p>}
          </div>
        </motion.div>
      </div>

      <div className="mb-6 mt-10">
        <label htmlFor="table-select" className="mr-2 text-green-800">Select Table:</label>
        <select
          id="table-select"
          value={selectedTable}
          onChange={handleChangeTable}
          className="p-2 border rounded-md bg-white text-green-800"
        >
          <option value="categories">Categories</option>
          <option value="products">Products</option>
          <option value="users">Users</option>
        </select>
      </div>


      {selectedTable === "categories" && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="font-semibold mb-6 text-green-800">Category List</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-4 text-green-800">ID</th>
                <th className="p-4 text-green-800">Category Name</th>
                <th className="p-4 text-green-800">Created At</th>
                <th className="p-4 text-green-800">Updated At</th>
                <th className="p-4 text-green-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b hover:bg-green-50 text-green-600">
                  <td className="p-4">{category.id}</td>
                  <td className="p-4">{category.categoryName}</td>
                  <td className="p-4">{new Date(category.createdAt).toLocaleString()}</td>
                  <td className="p-4">{new Date(category.updatedAt).toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <button className="text-green-600 hover:text-green-800">
                      <FaPen className="text-xl" />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id, "product")}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedTable === "products" && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="font-semibold mb-6 text-green-800">Product List</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-4 text-green-800">ID</th>
                <th className="p-4 text-green-800">Product Name</th>
                <th className="p-4 text-green-800">Price</th>
                <th className="p-4 text-green-800">Stock</th>
                <th className="p-4 text-green-800">Image</th>
                <th className="p-4 text-green-800">Created At</th>
                <th className="p-4 text-green-800">Updated At</th>
                <th className="p-4 text-green-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-green-50 text-green-600">
                  <td className="p-4">{product.id}</td>
                  <td className="p-4">{product.productName}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">
                    {product.images ? (
                      <img src={product.images[0]} alt={product.productName} className="w-12 h-12 rounded-full" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">N/A</div>
                    )}
                  </td>
                  <td className="p-4">{new Date(product.createdAt).toLocaleString()}</td>
                  <td className="p-4">{new Date(product.updatedAt).toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <button className="text-green-600 hover:text-green-800">
                      <FaPen className="text-xl" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id, "product")}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedTable === "users" && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="font-semibold mb-6 text-green-800">Users List</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-4 text-green-800">ID</th>
                <th className="p-4 text-green-800">Full Name</th>
                <th className="p-4 text-green-800">Email</th>
                <th className="p-4 text-green-800">Role</th>
                <th className="p-4 text-green-800">Profile Image</th>
                <th className="p-4 text-green-800">Created At</th>
                <th className="p-4 text-green-800">Updated At</th>
                <th className="p-4 text-green-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-green-50 text-green-600">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.fullName}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">
                    {user.profileImage ? (
                      <img src={user.profileImage} alt="Profile" className="w-12 h-12 rounded-full" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">N/A</div>
                    )}
                  </td>
                  <td className="p-4">{new Date(user.createdAt).toLocaleString()}</td>
                  <td className="p-4">{new Date(user.updatedAt).toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <button className="text-green-600 hover:text-green-800">
                      <FaPen className="text-xl" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id, "product")}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default Dashboard;
