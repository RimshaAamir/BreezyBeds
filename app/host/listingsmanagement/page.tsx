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
  const isAuthorized = useAuth(["host"]); // Host access only
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
    fetch("/api/host/listings", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then(setListings)
      .catch(console.error);
  }, []);

  const handleCreate = async () => {
    try {
      const response = await fetch("/api/host/listings/post", {
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
        console.log(listings);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/host/listings/${id}`, {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listings Management</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Distance"
          value={form.distance}
          onChange={(e) => setForm({ ...form, distance: Number(e.target.value) })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Dates"
          value={form.dates}
          onChange={(e) => setForm({ ...form, dates: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Images (comma-separated URLs)"
          value={form.images.join(",")}
          onChange={(e) => setForm({ ...form, images: e.target.value.split(",") })}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Listing
        </button>
      </form>
      <ul className="mt-6 space-y-4">
        {listings.map((listing) => (
          <li key={listing._id} className="flex justify-between items-center">
            <span>{listing.title}</span>
            <button
              onClick={() => handleDelete(listing._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
