"use client";
import Link from "next/link";
import React from "react";
import BanksTicker from "./BanksTicker";

type Props = {};

function Feature_Section_1({}: Props) {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 leading-10 font-bold lg:text-4xl dark:text-white">
              We Supported all banks in the world
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              Send and receive money from different banks in the world securely
              with Jamali Pay at high perfomance
            </p>
            <Link href="/global-banks-support" passHref legacyBehavior>
              <span className="mt-5 cursor-pointer inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
                Learn more
              </span>
            </Link>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            <BanksTicker />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}

export default Feature_Section_1;
