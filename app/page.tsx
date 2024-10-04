// pages/index.js
import Header from '../components/navbar/Header';
import ListingCard from '../components/cards/ListingCard';

export default function Home() {
  const listings = [
    {
      images: [
        "1111.jpg",
        "2222.jpg",
        "123.png",
        "2222.jpg",
      ],
      title: "Cozy Cabin in the Woods",
      location: "Varlaam, Romania",
      distance: 123,
      dates: "Nov 24 – 29",
      price: "562 lei",
      rating: 4.98,
    },
    {
      images: [
        "1111.jpg",
        "2222.jpg",
        "123.png",
        "2222.jpg",
      ],
      title: "Cozy Cabin in the Woods",
      location: "Varlaam, Romania",
      distance: 123,
      dates: "Nov 24 – 29",
      price: "562 lei",
      rating: 4.98,
    },
    {
      images: [
        "1111.jpg",
        "2222.jpg",
        "123.png",
        "2222.jpg",
      ],
      title: "Cozy Cabin in the Woods",
      location: "Varlaam, Romania",
      distance: 123,
      dates: "Nov 24 – 29",
      price: "562 lei",
      rating: 4.98,
    },
    {
      images: [
        "1111.jpg",
        "2222.jpg",
        "123.png",
        "2222.jpg",
      ],
      title: "Cozy Cabin in the Woods",
      location: "Varlaam, Romania",
      distance: 123,
      dates: "Nov 24 – 29",
      price: "562 lei",
      rating: 4.98,
    },
    {
      images: [
        "1111.jpg",
        "2222.jpg",
        "123.png",
        "2222.jpg",
      ],
      title: "Cozy Cabin in the Woods",
      location: "Varlaam, Romania",
      distance: 123,
      dates: "Nov 24 – 29",
      price: "562 lei",
      rating: 4.98,
    },
    // Additional listings can be added here
  ];

  return (
    <div className="bg-background min-h-screen text-primaryText">
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-6">Explore Our Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <ListingCard
              key={index}
              images={listing.images}
              title={listing.title}
              location={listing.location}
              distance={listing.distance}
              dates={listing.dates}
              price={listing.price}
              rating={listing.rating}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
