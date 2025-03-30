'use client'
import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] sm:min-h-[600px] flex items-center"
        style={{ backgroundImage: "url('/banner.png')" }} // Replace with your banner image path
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              KrishiSmart - Kisan & Agriculture
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white max-w-lg">
              Simplifying Agriculture for Every Kisan
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-200">
                Marketplace
              </button>
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors duration-200">
                FarmerTube
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative -mt-16 sm:-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
            <p className="mt-2 text-gray-800 font-bold text-xl w-1/2 text-center mx-auto  ">
              We’re using a new technology
            </p>
            <div className="mt-4">
              <Image
                src="/homepage/1.png" // Replace with your feature image path
                alt="Feature 1"
                width={80}
                height={80}
                className="mx-auto rounded"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
           
            <p className="mt-2 text-gray-800 font-bold text-xl w-1/2 text-center mx-auto  ">
              Good in smart organic services
            </p>
            <div className="mt-4">
              <Image
                src="/homepage/2.png" // Replace with your feature image path
                alt="Feature 2"
                width={80}
                height={80}
                className="mx-auto rounded"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
            
            <p className="mt-2 text-gray-800 font-bold text-xl w-1/2 text-center mx-auto  ">
              Reforming in the systems
            </p>
            <div className="mt-4">
              <Image
                src="/homepage/3.png" // Replace with your feature image path
                alt="Feature 3"
                width={80}
                height={80}
                className="mx-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}