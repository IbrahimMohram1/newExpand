import React from "react";

export default function MainSection({ image, text }) {
  return (
    <>
      <section className="w-full min-h-[80vh] flex flex-col justify-center relative">
        <div className="w-full h-full  absolute inset-0 z-0">
          <img
            src={image}
            alt="Hero Background"
            className="w-full h-full object-cover imageResponsive"
            style={{
              objectPosition: "42%", // للشاشات الصغيرة
              "@media (minWidth: 768px)": {
                // 768px هو حجم md في Tailwind الافتراضي
                objectPosition: "50% 50%", // للشاشات المتوسطة وما فوق
              },
            }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="w-[90%] md:w-full mx-auto my-5">
            <div className="w-full md:w-full flex items-center justify-center text-center gap-y-4 text-white">
              <h1 className="text-4xl uppercase md:text-6xl lg:text-6xl font-bold leading-tight text-center ml-16">
                {text}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
