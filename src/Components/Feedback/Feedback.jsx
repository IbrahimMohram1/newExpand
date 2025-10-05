import React, { useContext, useRef } from "react";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";
import Slider from "react-slick";
import Rarrow from "../../assets/RightArrow.png";
import Larrow from "../../assets/LeftArrow.png";
import menIcon from "../../assets/menIcon.png";
export default function Feedback() {
  const { Feedback, getFeedBack } = useContext(ContextData);
  const FeedBackSlider = useRef(null);
  const FeedBackSwiper = useRef(null);

  useEffect(() => {
    getFeedBack();
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        {/* تصميم الشيفرون - سهمين رمادي وسهم برتقالي */}
        <img
          src={Rarrow}
          alt="Next Arrow"
          style={{
            width: "50px",
            height: "20px",
          }}
        />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        {/* تصميم الشيفرون - سهمين رمادي وسهم برتقالي */}
        <img
          src={Larrow}
          alt="Prev Arrow"
          style={{
            width: "50px",
            height: "20px",
          }}
        />
      </div>
    );
  }
  const settings = {
    infinite: true,
    autoplay: false, // إيقاف الـ autoplay لو فيه id
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <>
      <div
        className="container mx-auto my-8 overflow-hidden"
        ref={FeedBackSwiper}
      >
        <div className="flex justify-center items-center ">
          <Slider
            ref={FeedBackSlider}
            {...settings}
            key={Feedback.length} // Add this to force re-render when data changes
          >
            {" "}
            {Feedback.length > 0 ? (
              Feedback.map((item) => (
                <div className="flex " key={item.id}>
                  <div className=" bg-white border p-4 h-72 flex flex-col gap-0 rounded-lg shadow-lg  mx-1 ">
                    {/* أيقونة الاقتباس */}
                    <div>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 57.00 57.00"
                        fill="#BDC3C7"
                        width={"80px"}
                        height={"80px"}
                      >
                        <g id="SVGRepo_iconCarrier w-full h-full ">
                          {" "}
                          <g>
                            {" "}
                            <circle cx="18.5" cy="31.5" r="5.5"></circle>{" "}
                            <path d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"></path>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <circle cx="35.5" cy="31.5" r="5.5"></circle>{" "}
                            <path d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"></path>{" "}
                          </g>{" "}
                          <path d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"></path>{" "}
                          <path d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"></path>{" "}
                        </g>
                      </svg>
                    </div>

                    {/* نص التعليق */}
                    <p className="text-base leading-[24px] text-black  mb-5 flex items-center p-0 m-0">
                      {item.comment}
                    </p>

                    {/* معلومات العميل */}
                    <div className="flex items-center justify-between w-[80%] mr-auto">
                      <div className="flex  flex-row ">
                        <div className="w-10 h-10 rounded-full">
                          <img src={menIcon} />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-xs text-blue-500">
                            {item.position}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className="mainColor text-lg">
                              ★
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* التقييم بالنجوم */}
                  </div>
                </div>
              ))
            ) : (
              <p>No feedback available</p>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
