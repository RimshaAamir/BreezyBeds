import { NextApiRequest, NextApiResponse } from "next";
import listings from "../../../data/listings.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const listing = listings.find((listing) => listing.id === parseInt(id as string, 10));

    if (listing) {
      res.status(200).json(listing);
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
