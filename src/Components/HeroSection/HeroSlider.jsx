import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import HeroImage from "../../assets/HomeCover.jpg";
import { Link } from "react-router-dom";


export default function HeroSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Manufacture & Distribution",
      description:
        "Products are expertly manufactured to align with client-specific designs, ensuring accuracy and top-tier quality.",
    },
    {
      id: 2,
      title: "Products",
      description:
        "A wide selection of reliable products is available, tailored to suit various industries and client demands.",
    },
    {
      id: 3,
      title: "Install",
      description:
        "Certified professionals deliver seamless, efficient installations with minimal disruption.",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center p-5 relative">
      {/* الصورة كخلفية */}
      <div className="w-full h-full absolute inset-0 z-0">
        <img
          src={HeroImage} // غير المسار ده لصورة حقيقية
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* النص والأزرار */}
      <div className="w-3/4 mx-auto">
        <div className="relative z-10 flex items-start justify-start h-full">
          <div className="w-full md:w-1/2 lg:w-1/2 text-left text-white">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-4">
          Powering Giga-Projects with Global Procurement & Supply Solutions
            </h1>
            <p className="text-base md:text-lg mb-8">
           Expand
delivers reliable equipment and tailored solutions for mega-projects across the region.
            </p>
            <div className="flex gap-x-5">
            <Link to={"/about"}>
              <button className="bg-[#D74D1E] text-white py-2 px-4 rounded-md hover:bg-[#c6451a] transition duration-300">
               Request a Quote
              </button>
            </Link>
              <a download href="/expand_profile.pdf"   rel="noopener noreferrer"   target="_blank" className="bg-[#D74D1E] text-white py-2 px-4 rounded-md hover:bg-[#c6451a] transition duration-300">
                Download  Profile
              </a>
          </div>
          </div>
        </div>
      </div>

      {/* الـ HR والعناصر التحتية */}
      <div className="absolute md:bottom-5 bottom-0 left-0 right-0 z-10 w-full md:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center  mt-2 p-2 gap-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`md:w-1/3 w-full md:border-t-2  md:border-[#fff] md:border-1 ${
                hoveredId === section.id ? "" : "mx-0"
              }`}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-start gap-x-2 text-white flex-col mt-2">
                <div className="flex flex-row gap-x-2 duration-1000 ">
                  {hoveredId === section.id ? (
                    <IoIosArrowDown className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                  ) : (
                    <IoIosArrowUp className="rounded-full bg-[#D74D1E] p-1 transition-all duration-1000" />
                  )}
                  <p className="text-[20px]">{section.title}</p>
                </div>
                <span
                  className={`w-[85%] text-left text-xs transition-all duration-500 overflow-hidden mt-2 ${
                    hoveredId === section.id
                      ? "h-auto max-h-40 opacity-100 mb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {section.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
