import connectDB from "../../../../db";
import Listing from "../../../../models/Listing";
import { verifyToken } from "../../../../middleware/auth";


const handler = async (req, res) => {
  await connectDB();

  if (req.method === "POST") {
    const { title, location, distance, dates, price, rating, images } = req.body;
    const { user} = req;

    if (!title || !location || !distance || !dates || !price || !rating || !images) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    if (!user || !user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    try {
      const newListing = await Listing.create({ title, 
        userId: user.id,
        location, distance, dates, price, rating, images });
      res.status(201).json({ message: "Listing created successfully.", listing: newListing });
    } catch (error) {
      res.status(500).json({ message: "Error creating listing.", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default verifyToken(handler, ["admin"]); // Only admins can create listings
