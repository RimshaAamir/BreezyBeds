import { FaStar, FaHeart } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel"; // Adjusted import path
import Link from "next/link"; // Import Link for navigation

const ListingCard = ({ id, images, title, location, distance, dates, price, rating }) => {
  return (
    <Link href={`/listings/${id}`} passHref>
      <div className="bg-card text-textLight rounded-lg shadow-md overflow-hidden max-w-xs cursor-pointer">
        <div className="relative">
          <ImageCarousel images={images} title={title} />

          <span className="absolute top-2 left-2 bg-[#FFE3D8] text-background text-xs font-semibold px-2 py-1 rounded-full">
            Guest favorite
          </span>

          <FaHeart className="absolute top-2 right-2 text-[#FFE3D8] text-lg cursor-pointer" />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex items-center text-my_sky_300">
              <FaStar className="mr-1" />
              <span>{rating}</span>
            </div>
          </div>
          <p className="text-my_sky_200 text-sm">{location}</p>
          <p className="text-my_sky_200 text-sm mb-2">{distance} kilometers away</p>
          <p className="text-my_sky_200 text-sm">{dates}</p>
          <p className="text-lg font-semibold text-my_sky_500 mt-2">{price} / night</p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
