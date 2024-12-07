import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../db";
import Listing from "../../../../models/Listing";
import { verifyToken } from "../../../../middleware/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectDB();

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      res.status(400).json({ message: "Invalid or missing listing ID." });
      return;
    }

    try {
      const deletedListing = await Listing.findByIdAndDelete(id);
      if (!deletedListing) {
        res.status(404).json({ message: "Listing not found." });
        return;
      }
      res.status(200).json({ message: "Listing deleted successfully.", listing: deletedListing });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(500).json({ message: "Error deleting listing.", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default verifyToken(handler, ["host"]); // Only hosts can delete listings
