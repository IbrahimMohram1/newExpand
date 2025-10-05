import React, { useContext, useEffect, useState } from "react";

import HeroSlider from "../HeroSection/HeroSlider";
import image from "../../assets/image1.png";
import image2 from "../../assets/image3.png";
import bgImage from "../../assets/linear.png";
import shunk2 from "../../assets/shunk2.jfif";
import shunk from "../../assets/f8a664f089ef8b9922492351554a44e7.jfif";

import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import { ContextData } from "../Context/ContextData";
import { TbActivityHeartbeat } from "react-icons/tb";

import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import GoalsNumber from "../GoalsNumber/GoalsNumber";
import { Link } from "react-router-dom";
import TrustedBy from "../TrustedBy/TrustedBy";
import Feedback from "../Feedback/Feedback";

export default function Home() {
  let { expandData, GetData } = useContext(ContextData);

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <HeroSlider />
      <div className="container md:my-0 my-8">
        <div className=" text-white  md:p-10 flex flex-col md:flex-row items-center mx-auto gap-6">
          <div className="md:w-1/2 w-full">
            <div className="flex items-center justify-center ">
              <img
                src={image2}
                alt="Shipping"
                className="w-40 h-40 md:w-56 md:h-56 rounded-lg shadow-lg"
              />
              <img
                src={image}
                alt="Power Lines"
                className="w-52 h-52 md:w-64 md:h-64 rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Images Section */}
          <div className="md:w-1/2 w-full">
            <div
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "5px 10px",
                backgroundRepeat: "repeat",
              }}
              className="rounded-lg"
            >
              <div className="  w-full p-5 ">
                {/* المحتوى */}
                <h2 className="text-2xl font-bold mainColor">Who We Are</h2>
                <p className="mt-2 text-black text-sm">
                Expand Trading is a trusted procurement and supply partner with operations across Saudi
Arabia, UAE, UK, and China.
We specialize in providing critical equipment and innovative solutions for industries
including electrical, safety, aviation, marine, storage, and robotics.

With direct access to top-tier global manufacturers and a dedicated local team, we ensure:
<ul className="my-3">
  <li>- Competitive pricing</li>
  <li>- Rapid delivery</li>
  <li>- Compliance with international standards</li>
</ul>
                </p>
                <div className="flex justify-end">
                  <Link to={"/about"}>
                    <p className="mainColor text-sm mt-3 inline-block">
                      Discover more →
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Who We Are */}
        </div>
      </div>

      <div className="container  my-5">
        <div className="flex justify-center items-center md:flex-row flex-col  gap-4  text-left">
          {expandData.length > 0 ? (
            expandData.map((section, index) => (
              <div key={index} className="md:w-1/2 min-h-44 w-full p-5 shadow-xl">
                <h2 className="mainColor text-xl font-semibold">
                  {section.title}
                </h2>
                <p className=" text-sm">{section.content}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <GoalsNumber />

      <Services />

      <div className="container my-9 md:mb-24">
        <div className=" mx-auto">
          <div className="flex flex-col md:flex-row gap-y-12 justify-center items-center ">
            <div className="md:w-1/2 w-full">
              <div className="relative w-full max-w-md  right-0 flex justify-center">
                {/* الصورة الكبيرة */}
                <img
                  src={shunk}
                  alt="background"
                  className="md:w-3/4 h-auto rounded-lg w-full "
                />

                {/* الصورة الصغيرة فوقها */}
                <img
                  src={shunk2}
                  alt="foreground"
                  className="absolute top-28 left-14 md:left-36 lg:left-56 md:top-32 w-44 md:w-48 lg:w-56 h-auto rounded-lg border-4  border-white shadow-lg"
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full md:mt-0 mt-8">
              {/* Who We Are */}
              <div
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "10px 10px",
                  backgroundRepeat: "repeat",
                }}
                className="rounded-lg"
              >
                <div className="  max-w-md p-5 ">
                  {/* المحتوى */}
                  <h2 className="text-2xl font-bold mainColor">
                    Why Choose Us{" "}
                  </h2>

                  <p className="mt-2 text-black text-sm w-full">
                    <ul className="flex flex-wrap gap-y-2">
                      <li>Trusted partner for large-scale projects in Saudi Arabia and abroad.</li>
                     <li> Direct factory sourcing through our China network.
</li>
                      <li> Multi-sector expertise (aviation, marine, electrical, robotics, storage).
</li>
                      <li> Proven ability to deliver on time, at scale, with precision.
</li>

                    
                    </ul>
                  </p>
                  <div className="flex justify-end">
                    <Link to={"/services/1"}>
                      <p className="mainColor text-sm mt-3 inline-block">
                        Discover more →
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustedBy />

      <Feedback />
      <Projects />
    </>
  );
}
