import connectDB from "../../../../db";
import Listing from "../../../../models/Listing";
import { verifyToken } from "../../../../middleware/auth";

const handler = async (req, res) => {
  await connectDB();

  if (req.method === "GET") {
    const { userId } = req.user; 
    try {
      const listings =  await Listing.find({ userId: userId });
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching listings.", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default verifyToken(handler, ["host"]); // Only hosts can access
