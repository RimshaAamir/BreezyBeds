import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  images: { type: [String], required: true }, // Array of image URLs
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  distance: { type: Number, required: true },
  dates: { type: String, required: true }, // This is a string for now; you can parse it into actual date ranges if needed.
  price: { type: String, required: true }, // Keeping price as a string for now to match your format
  rating: { type: Number, required: true },
});

export default mongoose.models.Listing || mongoose.model("Listing", ListingSchema);
