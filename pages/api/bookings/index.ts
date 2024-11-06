import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { listingId, userId, checkIn, checkOut } = req.body;

    if (!listingId || !userId || !checkIn || !checkOut) {
      res.status(400).json({ message: "Invalid booking data" });
      return;
    }

    // Mock response for a successful booking
    const booking = {
      id: new Date().getTime(), // Mock booking ID
      listingId,
      userId,
      checkIn,
      checkOut,
      status: "confirmed",
    };

    res.status(201).json({ message: "Booking created successfully", booking });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
