"use client";

import { useEffect, useState } from "react";
import useAuth from "../../../lib/useAuth";

interface Booking {
  _id: string; // MongoDB ObjectId as string
  userId: string;
  listingId: {
    _id: string;
    title: string;
  };
  checkIn: string;
  checkOut: string;
  status: string;
}

export default function BookingsManagement() {
  const isAuthorized = useAuth(["admin"]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch("/api/admin/book", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then(setBookings)
      .catch(console.error);
  }, []);

  if (!isAuthorized) return <p>Redirecting...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings Management</h1>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking._id} className="p-4 border rounded">
            <p>
              <strong>User ID:</strong> {booking.userId}
            </p>
            <p>
              <strong>Listing:</strong> {booking.listingId.title}
            </p>
            <p>
              <strong>Check-In:</strong> {new Date(booking.checkIn).toLocaleDateString()}
            </p>
            <p>
              <strong>Check-Out:</strong> {new Date(booking.checkOut).toLocaleDateString()}
            </p>
            <p>
              <strong>Status:</strong> {booking.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
