// components/cards/ListingCard.jsx
import { FaStar, FaHeart } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';  // Adjusted import path

const ListingCard = ({ images, title, location, distance, dates, price, rating }) => {
  return (
    <div className="bg-card text-textLight rounded-lg shadow-md overflow-hidden max-w-xs">
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
          <div className="flex items-center text-accent">
            <FaStar className="mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-secondaryText text-sm">{location}</p>
        <p className="text-secondaryText text-sm mb-2">{distance} kilometers away</p>
        <p className="text-secondaryText text-sm">{dates}</p>
        <p className="text-lg font-semibold text-accent mt-2">{price} / night</p>
      </div>
    </div>
  );
};

export default ListingCard;
