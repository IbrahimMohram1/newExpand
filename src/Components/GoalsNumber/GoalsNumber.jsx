import React, { useContext } from "react";
import counterImage from "../../assets/Counter.jpg";
import * as icons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";
export default function GoalsNumber() {
  let { GetCounter, CounterData } = useContext(ContextData);
  useEffect(() => {
    GetCounter();
  }, []);
  return (
    <>
      <div className="relative w-full h-[400px] md:h-64 bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
        {/* الصورة مع الفلتر */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${counterImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>

        {/* العنوان */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h2 className="text-xl md:text-2xl font-bold">
            Our Goals in <span className="text-orange-500">Numbers</span>
          </h2>
        </div>

        {/* المحتوى */}
        <div className="w-full h-full grid  mt-24 md:mt-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center text-center px-5 py-5 relative z-10">
          {CounterData.length > 0 ? (
            CounterData.map((item, index) => {
              const IconComponent = icons[item.icon] || tbIcons[item.icon];
              return (
                <div
                  key={index}
                  className="text-center p-4 text-2xl flex justify-center items-center flex-col gap-y-2"
                >
                  {IconComponent && (
                    <IconComponent className="text-center flex justify-center " />
                  )}
                  <p className="text-xl md:text-2xl font-bold ">{item.value}</p>
                  <p className="text-sm md:text-base">{item.label}</p>
                </div>
              );
            })
          ) : (
            <p className="col-span-full">Loading...........</p>
          )}
        </div>
      </div>
    </>
  );
}
