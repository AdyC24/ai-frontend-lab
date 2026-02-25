// src/components/Hero.tsx

import React from "react";

type HeroProps = {
  title: string;
  description: string;
  background?: "light" | "dark";
  primaryCta?: string;
  secondaryCta?: string;
  imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ 
  title, 
  description, 
  background = "light", 
  primaryCta = "Reserve Now", 
  secondaryCta =  "View Menu", 
  imageUrl = "https://images.unsplash.com/photo-1604908554027-1d9c43e35a9b" 
}) => {
  const isDark = background === "dark";

  const sectionClass = isDark 
    ? "bg-gray-900 text-white" 
    : "bg-white text-gray-900";

  const headingClass = isDark 
    ? "text-white" : "text-gray-900";

  const paragraphClass = isDark
    ? "text-gray-300"
    : "text-gray-600";

  return (
    <section className={`w-full ${sectionClass}`}>
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className={`text-4xl md:text-5xl font-bold ${headingClass} leading-tight`}>
            {title}
          </h1>
          <p className={`mt-6 text-lg ${paragraphClass}`}>
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300">
              {primaryCta}
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300">
              {secondaryCta}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={imageUrl} 
              alt="Hero Image" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

