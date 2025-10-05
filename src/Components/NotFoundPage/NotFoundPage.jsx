import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <section class="bg-slate-500">
        <div class="py-8 px-4 mx-auto   ">
          <div class="mx-auto max-w-screen-sm text-center flex justify-center items-center flex-col  h-screen ">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
              Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-white ">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to={"/"}
              class="inline-flex text-white bg-[#2C2A61] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
