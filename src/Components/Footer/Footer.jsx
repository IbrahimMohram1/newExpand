import React from "react";
import image from "../../assets/footerImage.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section className="bg-[#2C2A61] p-7  overflow-hidden">
        <div className="w-full">
          <div className="flex md:justify-around items-center md:flex-row flex-col text-white flex-wrap lg:gap-x-6 md:gap-4 gap-2  justify-start text-center mx-auto">
            <div className="md:w-1/3 w-full flex justify-center max-w-fit ">
              <img src={image} className="h-16" />
            </div>
            <div className="md:w-1/3 max-w-fit w-full flex justify-start items-start  flex-col  ">
              <div className="flex md:justify-start items-center my-2 gap-x-3 justify-center ">
                <div className="w-6 h-6 rounded-full bg-white text-black text-xs flex justify-center items-center">
                  <FiPhone />
                </div>
                <p>+966125810342</p>
              </div>
              <div className="flex md:justify-start items-center my-2 gap-x-3 justify-center">
                <div className="w-6 h-6 rounded-full bg-white text-black text-xs flex justify-center items-center">
                  <HiOutlineMail />
                </div>{" "}
                <p>info@expand.com.sa</p>
              </div>
            </div>
            <div className="md:w-1/3 w-full  max-w-fit">
              <ul className="flex justify-around md:flex-row flex-col md:gap-x-5 gap-y-2 text-nowrap flex-wrap">
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/about"}>
                  <li>About Us</li>
                </Link>
                <Link to={`/services/1`}>
                  {" "}
                  <li>Services</li>
                </Link>
                <Link to={"/Projects/101"}>
                  {" "}
                  <li>Projects</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
