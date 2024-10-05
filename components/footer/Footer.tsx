"use client"
import React, { useState } from "react";
import FooterUpperDivider from "./FooterUpperDivider";
import FooterBottomDivider from "./FooterBottomDivider";

const categories = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
];

const contentMap: { [key: string]: string[] } = {
  Popular: [
    "Canmore - Pet-friendly rentals",
    "Benalmádena - Apartment rentals",
    "Marbella - Apartment rentals",
    "Mijas - Apartment rentals",
    "Prescott - Pet-friendly rentals",
    "Scottsdale - Mansion rentals",
    "Tucson - House rentals",
    "Jasper - Cabin rentals",
    "Mountain View - Pet-friendly rentals",
    "Devonport - Cottage rentals",
    "Mallacoota - Pet-friendly rentals",
    "Ibiza - Vacation rentals",
    "Anaheim - House rentals",
    "Monterey - Cabin rentals",
    "Paso Robles - House rentals",
    "Santa Barbara - Apartment rentals",
    "Sonoma - Cottage rentals",
    "Show more",
  ],
  "Arts & culture": [
    "Phoenix - Apartment rentals",
    "Hot Springs - Lakehouse rentals",
    "Los Angeles - Cottage rentals",
    "San Diego - Beach house rentals",
    "San Francisco - Vacation rentals",
    "Barcelona - Vacation rentals",
    "Prague - Vacation rentals",
    "Washington - Apartment rentals",
    "Keswick - Cottage rentals",
    "London - Beachfront rentals",
    "Scarborough - Vacation rentals",
    "Sherwood Forest - Cabin rentals",
    "York - Apartment rentals",
    "Paris - Villa rentals",
    "Rhodes - Apartment rentals",
    "Nashville - Vacation rentals",
    "Dublin - Cottage rentals",
    "Show more",
  ],
  Outdoors: ["Content for Outdoors..."],
  Mountains: ["Content for Mountains..."],
  Beach: ["Content for Beach..."],
  "Unique stays": ["Content for Unique stays..."],
  Categories: ["Content for Categories..."],
  "Things to do": ["Content for Things to do..."],
  "Travel tips & inspiration": ["Content for Travel tips & inspiration..."],
  "Airbnb-friendly apartments": ["Content for Airbnb-friendly apartments..."],
};

const Footer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  return (
    <div className="bg-gray-100 py-8 px-10 md:px-20 lg:px-48">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Inspiration for future getaways
      </h2>

      {/* Buttons: Horizontal Scroll in Mobile */}
      <div className="overflow-x-auto whitespace-nowrap border-b border-gray-300 mb-4">
        <div className="flex space-x-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`pb-2 text-sm font-medium ${
                selectedCategory === category
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 text-sm text-gray-700">
        {contentMap[selectedCategory].map((item, index) => (
          <div key={index}>
            {item.includes("Show more") ? (
              <button className="text-blue-500 hover:underline">{item}</button>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-100">
      {/* Upper Footer Section */}
      <FooterUpperDivider />

      {/* Bottom Footer Section */}
      <FooterBottomDivider />
    </div>
    
    </div>
  );
};

export default Footer;
