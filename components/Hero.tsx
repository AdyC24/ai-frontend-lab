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
  const variants = {
    light: {
      section: "bg-white text-gray-900",
      heading: "text-gray-900",
      paragraph: "text-gray-600",
    },
    dark: {
      section: "bg-gray-900 text-white",
      heading: "text-white",
      paragraph: "text-gray-300",
    },
  };

  const variant = variants[background];

  return (
    <section className={`w-full ${variant.section} relative`}>
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className={`text-4xl md:text-5xl font-bold ${variant.heading} leading-tight`}>
            {title}
          </h1>
          <p className={`mt-6 text-lg ${variant.paragraph}`}>
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

