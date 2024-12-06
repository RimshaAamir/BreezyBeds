"use client"; // Mark this as a client-side component

import { useEffect, useState } from "react";
import useAuth from "../../lib/useAuth"; // Use the custom useAuth hook

interface Booking {
  _id: string; 
  listingId: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

const UserProfile = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState<string | null>(null);
  const isAuthenticated = useAuth(); // Check if the user is authenticated

  // Fetch user's past bookings
  const fetchBookings = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User is not authenticated.");
      return;
    }

    try {
      const userId = getUserIdFromToken();
      const response = await fetch(`/api/bookings/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await response.json();
      setBookings(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Error fetching bookings");
    }
  };

  // Get user ID from the JWT token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
    return payload.id;
  };

  // Fetch bookings when the component mounts
  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return <p>Redirecting to login...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-6">User Profile</h1>
        <h2 className="text-2xl font-semibold text-black mb-4">Past Bookings</h2>

        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="bg-gray-50 p-4 rounded-md shadow-sm mb-4 text-gray-600">
              <p><strong>Listing ID:</strong> {booking.listingId}</p>
              <p>
                <strong>Check-In:</strong> {new Date(booking.checkIn).toLocaleDateString()}
              </p>
              <p>
                <strong>Check-Out:</strong> {new Date(booking.checkOut).toLocaleDateString()}
              </p>
              <p><strong>Status:</strong> {booking.status}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">You have no past bookings.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
