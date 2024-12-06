import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../db";
import Booking from "../../../models/Booking";
import { verifyToken } from "@/middleware/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
    console.log("IN APIsdfsdfs");
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const bookings = await Booking.find({ userId: id }); // Fetch bookings by userId
      if (!bookings) {
        res.status(404).json({ message: "bookings not found" });
      } else {
        res.status(200).json(bookings);
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching bookings", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};


export default verifyToken(handler, ["admin", "user", "host"]);