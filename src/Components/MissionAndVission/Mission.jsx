import React, { useContext } from "react";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";

export default function Mission() {
  let { MissionAndVision, Mission } = useContext(ContextData);
  useEffect(() => {
    MissionAndVision();
  }, [Mission]);
  return (
    <>
      <div className="container">
        <h2 className="mainColor text-xl font-semibold text-center my-3">
          Our Mission
        </h2>
        <ul className="list-decimal marker:text-xs">
          {Mission.mission?.length > 0
            ? Mission.mission.map((item, index) => (
                <li
                  key={item.id}
                  className={`${
                    index == 0 &&
                    `border-t  border-red-600    border-spacing-6 outline-4 border-x `
                  }   my-4 shadow-md border-1 text-sm p-2 rounded-md  border-dashed `}
                >
                  <span>{item.title}</span>: {item.description}
                </li>
              ))
            : "No found Mission"}
        </ul>
        <h2 className="mainColor text-xl font-semibold text-center my-3">
          Our Vission
        </h2>
        <ul className="list-decimal marker:text-xs">
          {Mission.mission?.length > 0
            ? Mission.vision.map((item, index) => (
                <li
                  key={item.id}
                  className={`${
                    index == Mission.vision.length - 1 &&
                    `border-b  border-red-600    border-spacing-6 outline-4 border-x `
                  }   my-4 shadow-md border-1 text-sm p-2 rounded-md  border-double `}
                >
                  <span className="font-semibold text-xs">{item.title}</span>:{" "}
                  {item.description}
                </li>
              ))
            : "No found Mission"}
        </ul>
      </div>
    </>
  );
}
