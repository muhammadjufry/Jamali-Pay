import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="flex flex-wrap gap-14 justify-between w-full">
        <div className="col-span-full lg:col-span-1 lg:block">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            passHref
          >
            Jamali Pay
          </Link>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © 2023 Jamali Pay.
          </p>
        </div>
        <div className="flex gap-16 mb-10">
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Company
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                  passHref
                >
                  About us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Blog
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                  passHref
                >
                  Careers
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Resources
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                  passHref
                >
                  Community
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                  passHref
                >
                  Help &amp; Support
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Developers
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                  passHref
                >
                  Api
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                  passHref
                >
                  GitHub
                </Link>{" "}
                <span className="inline text-blue-600 dark:text-blue-500">
                  — New
                </span>
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
