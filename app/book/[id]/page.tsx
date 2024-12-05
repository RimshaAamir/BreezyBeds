// "use client"; // Mark this as a client component

// import { useParams } from "next/navigation"; // Get the route parameter
// import { useEffect, useState } from "react";

// interface Listing {
//   id: number;
//   title: string;
//   price: string;
// }

// export default function BookingPage() {
//   const params = useParams(); // Get the route parameters
//   const id = params?.id as string; // Safely cast `id` to a string
//   const [listing, setListing] = useState<Listing | null>(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [totalPrice, setTotalPrice] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch listing details when the component mounts
//   useEffect(() => {
//     if (id) {
//       fetch(`/api/listings/${id}`)
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Failed to fetch listing details");
//           }
//           return res.json();
//         })
//         .then((data) => setListing(data))
//         .catch((err) => console.error("Error fetching listing details:", err));
//     }
//   }, [id]);

//   const validateDates = () => {
//     const checkInDate = new Date(checkIn);
//     const checkOutDate = new Date(checkOut);

//     if (!checkIn || !checkOut) {
//       setError("Both check-in and check-out dates are required.");
//       return false;
//     }

//     if (checkInDate >= checkOutDate) {
//       setError("Check-out date must be after the check-in date.");
//       return false;
//     }

//     setError(null); // Clear errors if validation passes
//     return true;
//   };

//   const calculatePrice = () => {
//     if (validateDates() && listing) {
//       const checkInDate = new Date(checkIn);
//       const checkOutDate = new Date(checkOut);
//       const days = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24);
//       setTotalPrice(days * parseFloat(listing.price.replace(/[^0-9.-]+/g, "")));
//     } else {
//       setTotalPrice(null);
//     }
//   };

//   const handleBooking = () => {
//     if (!validateDates()) {
//       return;
//     }

//     const bookingDetails = {
//       listingId: id,
//       userId: 1, // Mock user ID
//       checkIn,
//       checkOut,
//     };

//     fetch("/api/bookings", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(bookingDetails),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to create booking");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         alert("Booking confirmed!");
//         console.log(data);
//       })
//       .catch((err) => {
//         console.error("Error creating booking:", err);
//         setError("Failed to create booking. Please try again.");
//       });
//   };

//   if (!listing) return <p>Loading...</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Booking for {listing.title}</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Check-In Date:</label>
//         <input
//           type="date"
//           className="border p-2 rounded w-full"
//           value={checkIn}
//           onChange={(e) => setCheckIn(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Check-Out Date:</label>
//         <input
//           type="date"
//           className="border p-2 rounded w-full"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//         onClick={calculatePrice}
//       >
//         Calculate Total Price
//       </button>
//       {totalPrice !== null && (
//         <p className="text-lg font-bold mb-4">Total Price: {totalPrice} lei</p>
//       )}
//       <button
//         className="bg-green-500 text-white px-4 py-2 rounded"
//         onClick={handleBooking}
//       >
//         Confirm Booking
//       </button>
//     </div>
//   );
// }
"use client"; // Mark this as a client component

import { useParams } from "next/navigation"; // Get the route parameter
import { useEffect, useState } from "react";
import useAuth from "../../../lib/useAuth";

interface Listing {
  _id: string; // MongoDB's ObjectId as a string
  title: string;
  price: string;
}

export default function BookingPage() {
  const params = useParams(); // Get the route parameters
  const id = params?.id as string; // Safely cast `id` to a string
  const isAuthorized = useAuth(); // Ensure user is authenticated
  const [listing, setListing] = useState<Listing | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/listings/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch listing details");
          }
          return res.json();
        })
        .then((data) => setListing(data))
        .catch((err) => console.error("Error fetching listing details:", err));
    }
  }, [id]);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
    return payload.id;
  };

  const validateDates = () => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (!checkIn || !checkOut) {
      setError("Both check-in and check-out dates are required.");
      return false;
    }

    if (checkInDate >= checkOutDate) {
      setError("Check-out date must be after the check-in date.");
      return false;
    }

    setError(null); // Clear errors if validation passes
    return true;
  };

  const calculatePrice = () => {
    if (validateDates() && listing) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const days = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24);
      setTotalPrice(days * parseFloat(listing.price.replace(/[^0-9.-]+/g, "")));
    } else {
      setTotalPrice(null);
    }
  };

  const handleBooking = async () => {
    if (!validateDates()) {
      return;
    }

    const userId = getUserIdFromToken(); // Get user ID from JWT
    if (!userId) {
      setError("User is not authenticated.");
      return;
    }

    const bookingDetails = {
      listingId: id,
      userId, // Use the real user ID from the JWT
      checkIn,
      checkOut,
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      const data = await response.json();
      alert("Booking confirmed!");
      console.log(data);
    } catch (err) {
      console.error("Error creating booking:", err);
      setError("Failed to create booking. Please try again.");
    }
  };

  if (!isAuthorized) return <p>Redirecting to login...</p>;

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Booking for {listing.title}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-sm mb-1">Check-In Date:</label>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Check-Out Date:</label>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={calculatePrice}
      >
        Calculate Total Price
      </button>
      {totalPrice !== null && (
        <p className="text-lg font-bold mb-4">Total Price: {totalPrice} lei</p>
      )}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
}
