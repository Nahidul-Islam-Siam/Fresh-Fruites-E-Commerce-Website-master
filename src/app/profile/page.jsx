'use client';

import { useSelector } from 'react-redux';

const Profile = () => {
  // Get the user data from Redux store
  const data = useSelector((state) => state.auth.user);

  // If user data doesn't exist, prompt to login
  if (!data || !data.user) {
    return <div className="text-red-500 text-center mt-4">Error: No user found. Please log in.</div>;
  }

  return (
    <div className="flex my-32 flex-col items-center p-6 border rounded-lg shadow-lg w-96 mx-auto bg-gradient-to-b from-green-200 to-green-500 text-white">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
        {data.user.avatar ? (
          <img src={data.user.avatar} alt="User Avatar" className="w-full h-full object-cover" />
        ) : (
          <svg
            className="w-full h-full text-green-800 bg-white rounded-full p-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 16a7 7 0 0114 0H5z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <h1 className="text-2xl font-bold mt-4 drop-shadow-md">{data.user.fullName}</h1>
      <p className="text-lg font-light drop-shadow-sm">{data.user.email}</p>
      <button className="mt-4 px-6 py-2 bg-green-700 hover:bg-green-800 transition-all rounded-full shadow-md text-white font-semibold">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;