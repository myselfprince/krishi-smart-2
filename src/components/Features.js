'use client'
// components/Features.js
import React from "react";

export default function Features() {
  const featuresData = [
    {
      id: 1,
      title: "Good in new technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    },
    {
      id: 2,
      title: "Good in smart organic services",
      description:
        "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem.",
    },
    {
      id: 3,
      title: "Reforming in the systems",
      description:
        "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="p-6 border border-gray-200 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
