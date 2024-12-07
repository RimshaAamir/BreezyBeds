"use client";

import { useEffect, useState } from "react";
import useAuth from "../../../lib/useAuth";

interface Listing {
  _id: string; // MongoDB ObjectId as string
  title: string;
  location: string;
  distance: number;
  dates: string;
  price: string;
  rating: number;
  images: string[];
}

export default function ListingsManagement() {
  const isAuthorized = useAuth(["admin"]); // Admin access only
  const [listings, setListings] = useState<Listing[]>([]);
  const [form, setForm] = useState<Omit<Listing, "_id">>({
    title: "",
    location: "",
    distance: 0,
    dates: "",
    price: "",
    rating: 0,
    images: [],
  });

  useEffect(() => {
    fetch("/api/admin/listings", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then(setListings)
      .catch(console.error);
  }, []);

  const handleCreate = async () => {
    try {
      const response = await fetch("/api/admin/listings/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        setListings((prev) => [...prev, data.listing]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/admin/listings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setListings((prev) => prev.filter((listing) => listing._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthorized) return <p>Redirecting...</p>;

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
        Listings Management
      </h1>

      {/* Add Listing Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Add a New Listing</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate();
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="number"
              placeholder="Distance (km)"
              value={form.distance}
              onChange={(e) => setForm({ ...form, distance: Number(e.target.value) })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Dates"
              value={form.dates}
              onChange={(e) => setForm({ ...form, dates: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="number"
              placeholder="Rating"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <textarea
            placeholder="Images (comma-separated URLs)"
            value={form.images.join(",")}
            onChange={(e) => setForm({ ...form, images: e.target.value.split(",") })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Add Listing
          </button>
        </form>
      </div>

      {/* Listings Display */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">All Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing._id}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900">{listing.title}</h3>
              <p className="text-sm text-gray-600">{listing.location}</p>
              <p className="text-sm text-gray-600">{listing.distance} km away</p>
              <p className="text-sm text-gray-600">Price: {listing.price} / night</p>
              <p className="text-sm text-gray-600">Rating: {listing.rating} ⭐</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleDelete(listing._id)}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
