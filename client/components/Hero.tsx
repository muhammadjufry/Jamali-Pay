import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  desc: string;
  buttons: {
    text: string;
    link: string;
    active: boolean;
  }[];
  img: string;
  imgWidth: number;
  imgHeight: number;
};

function Hero({ title, desc, buttons, img, imgWidth, imgHeight }: Props) {
  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mt-24 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block font-bold text-gray-800 text-3xl md:text-5xl dark:text-white md:!leading-[65px]">
              {title}
            </h1>
            <p className="mt-6 text-lg text-gray-800 leading-8 dark:text-gray-400">
              {desc}
            </p>
            <div className="mt-6 flex items-center gap-2 sm:gap-3">
              {buttons.length > 0 &&
                buttons.map((button, index) => (
                  <Link
                    key={index}
                    className={`w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center border-2 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 ${
                      button.active === true
                        ? "bg-blue-600 hover:bg-blue-700 text-white border-transparent"
                        : "bg-white text-black border-blue-700"
                    }`}
                    href={button.link}
                    passHref
                  >
                    {button.text}
                  </Link>
                ))}
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <Image
              className="w-full rounded-xl"
              src={img}
              alt="Image Description"
              width={imgWidth}
              height={imgHeight}
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}

export default Hero;
