"use client"; // Mark this as a client component

import { useParams } from "next/navigation"; // useParams is used instead of useRouter
import { useEffect, useState } from "react";
import Link from "next/link";

interface Listing {
  id: number;
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

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {listing.images.map((image, index) => (
          <img key={index} src={`/${image}`} alt={listing.title} className="rounded-lg" />
        ))}
      </div>
      <p className="text-lg">{listing.location}</p>
      <p className="text-sm text-gray-500 mb-4">Distance: {listing.distance} km</p>
      <p className="text-lg font-bold mb-4">Price: {listing.price} / night</p>
      <p className="text-sm mb-4">Rating: {listing.rating} ⭐</p>
      {listing.amenities && (
        <div>
          <h2 className="text-lg font-bold">Amenities:</h2>
          <ul className="list-disc pl-6">
            {listing.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-4">
        Guests: {listing.guests || 0}, Bedrooms: {listing.bedrooms || 0}, Bathrooms: {listing.bathrooms || 0}
      </p>
      <Link href={`/book/${listing.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6">
          Book Now
        </button>
      </Link>
    </div>
  );
}
