"use client"; // Mark this as a client component

import { useParams } from "next/navigation"; // useParams is used instead of useRouter
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Listing {
  _id: string; // MongoDB's ObjectId as a string
  images: string[];
  title: string;
  location: string;
  distance: number;
  dates: string;
  price: string;
  rating: number;
  type?: string;
  amenities?: string[];
  guests?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export default function ListingDetails() {
  const params = useParams(); // Get the route parameters
  const id = params?.id as string; // Safely cast `id` to a string
  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/listings/${id}`)
        .then((res) => res.json())
        .then((data) => setListing(data))
        .catch((err) => console.error("Error fetching listing details:", err));
    }
  }, [id]);

  if (!listing) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto bg-slate-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{listing.title}</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {listing.images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={image}
              alt={`${listing.title} - Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-gray-700">{listing.location}</p>
        <p className="text-sm text-gray-500">
          Distance: {listing.distance} kilometers
        </p>
        <p className="text-lg font-semibold text-gray-900">
          Price: {listing.price} / night
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">Rating:</span>
          <span className="text-yellow-500 font-bold">{listing.rating} ⭐</span>
        </p>
      </div>

      {/* Amenities Section */}
      {listing.amenities && listing.amenities.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Amenities:</h2>
          <ul className="list-disc pl-6 text-sm text-gray-600">
            {listing.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Guest Information */}
      <div className="mt-6 space-y-2">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Guests:</span> {listing.guests || 0}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Bedrooms:</span> {listing.bedrooms || 0}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Bathrooms:</span> {listing.bathrooms || 0}
        </p>
      </div>

      {/* Book Now Button */}
      <div className="mt-8">
        <Link href={`/book/${listing._id}`}>
          <span className="inline-block bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
            Book Now
          </span>
        </Link>
      </div>
    </div>
  );
}
