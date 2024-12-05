import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../db";
import Listing from "../../../../models/Listing";
import { verifyToken } from "../../../../middleware/auth";

interface CreateListingBody {
  title: string;
  location: string;
  distance: number;
  dates: string;
  price: string;
  rating: number;
  images: string[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectDB();

  if (req.method === "POST") {
    const { title, location, distance, dates, price, rating, images } = req.body as CreateListingBody;

    if (!title || !location || !distance || !dates || !price || !rating || !images) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    try {
      const newListing = await Listing.create({ title, location, distance, dates, price, rating, images });
      res.status(201).json({ message: "Listing created successfully.", listing: newListing });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(500).json({ message: "Error creating listing.", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default verifyToken(handler, ["admin"]); // Only admins can create listings
