import React, { useContext, useEffect } from "react";
import { ContextData } from "../Context/ContextData";
import { Link } from "react-router-dom";

export default function Projects() {
  let { GetPrjocts, Projects } = useContext(ContextData);
  useEffect(() => {
    GetPrjocts();
  }, []);
  return (
    <>
      <div className="container my-7 ">
        <div className="  mx-auto">
          <div className="flex justify-between items-center my-2 ">
            <div>
              <h2 className="mainColor text-xl font-semibold">Our Projects</h2>
            </div>
            <div>
              <Link to={"/Projects/101"}>
                <h2 className="mainColor  text-sm">Discover more →</h2>
              </Link>
            </div>
          </div>
          <p className="text-sm ">
            Our projects are a testament to innovation and excellence. From
            tailored electrical systems to sustainable energy solutions, we
            craft impactful, client-centered outcomes that inspire success and
            build lasting partnerships. Each project reflects our commitment to
            quality, creativity, and customer satisfaction.
          </p>
          <div className="flex justify-center items-center md:flex-row flex-col gap-4 mt-4">
            {Projects.length > 0 ? (
              Projects.slice(0, 2).map((project) => (
                <div className="md:w-1/2 w-full " key={project.id}>
                  <div className="mb-8 relative rounded-lg overflow-hidden group">
                    {/* الصورة */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover"
                    />
                    {/* النص فوق الصورة */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                      <h2 className="text-xl font-bold">{project.name}</h2>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No projects available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
