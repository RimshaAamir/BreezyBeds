"use client";
import React from "react";

const FooterUpperDivider: React.FC = () => {
  return (
    <div className="border-t border-gray-300 py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Support */}
        <div>
          <h3 className="text-black font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>

        {/* Column 2: Hosting */}
        <div>
          <h3 className="text-black font-bold mb-4">Hosting</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Airbnb-friendly apartments</li>
            <li>Join a free Hosting class</li>
            <li>Find a co‑host</li>
          </ul>
        </div>

        {/* Column 3: Airbnb */}
        <div>
          <h3 className="text-black font-bold mb-4">Airbnb</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterUpperDivider;
