import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../db";
import Booking from "../../../../models/Booking";
import { verifyToken } from "../../../../middleware/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectDB();

  if (req.method === "GET") {
    try {
      // const bookings = await Booking.find().populate("listingId");
      const bookings = await Booking.find();

      console.log(bookings);
      res.status(200).json(bookings);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching bookings.", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default verifyToken(handler, ["admin"]); // Only admins can view bookings
// import { NextApiRequest, NextApiResponse } from "next";
// import connectDB from "../../../../db";
// import Booking from "../../../../models/Booking";
// import { verifyToken } from "../../../../middleware/auth";

// const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
//   await connectDB();

//   if (req.method === "GET") {
//     try {
//       // Populate `listingId` to include only `_id` and `title` fields
//       const bookings = await Booking.find()
//         .populate({
//           path: "listingId",
//           select: "_id title", // Include only `_id` and `title` from the Listing schema
//         });
//       console.log(bookings);
//       res.status(200).json(bookings);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       res.status(500).json({ message: "Error fetching bookings.", error: error.message });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };

// export default verifyToken(handler, ["admin"]); // Only admins can view bookings
