'use client'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FaUser, FaStore, FaDollarSign, FaStar, FaExternalLinkAlt } from "react-icons/fa";

import {  useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { motion, AnimatePresence } from 'framer-motion';
import { useGetAllUserQuery, useGetCategoriesQuery, useGetProductsQuery } from '@/redux/api/auth/authApi';


const Dashboard = () => {

    const { data: userApiData, error: userError, isLoading: userLoading } = useGetAllUserQuery();
    const { data: categoryData } = useGetCategoriesQuery();
    const { data: productData, error: productError, isLoading: productLoading } = useGetProductsQuery();
console.log(categoryData);

    const totalUsers = userApiData.data.meta.total
    // 101 


    



  const userData = [
    { name: 'Jan', appUser: 2000, active: 1500 },
    { name: 'Feb', appUser: 3000, active: 2200 },
    { name: 'Mar', appUser: 2500, active: 1800 },
    { name: 'Apr', appUser: 4000, active: 3500 },
    { name: 'May', appUser: 5000, active: 4500 },
    { name: 'Jun', appUser: 3500, active: 3000 },
    { name: 'Jul', appUser: 2800, active: 2300 },
    { name: 'Aug', appUser: 4200, active: 3900 },
    { name: 'Sep', appUser: 3900, active: 3700 },
    { name: 'Oct', appUser: 4100, active: 4000 },
    { name: 'Nov', appUser: 4300, active: 4200 },
    { name: 'Dec', appUser: 6000, active: 5500 }
  ];

  const earningsData = [
    { name: 'Jan', earnings: 10000 },
    { name: 'Feb', earnings: 20000 },
    { name: 'Mar', earnings: 30000 },
    { name: 'Apr', earnings: 50000 },
    { name: 'May', earnings: 40000 },
    { name: 'Jun', earnings: 35000 },
    { name: 'Jul', earnings: 45000 },
    { name: 'Aug', earnings: 50000 },
    { name: 'Sep', earnings: 55000 },
    { name: 'Oct', earnings: 60000 },
    { name: 'Nov', earnings: 65000 },
    { name: 'Dec', earnings: 80000 }
  ];

  const feedbackData = [
    { id: "#1239", user: "Abdul", image: "https://via.placeholder.com/64", provider: "Mr. Jone", review: 4.5, comment: "Great service and friendly provider!" },
    { id: "#1238", user: "Basar", image: "https://via.placeholder.com/64", provider: "Mr. Dibala", review: 5, comment: "Excellent experience!" },
    { id: "#1237", user: "Habiba", image: "https://via.placeholder.com/64", provider: "Paris Hairs", review: 4.8, comment: "Loved the hair treatment." },
    { id: "#1236", user: "Basar", image: "https://via.placeholder.com/64", provider: "Alex Selun", review: 4.7, comment: "Very professional and courteous." },
    { id: "#1234", user: "Habiba", image: "https://via.placeholder.com/64", provider: "Yolanda", review: 4.2, comment: "Good service but room for improvement." },
  ];
  const [dateRange, setDateRange] = useState('monthly');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedUser(null);
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const chartVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-4 md:p-6 bg-gray-100 min-h-screen"
    >
      {/* Date Range Filter with Animation */}
      <motion.div 
        className="mb-6 flex flex-wrap gap-2"
      >
        {['weekly', 'monthly', 'yearly'].map((range) => (
          <motion.button
            key={range}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDateRange(range)}
            className={`px-4 py-2 rounded-full text-sm ${
              dateRange === range ? 'bg-pink-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Stats Cards with Animation */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        variants={pageVariants}
      >
        {[
          { icon: FaUser, title: "Total Users", value: "20.10K", increase: "12%" },
          { icon: FaStore, title: "Total Product", value: "920", increase: "8%" },
          { icon: FaDollarSign, title: "Total Category", value: "150.10K", increase: "15%" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="p-4 bg-white shadow rounded-lg"
          >
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-3"
            >
              <stat.icon className="text-2xl md:text-3xl text-pink-600" />
              <div>
                <h2 className="text-lg md:text-xl font-semibold">{stat.title}</h2>
                <p className="text-xl md:text-2xl font-bold text-pink-600">{stat.value}</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-gray-500"
            >
              ↑ {stat.increase} from last month
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section with Animation */}
      <motion.div 
        variants={pageVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6"
      >
        <motion.div 
          variants={chartVariants}
          className="p-4 bg-white shadow rounded-lg"
        >
          <h3 className="font-semibold mb-4">Total Users Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="appUser" fill="#ff6384" />
              <Bar dataKey="active" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          variants={chartVariants}
          className="p-4 bg-white shadow rounded-lg"
        >
          <h3 className="font-semibold mb-4">Total Earning Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="earnings" stroke="#ff6384" fill="#ffb3c6" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* Additional Charts and Feedback */}
      <motion.div 
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        variants={pageVariants}
      >
        {/* Total Outlet Statistics */}
        <motion.div 
          className="p-4 bg-white shadow rounded-lg"
        >
          <h3 className="font-semibold mb-4">Total Outlet Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="active" stroke="#4caf50" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Feedback Section */}
        <motion.div 
          className="p-4 bg-white shadow rounded-lg"
        >
          <h3 className="font-semibold mb-4">Feedbacks</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">S.ID</th>
                <th className="p-2">User</th>
                <th className="p-2">Provider</th>
                <th className="p-2">Review</th>
                <th className="p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((feedback, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="p-2 text-center">{feedback.id}</td>
                  <td className="p-2 flex items-center gap-2">
                    <img src={feedback.image} alt={feedback.user} className="w-8 h-8 rounded-full object-cover" />
                    {feedback.user}
                  </td>
                  <td className="p-2 text-center">{feedback.provider}</td>
                  <td className="p-2 flex items-center justify-center gap-1">
                    <FaStar className="text-red-500" /> {feedback.review}/5
                  </td>
                  <td className="p-2 text-center">
                    <button onClick={() => openModal(feedback)} className="text-blue-500">
            
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
              >
                <div className="flex items-center justify-center min-h-screen px-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.3 }}
                    className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeModal}
                      className="absolute top-2 right-2"
                    >
                      <AiOutlineClose className="text-gray-600" size={24} />
                    </motion.button>
                    {selectedUser && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex flex-col">
                          <h2 className="text-lg font-bold text-pink-600">Feedback Details</h2>
                          <div className="flex justify-between items-center mt-4 border-b pb-4">
                            <div className="flex items-center gap-3">
                              <img src={selectedUser.image} alt={selectedUser.user} className="w-12 h-12 rounded-full object-cover" />
                              <div>
                                <p className="font-bold text-pink-600">{selectedUser.user}</p>
                                <p className="text-xs text-gray-600">{selectedUser.id}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <img src={selectedUser.image} alt={selectedUser.provider} className="w-12 h-12 rounded-full object-cover" />
                              <div>
                                <p className="font-bold text-pink-600">{selectedUser.provider}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="font-medium text-gray-700">Rating: <span className="text-pink-600 font-bold">⭐ {selectedUser.review}/5</span></p>
                            <p className="mt-2"><span className="font-bold">Comment:</span> {selectedUser.comment}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;