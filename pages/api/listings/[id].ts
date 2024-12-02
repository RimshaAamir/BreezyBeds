// import { NextApiRequest, NextApiResponse } from "next";
// import listings from "../../../data/listings.json";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   if (req.method === "GET") {
//     const listing = listings.find((listing) => listing.id === parseInt(id as string, 10));

//     if (listing) {
//       res.status(200).json(listing);
//     } else {
//       res.status(404).json({ message: "Listing not found" });
//     }
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
    const { id } = req.query;

    try {
      const listing = await Listing.findById(id); // Fetch by ObjectId
      if (!listing) {
        res.status(404).json({ message: "Listing not found" });
      } else {
        res.status(200).json(listing);
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching listing", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
