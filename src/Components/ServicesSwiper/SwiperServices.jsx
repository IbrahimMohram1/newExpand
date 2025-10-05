import React, { useContext, useEffect, useState, useRef } from "react";
import * as icons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as faIcons from "react-icons/fa"; // FontAwesome
import * as mdIcons from "react-icons/md"; // Material Design
import * as fiIcons from "react-icons/fi";
import * as giIcons from "react-icons/gi";
import { ContextData } from "../Context/ContextData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Rarrow from "../../assets/RightArrow.png";
import Larrow from "../../assets/LeftArrow.png";
import { useMediaQuery } from "react-responsive";
import { div } from "motion/react-client";

export default function SwiperServices() {
  const { GetServices, Services } = useContext(ContextData);
  const { id } = useParams(); // جلب ID من ال URL لمعرفة الخدمة النشطة
  const [loading, setLoading] = useState(true);
  const [initialSlide, setInitialSlide] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const isMediumOrLarger = useMediaQuery({ query: "(min-width: 768px)" }); // md breakpoint في TailwindCSS

  useEffect(() => {
    const fetchServices = async () => {
      try {
        await GetServices();
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (Services.length > 0 && id) {
      const index = Services.findIndex(
        (service) => service.id.toString() === id,
      );
      if (index !== -1) {
        setInitialSlide(index);
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index); // تحديث الـ Swiper ليركز على الـ slide الصحيحة
        }
      }
    }
  }, [id, Services]);

  // تعريف دالة لتطبيق تأثيرات الهوفر على الشرائح النشطة
  // const setupHoverEffects = () => {
  //   if (!containerRef.current) return;

  //   const allSlides = containerRef.current.querySelectorAll(".slick-slide");

  //   // إزالة مستمعات الأحداث القديمة أولاً
  //   allSlides.forEach((slide) => {
  //     if (slide.handleMouseEnter) {
  //       slide.removeEventListener("mouseenter", slide.handleMouseEnter);
  //       delete slide.handleMouseEnter;
  //     }
  //     if (slide.handleMouseLeave) {
  //       slide.removeEventListener("mouseleave", slide.handleMouseLeave);
  //       delete slide.handleMouseLeave;
  //     }
  //   });

  //   // حفظ العرض الأصلي لجميع الشرائح
  //   allSlides.forEach((slide) => {
  //     if (!slide.dataset.originalWidth) {
  //       const style = window.getComputedStyle(slide);
  //       slide.dataset.originalWidth = parseFloat(style.width);
  //     }
  //   });

  //   // إضافة مستمعات أحداث للشرائح النشطة فقط
  //   allSlides.forEach((slide) => {
  //     if (slide.getAttribute("aria-hidden") === "false") {
  //       const handleMouseEnter = () => {
  //         // زيادة عرض الـ slide التي عليها hover
  //         slide.style.width = `${slide.dataset.originalWidth * 2.2}px`;

  //         // تقليل عرض العناصر الباقية
  //         allSlides.forEach((otherSlide) => {
  //           if (
  //             otherSlide !== slide &&
  //             otherSlide.getAttribute("aria-hidden") === "false"
  //           ) {
  //             otherSlide.style.width = `${
  //               otherSlide.dataset.originalWidth * 0.7
  //             }px`;
  //           }
  //         });
  //       };

  //       const handleMouseLeave = () => {
  //         // إعادة جميع العناصر لعرضها الأصلي
  //         allSlides.forEach((s) => {
  //           if (s.dataset.originalWidth) {
  //             s.style.width = `${s.dataset.originalWidth}px`;
  //           }
  //         });
  //       };

  //       // إضافة مستمعات الأحداث
  //       slide.addEventListener("mouseenter", handleMouseEnter);
  //       slide.addEventListener("mouseleave", handleMouseLeave);

  //       // حفظ مراجع للدوال
  //       slide.handleMouseEnter = handleMouseEnter;
  //       slide.handleMouseLeave = handleMouseLeave;
  //     }
  //   });
  // };
  // // دالة لمعالجة تغيير الشريحة
  // const handleAfterChange = () => {
  //   // تطبيق تأثيرات الهوفر بعد التغيير
  //   setTimeout(setupHoverEffects, 20); // تأخير صغير للتأكد من اكتمال عملية التغيير
  // };
  // تأثير لإضافة مستمعات الأحداث في البداية وعند تغير البيانات
  // useEffect(() => {
  //   if (!id && containerRef.current && Services.length > 0) {
  //     // تأخير صغير للتأكد من رسم السلايدر بشكل كامل
  //     setTimeout(setupHoverEffects, 100);
  //   }
  // }, [id, Services]);

  // تطبيق تأثير الهوفر في حالة وجود ID محدد
  useEffect(() => {
    if (isMediumOrLarger && sliderRef.current && Services.length > 0 && id) {
      // تعريف دالة لتطبيق التأثير المطلوب على الشريحة النشطة
      const setupActiveSlideEffect = () => {
        const slides = document.querySelectorAll(".slick-slide");

        // حفظ العرض الأصلي لجميع الشرائح إذا لم يتم حفظه من قبل
        slides.forEach((slide) => {
          if (!slide.dataset.originalWidth) {
            const computedStyle = window.getComputedStyle(slide);
            slide.dataset.originalWidth = parseFloat(computedStyle.width);
          }
        });

        // البحث عن الشريحة النشطة بناءً على المعرف
        const serviceIndex = Services.findIndex(
          (service) => service.id.toString() === id,
        );

        const targetSlide = document.querySelector(
          `.slick-slide[data-index="${serviceIndex}"]`,
        );

        // إعادة جميع الشرائح إلى العرض الأصلي أولاً
        slides.forEach((slide) => {
          if (slide.dataset.originalWidth) {
            slide.style.width = `${slide.dataset.originalWidth}px`;
          }
        });

        // تطبيق التأثير على الشريحة النشطة (المستهدفة)
        if (targetSlide) {
          const originalWidth = parseFloat(
            targetSlide.dataset.originalWidth || 0,
          );
          if (originalWidth) {
            // زيادة عرض الشريحة النشطة
            targetSlide.style.width = `${originalWidth * 2.2}px`;

            // تقليل عرض الشرائح المرئية الأخرى
            slides.forEach((slide) => {
              if (
                slide !== targetSlide &&
                slide.getAttribute("aria-hidden") === "false"
              ) {
                const slideOriginalWidth = parseFloat(
                  slide.dataset.originalWidth,
                );
                slide.style.width = `${slideOriginalWidth * 0.7}px`;
              }
            });
          }
        }
      };

      // تنفيذ مرة واحدة فقط عند تغيير id أو Services
      setTimeout(setupActiveSlideEffect, 100);

      // إضافة حدث عند تغيير الشريحة (اختياري - إذا كنت تريد)
      const slider = document.querySelector(".slick-slider");
      if (slider) {
        const handleAfterChange = () => {
          setTimeout(setupActiveSlideEffect, 50);
        };

        slider.addEventListener("afterChange", handleAfterChange);

        // تنظيف
        return () => {
          slider.removeEventListener("afterChange", handleAfterChange);
        };
      }
    }
  }, [id, Services, isMediumOrLarger]);
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
    slidesToShow: !id?3:5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: initialSlide, // تحديد الـ initialSlide
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: !!id,
    // afterChange: !id && isMediumOrLarger ? handleAfterChange : null, // إضافة afterChange callback فقط في الشاشات الكبيرة

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    // <div className="container mx-auto my-5 overflow-hidden" ref={containerRef}>
    //   <div className="flex justify-center items-center gap-x-10">
    //     <Slider ref={sliderRef} {...settings}>
    //       {Services.length > 0 ? (
    //         Services.map((service) => {
    //           const IconComponent =
    //             icons[service.icon] ||
    //             tbIcons[service.icon] ||
    //             faIcons[service.icon] ||
    //             mdIcons[service.icon] ||
    //             fiIcons[service.icon] ||
    //             giIcons[service.icon] ||
    //             faIcons.FaQuestionCircle; // Fallback icon

    //           const isActive = service.id.toString() === id;

    //           return (
    //             <Link to={`/services/${service.id}`} key={service.id}>
    //               <div className="relative mb-2 mx-1 group">
    //                 {/* العنصر الرئيسي */}
    //                 <div
    //                   className={`MainBg text-white p-4 rounded-lg w-full flex flex-col ${
    //                     isActive && `justify-center`
    //                   } justify-start items-center h-80 shadow-lg transition-all duration-300 ${
    //                     isActive ? "scale-100" : ""
    //                   }`}
    //                   style={{
    //                     backgroundImage: isActive
    //                       ? `url(${service.image})`
    //                       : "none",
    //                     backgroundSize: "cover",
    //                     backgroundPosition: "center",
    //                     borderRadius: isActive ? "0.3rem" : "",
    //                   }}
    //                 >
    //                   {/* المحتوى الأساسي */}
    //                   <div className="mt-3">
    //                     {IconComponent && (
    //                       <IconComponent
    //                         className={`text-3xl ${isActive && `text-5xl`}`}
    //                       />
    //                     )}
    //                   </div>
    //                   <div className="">
    //                     <p
    //                       className={`mt-4 font-semibold ${
    //                         !isActive
    //                           ? `V-Text text-xl`
    //                           : `writing-horizontal-tb text-2xl`
    //                       }`}
    //                     >
    //                       {service.title}
    //                     </p>
    //                   </div>

    //                   {/* طبقة الهوفر المعدلة */}
    //                   {!id && (
    //                     <div className="absolute inset-0 rounded-lg overflow-hidden">
    //                       {/* طبقة الصورة مع الفلتر */}
    //                       <div
    //                         className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    //                         style={{
    //                           backgroundImage: `url(${service.image})`,
    //                           filter: "brightness(0.5)",
    //                         }}
    //                       ></div>

    //                       {/* طبقة المحتوى فوق الفلتر */}
    //                       <div className="absolute inset-0 z-10 flex justify-center items-center flex-col text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    //                         <div className="flex items-center gap-y-3 flex-col space-x-2 w-full">
    //                           {IconComponent && (
    //                             <IconComponent className="text-3xl flex-shrink-0 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]" />
    //                           )}
    //                           <p className="text-xl flex-grow text-start text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
    //                             {service.title}
    //                           </p>
    //                         </div>
    //                         <div className="mt-2">
    //                           <p className="text-xs text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
    //                             {(service?.description ?? "")
    //                               .split(" ")
    //                               .splice(0, 20)
    //                               .join(" ")}
    //                           </p>
    //                         </div>
    //                         <button className="mt-3 bg-white text-black px-4 py-1 rounded-lg text-sm text-nowrap">
    //                           View Details
    //                         </button>
    //                       </div>
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>
    //             </Link>
    //           );
    //         })
    //       ) : (
    //         <p>No Services Found</p>
    //       )}
    //     </Slider>
    //   </div>
    // </div>
  
     <div className="container mx-auto my-5 " ref={containerRef}>
      <div className="flex justify-center items-center gap-x-10">
        <Slider ref={sliderRef}  {...settings}>
          {Services.length > 0 ? (
            Services.map((service) => {
              const IconComponent =
                icons[service.icon] ||
                tbIcons[service.icon] ||
                faIcons[service.icon] ||
                mdIcons[service.icon] ||
                fiIcons[service.icon] ||
                giIcons[service.icon] ||
                faIcons.FaQuestionCircle; // Fallback icon

              const isActive = service.id.toString() === id;

              return (
                <Link to={`/services/${service.id}`} key={service.id}>
                  <div className="relative mb-2 mx-1 group">
                    {/* العنصر الرئيسي */}
                    <div
                      className={` text-white p-4 rounded-lg w-full flex flex-col ${
                        isActive && `justify-center`
                      } justify-start items-center h-80 shadow-lg transition-all duration-300 ${
                        isActive ? "scale-100" : ""
                      }`}
                      style={{
                        backgroundImage:`url(${service.image}`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: isActive ? "0.3rem" : "",
                      }}
                    >
                      {/* المحتوى الأساسي */}
                      <div className="mt-3">
                        {IconComponent && (
                          <IconComponent
                            className={`text-3xl ${isActive && `text-5xl`}`}
                          />
                        )}
                      </div>
                      <div className="">
                        <p
                          className={`mt-4 font-semibold ${
                            !isActive
                              ? `V-Text text-xl`
                              : `writing-horizontal-tb text-2xl`
                          }`}
                        >
                          {service.title}
                        </p>
                      </div>

                      {/* طبقة الهوفر المعدلة */}
                      {!id && (
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                          {/* طبقة الصورة مع الفلتر */}
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                              backgroundImage: `url(${service.image})`,
                              filter: "brightness(0.5)",
                            }}
                          ></div>

                          {/* طبقة المحتوى فوق الفلتر */}
                          <div className="absolute inset-0 z-10 flex justify-center items-center flex-col text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="flex items-center gap-y-3 flex-col space-x-2 w-full">
                              {IconComponent && (
                                <IconComponent className="text-3xl flex-shrink-0 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]" />
                              )}
                              <p className="text-xl flex-grow text-start text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                                {service.title}
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-xs text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
                                {(service?.description ?? "")
                                  .split(" ")
                                  .splice(0, 20)
                                  .join(" ")}
                              </p>
                            </div>
                            <button className="mt-3 bg-white text-black px-4 py-1 rounded-lg text-sm text-nowrap">
                              View Details
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No Services Found</p>
          )}
        </Slider>
      </div>
    </div>
  );
}
