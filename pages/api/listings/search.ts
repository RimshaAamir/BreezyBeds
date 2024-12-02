// import { NextApiRequest, NextApiResponse } from "next";
// import listings from "../../../data/listings.json";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { query } = req.query;

//   if (req.method === "GET") {
//     const filteredListings = listings.filter((listing) =>
//       listing.location.toLowerCase().includes((query as string).toLowerCase())
//     );

//     res.status(200).json(filteredListings);
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
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      res.status(400).json({ message: "Search query is required" });
      return;
    }

    try {
      // Perform case-insensitive search using MongoDB's `$regex` operator
      const filteredListings = await Listing.find({
        location: { $regex: query, $options: "i" }, // "i" for case-insensitive matching
      });

      res.status(200).json(filteredListings);
    } catch (error) {
      res.status(500).json({ message: "Error searching listings", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
