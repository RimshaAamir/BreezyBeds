import Header from "../components/navbar/Header";
import Categories from "../components/categories/Categories"
import ListingCard from "../components/cards/ListingCard";
import Footer from "@/components/footer/Footer";
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
      title: "Modern Apartment in the City",
      location: "Zakopane, Poland",
      distance: 716,
      dates: "Nov 12 – 17",
      price: "287 lei",
      rating: 4.95,
    },
    {
      images: [
                "1111.jpg",
                "2222.jpg",
                "123.png",
                "2222.jpg",
      ],
      title: "Luxury Villa with Pool",
      location: "Madrid, Spain",
      distance: 528,
      dates: "Dec 1 – 6",
      price: "1,200 lei",
      rating: 4.92,
    },
    {
      images: [
                "1111.jpg",
                "2222.jpg",
                "123.png",
                "2222.jpg",
      ],
      title: "Beachfront Paradise",
      location: "Ibiza, Spain",
      distance: 928,
      dates: "Jan 10 – 15",
      price: "900 lei",
      rating: 4.87,
    },
    {
      images: [
                "1111.jpg",
                "2222.jpg",
                "123.png",
                "2222.jpg",
      ],
      title: "Mountain Retreat",
      location: "Breaza, Romania",
      distance: 123,
      dates: "Nov 24 – 29",
      price: "1,500 lei",
      rating: 5.0,
    },
  ];

  return (
    <div className="bg-background min-h-screen text-primaryText">
      <Header />
      <main className="p-4">
        {/* Categories Section */}
        <Categories />
        <h1 className="text-3xl font-bold mb-6 mt-6">Explore Our Listings</h1>
        {/* Listings Grid */}
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
      <Footer/>
    </div>
  );
}
