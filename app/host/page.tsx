'use client'; // Make sure to use this for client-side components in Next.js

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const HostPage = () => {
  const router = useRouter(); // Get the router from useRouter()

  return (
    <div className="bg-gray-100 min-h-screen text-primaryText flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Welcome, Host!</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Manage your platform with ease.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => router.push('/host/bookingsmanagement')} // Navigate to bookings management
            className="w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Manage Bookings
          </button>
          <button
            onClick={() => router.push('/host/listingsmanagement')} // Navigate to listings management
            className="w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Manage Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostPage;
