"use client"
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
    { title: "Scottsdale", description: "Apartment rentals" },
    { title: "Tucson", description: "Condo rentals" },
    { title: "Jasper", description: "Cabin rentals" },
    { title: "Mountain View", description: "Pet-friendly rentals" },
    { title: "Devonport", description: "Cottage rentals" },
    { title: "Mallacoota", description: "Pet-friendly rentals" },
    { title: "Ibiza", description: "Vacation rentals" },
    { title: "Anaheim", description: "Beach house rentals" },
    { title: "Monterey", description: "Cabin rentals" },
    { title: "Paso Robles", description: "House rentals" },
    { title: "Santa Barbara", description: "Apartment rentals" },
    { title: "Sonoma", description: "Cottage rentals" },
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
    <div className="bg-black py-8 px-10 md:px-20 lg:px-48 space-y-6">
      <h2 className="text-lg font-semibold text-violet-50 mb-4">
        Inspiration for future getaways
      </h2>

      {/* Categories Navigation */}
      <div className="overflow-x-auto border-b border-violet-50 pb-2">
        <div className="flex space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-sm font-medium pb-2 ${
                selectedCategory === category
                  ? "text-violet-600 border-b-2 border-violet-600"
                  : "text-violet-50 hover:text-violet-50"
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
            <p className="font-medium text-violet-50">{item.title}</p>
            {item.description && (
              <p className="text-gray-300 text-sm">{item.description}</p>
            )}
          </div>
        ))}
      </div>

        {/* Footer Upper and Bottom Sections */}
        <div>
        <FooterUpperDivider />
        <FooterBottomDivider />
      </div>

    </div>
  );
};

export default Footer;
