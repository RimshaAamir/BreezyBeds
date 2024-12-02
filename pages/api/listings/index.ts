// import { NextApiRequest, NextApiResponse } from "next";
// import listings from "../../../data/listings.json"; // Import the JSON data

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     res.status(200).json(listings);
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../db";
import Listing from "../../../models/Listing";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const listings = await Listing.find(); // Fetch all listings
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching listings", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
