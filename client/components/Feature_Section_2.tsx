import { IconBolt, IconShieldLock, IconUserBolt } from "@tabler/icons-react";
import React from "react";

type Props = {};

function Feature_Section_2({}: Props) {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Tab Nav */}
        <h2 className="text-3xl font-bold text-center mb-6">We offer</h2>
        <nav
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
          >
            <span className="flex flex-col text-left gap-4">
              <span className="w-[30px] h-[30px]">
                <IconBolt className="w-[30px] h-[30px]" />
              </span>
              <span className="md:grow flex flex-col gap-1">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Fast perfomance
                </span>
                <span className="lg:block mt-2 text-gray-800 dark:text-gray-200">
                  Send and receive money using Jamali Pay at very high
                  perfomance
                </span>
              </span>
            </span>
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
          >
            <span className="flex flex-col text-left gap-4">
              <span className="w-[30px] h-[30px]">
                <IconShieldLock className="w-[30px] h-[30px]" />
              </span>
              <span className="md:grow flex flex-col gap-1">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Secure
                </span>
                <span className="lg:block mt-2 text-gray-800 dark:text-gray-200">
                  Manage all your payments securely with Jamali Pay
                </span>
              </span>
            </span>
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
          >
            <span className="flex flex-col text-left gap-4">
              <span className="w-[30px] h-[30px]">
                <IconUserBolt className="w-[30px] h-[30px]" />
              </span>
              <span className="md:grow flex flex-col gap-1">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Easy to use
                </span>
                <span className="lg:block mt-2 text-gray-800 dark:text-gray-200">
                  Jamali Pay provide Payment Link and integrates seamlessly with
                  Webflow and Bubble.
                </span>
              </span>
            </span>
          </button>
        </nav>
        {/* End Tab Nav */}
      </div>
      {/* End Features */}
    </>
  );
}

export default Feature_Section_2;
