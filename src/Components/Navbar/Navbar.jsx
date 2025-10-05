import React, { useContext, useState } from "react";
import { FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import navLogo from "../../assets/Simplification.png";
import { TiSocialLinkedin } from "react-icons/ti";
import "flowbite";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";

export default function Navbar() {
  const [ToggleNav, setToggleNav] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  let { GetServices, Services, Projects } = useContext(ContextData);

  function toggleNavbar() {
    setToggleNav(!ToggleNav);
    // إغلاق القوائم المنسدلة عند فتح/غلق النافبار
    setServicesOpen(false);
    setProjectsOpen(false);
  }

  const closeNavbar = () => {
    if (ToggleNav) {
      setToggleNav(false);
      setServicesOpen(false);
      setProjectsOpen(false);
    }
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
    setProjectsOpen(false);
  };

  const toggleProjects = (e) => {
    e.preventDefault();
    setProjectsOpen(!projectsOpen);
    setServicesOpen(false);
  };

  // إغلاق القوائم المنسدلة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !event.target.closest("#servicesDropdownButton") &&
        !event.target.closest("#services-dropdown") &&
        !event.target.closest("#projectsDropdownButton") &&
        !event.target.closest("#projects-dropdown")
      ) {
        setServicesOpen(false);
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent w-5/6 m-auto absolute top-0 z-20 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={navLogo} className="h-10" alt="Logo" />
          </div>
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={ToggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            ToggleNav ? "block" : "hidden"
          } w-full md:block md:w-[85%] md:bg-transparent bg-[#2C2A61]`}
          id="navbar-default"
        >
          <div className="flex flex-col gap-y-2">
            <div className="border-b-[1px]">
              <ul className="font-normal flex flex-col p-4 md:gap-y-0 gap-y-2 md:p-0 md:flex-row md:space-x-6 rtl:space-x-reverse text-sm justify-end text-white mb-1">
                <li>
                  <p className="flex gap-x-2 items-center">
                    <FaPhoneAlt />
                    <a href="tel:+966125810342" className="cursor-pointer">
                      +966125810342
                    </a>
                  </p>
                </li>
                <li>
                  <p className="flex gap-x-2 items-center">
                    <FaEnvelope />
                    <a
                      href="mailto:info@expand.com.sa"
                      className="cursor-pointer"
                    >
                      info@expand.com.sa
                    </a>
                  </p>
                </li>
                <div className="flex md:p-0 p-4 gap-x-5 md:gap-x-4 items-center">
                  <TiSocialLinkedin className="text-white text-lg" />
                  <FaInstagram className="text-white text-lg" />
                  <FaXTwitter className="text-white text-lg" />
                </div>
              </ul>
            </div>

            <div>
              <ul className="font-normal flex flex-col p-4 md:p-0 md:flex-row md:space-x-6 rtl:space-x-reverse text-sm">
                <li>
                  <Link
                    onClick={closeNavbar}
                    to="/"
                    className="block px-3 py-2 text-white text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeNavbar}
                    to="about"
                    className="block px-3 py-2 text-white text-sm"
                  >
                    About Us
                  </Link>
                </li>

                <li className="relative">
                  <button
                    id="servicesDropdownButton"
                    onClick={toggleServices}
                    className="text-white text-center inline-flex items-center px-3 py-2"
                    type="button"
                  >
                    Services{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div
                      id="services-dropdown"
                      className="md:absolute relative md:top-full left-0 rounded-lg shadow-sm w-44 z-30"
                    >
                      <ul
                        className="py-2 text-xs text-white bg-[#2C2A61] text-nowrap"
                        aria-labelledby="servicesDropdownButton"
                      >
                        {Services.length > 0 ? (
                          Services.map((service) => {
                            return (
                              <Link
                                onClick={closeNavbar}
                                key={service.id}
                                to={`/services/${service.id}`}
                              >
                                <li
                                  onClick={() => {
                                    setServicesOpen(false);
                                    setProjectsOpen(false);
                                  }}
                                  className="block px-4 py-2 z-40 hover:bg-[#3B3981]"
                                >
                                  {service.title}
                                </li>
                              </Link>
                            );
                          })
                        ) : (
                          <li className="block px-4 py-2">No Services Found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </li>

                <li className="relative">
                  <button
                    id="projectsDropdownButton"
                    onClick={toggleProjects}
                    className="text-white text-center inline-flex items-center px-3 py-2"
                    type="button"
                  >
                    Projects{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {projectsOpen && (
                    <div
                      id="projects-dropdown"
                      className="md:absolute relative md:top-full left-0 rounded-lg shadow-sm w-44 z-30"
                    >
                      <ul
                        className="py-2 text-xs text-white bg-[#2C2A61] text-nowrap"
                        aria-labelledby="projectsDropdownButton"
                      >
                        {Projects.length > 0 ? (
                          Projects.map((project) => {
                            return (
                              <Link
                                onClick={closeNavbar}
                                key={project.id}
                                to={`/projects/${project.id}`}
                              >
                                <li
                                  onClick={() => {
                                    setServicesOpen(false);
                                    setProjectsOpen(false);
                                  }}
                                  className="block px-4 py-2 hover:bg-[#3B3981]"
                                >
                                  {project.name}
                                </li>
                              </Link>
                            );
                          })
                        ) : (
                          <li className="block px-4 py-2">No Projects Found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
