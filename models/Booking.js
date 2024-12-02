import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
  // userId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Assuming userId is also an ObjectId
  userId: { type: String, required: true }, // Assuming userId is also an ObjectId
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  status: { type: String, default: "confirmed" },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
