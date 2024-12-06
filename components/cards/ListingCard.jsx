import { FaStar, FaHeart } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel"; // Adjusted import path
import Link from "next/link"; // Import Link for navigation

const ListingCard = ({ id, images, title, location, distance, dates, price, rating }) => {
  return (
    <div className="bg-slate-50 text-gray-900 rounded-lg shadow-lg overflow-hidden max-w-xs hover:shadow-xl transition-shadow">
      <div className="relative">
        {/* Prevent navigation when interacting with the ImageCarousel */}
        <ImageCarousel images={images} title={title} />

        <span className="absolute top-2 left-2 bg-zinc-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Guest favorite
        </span>

        <FaHeart className="absolute top-2 right-2 text-zinc-400 text-lg cursor-pointer hover:text-zinc-600" />
      </div>

      {/* Wrap only the clickable text and elements with Link */}
      <Link href={`/listings/${id}`} passHref>
        <div className="p-4 cursor-pointer">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex items-center text-zinc-950">
              <FaStar className="mr-1" />
              <span>{rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">{location}</p>
          <p className="text-gray-500 text-sm mb-2">{distance} kilometers away</p>
          <p className="text-gray-500 text-sm">{dates}</p>
          <p className="text-lg font-semibold text-gray-900 mt-2">{price} / night</p>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
