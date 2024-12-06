"use client";
import React, { useState } from "react";
import FooterUpperDivider from "./FooterUpperDivider";
import FooterBottomDivider from "./FooterBottomDivider";

type CategoryContent = {
  title: string;
  description: string;
};

const categories: string[] = [
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

const contentMap: Record<string, CategoryContent[]> = {
  Popular: [
    { title: "Canmore", description: "Pet-friendly rentals" },
    { title: "Benalmádena", description: "Apartment rentals" },
    { title: "Marbella", description: "Beachfront rentals" },
    { title: "Mijas", description: "House rentals" },
    { title: "Prescott", description: "Cottage rentals" },
    { title: "Scottsdale", description: "House rentals" },
    { title: "Tucson", description: "Condo rentals" },
    { title: "Jasper", description: "Cabin rentals" },
    { title: "Mountain View", description: "Pet-friendly rentals" },
    { title: "Devonport", description: "Cottage rentals" },
    { title: "Mallacoota", description: "Beach house rentals" },
    { title: "Ibiza", description: "Vacation rentals" },
    { title: "Anaheim", description: "Beach house rentals" },
    { title: "Monterey", description: "Apartment rentals" },
    { title: "Paso Robles", description: "Cottage rentals" },
    { title: "Santa Barbara", description: "Cottage rentals" },
    { title: "Sonoma", description: "Beach house rentals" },
    { title: "Show more", description: "" },
  ],
  "Arts & culture": [{ title: "Coming Soon", description: "" }],
  Outdoors: [{ title: "Coming Soon", description: "" }],
  Mountains: [{ title: "Coming Soon", description: "" }],
  Beach: [{ title: "Coming Soon", description: "" }],
  "Unique stays": [{ title: "Coming Soon", description: "" }],
  Categories: [{ title: "Coming Soon", description: "" }],
  "Things to do": [{ title: "Coming Soon", description: "" }],
  "Travel tips & inspiration": [{ title: "Coming Soon", description: "" }],
  "Airbnb-friendly apartments": [{ title: "Coming Soon", description: "" }],
};

const Footer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof contentMap>("Popular");

  return (
    
    <div className="bg-slate-100 text-gray-600 py-8 px-6 md:px-16 lg:px-32 space-y-6">
      {/* <div className="w-full h-[0.1rem] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div> */}
      <h2 className="text-xl font-bold text-black mb-4">
        Inspiration for future getaways
      </h2>

      {/* Categories Navigation */}
      <div className="overflow-x-auto border-b border-gray-300 pb-2">
        <div className="flex space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-sm font-medium pb-2 ${
                selectedCategory === category
                  ? "text-black border-b-2 border-black"
                  : "hover:text-black"
              }`}
              onClick={() => setSelectedCategory(category as keyof typeof contentMap)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {contentMap[selectedCategory].map((item, index) => (
          <div key={index}>
            <p className="font-medium text-black">{item.title}</p>
            {item.description && (
              <p className="text-gray-500 text-sm">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer Upper and Bottom Sections */}
      <FooterUpperDivider />
      <FooterBottomDivider />
    </div>
  );
};

export default Footer;
