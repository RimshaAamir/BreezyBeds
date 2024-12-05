import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../db";
import Booking from "../../../models/Booking";
import { verifyToken } from "../../../middleware/auth";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

export default verifyToken(handler, ["user","admin", "host"]); 