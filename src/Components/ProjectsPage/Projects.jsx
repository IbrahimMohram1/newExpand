import React, { useContext, useEffect } from "react";
import MainSection from "../MainSection/MainSection";
import MainImage from "../../assets/Projects.jfif";
import SecSection from "../SecondSection/SecSection";
import SwiperProjects from "../SwiperProjects/SwiperProjects";
import TrustedBy from "../TrustedBy/TrustedBy";
import { ContextData } from "../Context/ContextData";
import { Link, NavLink, useParams } from "react-router-dom";

export default function Projects() {
  const { GetPrjocts, Projects } = useContext(ContextData);
  const { id } = useParams();

  // البحث عن المشروع المحدد باستخدام id
  const project = Projects.find((project) => project.id === parseInt(id));

  // استدعاء GetPrjocts عند تغيير id
  useEffect(() => {
    GetPrjocts();
  }, [id]);

  return (
    <>
      <MainSection image={MainImage} text="Projects" />

      <div className="container my-5">
        <h2 className="mainColor font-semibold text-xl">
          Expand Trading Co. Major Projects Summary
        </h2>
        <p className="text-sm my-3">
          In our large-scale projects such as King Abdulaziz Airport, King
          Khalid Airport, the Red Sea Project, Taif Airport, and the Haramain
          Project, we utilized all our diverse services to ensure comprehensive
          and high-quality solutions. Our services include:
        </p>
        <div className="w-[85%] mx-auto overflow-hidden">
          <div className="flex justify-center md:flex-row flex-col text-center flex-wrap">
            {Projects.length > 0 ? (
              Projects.map((project) => (
                <NavLink to={`/Projects/${project.id}`} key={project.id}>
                  <div className="md:w-full mx-2 my-2 text-nowrap flex-wrap flex justify-center items-center">
                    <p className="text-xs text-center noLineHeight">
                      {project.name}
                    </p>
                  </div>
                </NavLink>
              ))
            ) : (
              <p>No Projects Found</p>
            )}
          </div>
        </div>

        <SwiperProjects />

        {/* عرض تفاصيل المشروع المحدد */}
        {project ? (
          <div className="flex justify-center items-center flex-col md:flex-row gap-x-5">
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex justify-center md:flex-row flex-col text-left flex-wrap ">
                {project.ProjectsServices?.length > 0 ? (
                  project.ProjectsServices.map((projectService, index) => (
                    <div key={index} className="p-2">
                      <h2 className="font-semibold text-xl mainColor">
                        {projectService.title}
                      </h2>
                      <p className="text-sm">{projectService.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No Services Found for {project.name}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Project Not Found</p>
        )}
      </div>

      {/* عرض قائمة المشاريع */}

      <div className="container">
        {project ? (
          <div className="flex justify-start md:flex-row flex-col text-left flex-wrap">
            <h2 className="mainColor text-xl font-semibold V-text">
              {project.name}
            </h2>
            <p className="text-sm my-1">{project.description}</p>
          </div>
        ) : (
          <p>No Found Details for {project.name}</p>
        )}
      </div>
      <TrustedBy />
    </>
  );
}
