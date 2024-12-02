"use client";
import Header from "../components/navbar/Header";
import Categories from "../components/categories/Categories";
import ListingCard from "../components/cards/ListingCard";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";

// interface Listing {
//   id: number; 
//   images: string[];
//   title: string;
//   location: string;
//   distance: number;
//   dates: string;
//   price: string;
//   rating: number;
// }

// export default function Home() {
//   const [listings, setListings] = useState<Listing[]>([]);

//   useEffect(() => {
//     // Fetch data from the API endpoint
//     fetch("/api/listings")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch listings");
//         }
//         return response.json();
//       })
//       .then((data) => setListings(data))
//       .catch((error) => console.error("Error loading listings data:", error));
//   }, []);

//   return (
//     <div className="bg-background min-h-screen text-primaryText">
//       <Header />
//       <main className="p-4">
//         {/* Categories Section */}
//         <Categories />
//         <h1 className="text-3xl font-bold mb-6 mt-6">Explore Our Listings</h1>
//         {/* Listings Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {listings.map((listing) => (
//             <ListingCard
//               key={listing.id}
//               id={listing.id} 
//               images={listing.images}
//               title={listing.title}
//               location={listing.location}
//               distance={listing.distance}
//               dates={listing.dates}
//               price={listing.price}
//               rating={listing.rating}
//             />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
interface Listing {
  _id: string; // MongoDB's ObjectId as a string
  images: string[];
  title: string;
  location: string;
  distance: number;
  dates: string;
  price: string;
  rating: number;
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("/api/listings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        return response.json();
      })
      .then((data) => setListings(data))
      .catch((error) => console.error("Error loading listings data:", error));
  }, []);

  return (
    <div className="bg-background min-h-screen text-primaryText">
      <Header />
      <main className="p-4">
        {/* Categories Section */}
        <Categories />
        <h1 className="text-3xl font-bold mb-6 mt-6">Explore Our Listings</h1>
        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing._id}
              id={listing._id}
              images={listing.images}
              title={listing.title}
              location={listing.location}
              distance={listing.distance}
              dates={listing.dates}
              price={listing.price}
              rating={listing.rating}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
