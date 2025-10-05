import React, { useEffect } from "react";

import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
import SwiperServices from "../ServicesSwiper/SwiperServices";
import { Link } from "react-router-dom";
export default function Services() {
  let { GetServices, Services } = useContext(ContextData);
  useEffect(() => {
    GetServices();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="">
          <div className="flex justify-between items-center my-2  ">
            <div>
              <h2 className="mainColor text-xl font-semibold">Our Services</h2>
            </div>
            <div>
              <Link to={`/services/1`}>
                <p className="mainColor text-sm">Discover more →</p>
              </Link>
            </div>
          </div>
          <p className="text-sm">
            From powering homes to securing industries, we deliver tailored
            solutions across electrical, safety, airport systems, marine
            equipment, EV tools, tech innovations, storage, and workshop
            equipment. Each service is crafted with precision to ensure quality,
            reliability, and forward-thinking innovation.
          </p>
        </div>
        <SwiperServices />
      </div>
    </>
  );
}
