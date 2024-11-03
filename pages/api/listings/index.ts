import { NextApiRequest, NextApiResponse } from "next";
import listings from "../../../data/listings.json"; // Import the JSON data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(listings);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
