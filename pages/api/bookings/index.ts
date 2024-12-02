// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { listingId, userId, checkIn, checkOut } = req.body;

//     if (!listingId || !userId || !checkIn || !checkOut) {
//       res.status(400).json({ message: "Invalid booking data" });
//       return;
//     }

//     const checkInDate = new Date(checkIn);
//     const checkOutDate = new Date(checkOut);

//     if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
//       res.status(400).json({ message: "Invalid date format" });
//       return;
//     }

//     if (checkInDate >= checkOutDate) {
//       res.status(400).json({ message: "Check-out date must be after check-in date" });
//       return;
//     }

//     // Mock response for a successful booking
//     const booking = {
//       id: new Date().getTime(), // Mock booking ID
//       listingId,
//       userId,
//       checkIn,
//       checkOut,
//       status: "confirmed",
//     };

//     res.status(201).json({ message: "Booking created successfully", booking });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../db";
import Booking from "../../../models/Booking";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    const { listingId, userId, checkIn, checkOut } = req.body;

    if (!listingId || !userId || !checkIn || !checkOut) {
      res.status(400).json({ message: "Invalid booking data" });
      return;
    }

    try {
      const newBooking = await Booking.create({
        listingId,
        userId,
        checkIn,
        checkOut,
        status: "confirmed",
      });

      res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
      res.status(500).json({ message: "Error creating booking", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
