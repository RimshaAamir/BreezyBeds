import { NextApiRequest, NextApiResponse } from "next";
import listings from "../../../data/listings.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (req.method === "GET") {
    const filteredListings = listings.filter((listing) =>
      listing.location.toLowerCase().includes((query as string).toLowerCase())
    );

    res.status(200).json(filteredListings);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
