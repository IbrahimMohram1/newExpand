import React, { useContext, useEffect } from "react";
import { ContextData } from "../Context/ContextData";

export default function TrustedBy() {
  let { TrustedBy, TrustedByData } = useContext(ContextData);
  useEffect(() => {
    TrustedBy();
  }, []);

  return (
    <>
      <div className="w-full bg-[#fff]  md:p-2 md:my-5 my-0">
        <h2 className="mainColor text-center text-2xl font-bold mainColor ">
          Trusted by
        </h2>
        <div className="w-3/4 mx-auto py-4">
          <div className="flex justify-center items-center md:flex-row flex-col text-center gap-y-4 ">
            {TrustedByData.length > 0 ? (
              TrustedByData.map((client, index) => (
                <div
                  key={index}
                  className="md:w-1/6 w-full flex justify-center items-center my-2 "
                >
                  <img
                    src={client.image}
                    className="w-1/2 grayscale hover:grayscale-0 duration-500 "
                  />
                </div>
              ))
            ) : (
              <p>No Clients</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
