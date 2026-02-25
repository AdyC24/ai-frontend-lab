// src/components/Hero.tsx

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Authentic Indonesian Cuisine <br className="hidden md:block" />
            with a Modern Touch
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Experience the rich flavors of Nusantara served in a clean,
            modern, and comfortable atmosphere for family and friends.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300">
              Reserve a Table
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300">
              View Menu
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1604908554027-1d9c43e35a9b"
              alt="Indonesian Food"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;