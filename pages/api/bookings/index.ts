import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { listingId, userId, startDate, endDate } = req.body;

    if (!listingId || !userId || !startDate || !endDate) {
      res.status(400).json({ message: "Invalid booking data" });
      return;
    }

    // Mock response for a successful booking
    const booking = {
      id: new Date().getTime(), // Mock booking ID
      listingId,
      userId,
      startDate,
      endDate,
      status: "confirmed",
    };

    res.status(201).json({ message: "Booking created successfully", booking });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
