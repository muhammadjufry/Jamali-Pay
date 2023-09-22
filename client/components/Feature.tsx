"use client";
import Link from "next/link";
import React from "react";
import BanksTicker from "./BanksTicker";

type Props = {
  infoStartFrom: string;
  featureTitle: string;
  featureDesc: string;
  learnMoreLink: string;
  OtherContent: any;
};

function Feature({
  infoStartFrom,
  featureTitle,
  featureDesc,
  learnMoreLink,
  OtherContent,
}: Props) {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-12">
          <div
            className={`lg:w-3/4 ${infoStartFrom === "right" ? "order-2" : ""}`}
          >
            <h2 className="text-3xl text-gray-800 !leading-[51px] font-bold lg:text-4xl dark:text-white">
              {featureTitle}
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              {featureDesc}
            </p>
            {learnMoreLink.length > 0 && (
              <Link href={learnMoreLink} passHref legacyBehavior>
                <span className="mt-5 cursor-pointer inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
                  Learn more
                </span>
              </Link>
            )}
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {OtherContent}
            {/* <OtherContent /> */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}

export default Feature;
