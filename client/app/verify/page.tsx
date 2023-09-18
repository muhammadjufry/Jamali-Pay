"use client";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useSearchParams, useRouter } from "next/navigation";
import Modal from "@/components/Modal";

type Props = {};

function Page({}: Props) {
  const [confirmationCode, setConfirmationCode] = useState({
    value: "",
    isValid: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const urlParams = useSearchParams();
  const router = useRouter();
  const email = urlParams.get("pending_verification_email");
  const [seconds, setSeconds] = useState(3);
  const [key, setKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (seconds === 0) {
      router.push("/login");
    }
    setTimeout(() => {
      setInterval(() => {
        if (seconds > 0 && isOpen === true) {
          setSeconds(seconds - 1);
        }
      }, 1000);
      router.push("/login");
    }, 3000);
  }, [isOpen, seconds, router]);

  const handleConfirmUser = async (e: any) => {
    e.preventDefault();
    if (!confirmationCode) {
      setConfirmationCode({ value: "", isValid: false });
      return;
    }

    setIsLoading(true);

    if (typeof window === "undefined") {
      return;
    }

    if (!email) {
      return;
    }

    try {
      await Auth.confirmSignUp(email, confirmationCode.value);
      localStorage.removeItem("pending_verification_email");
      setIsOpen(true);
      setKey(key + 1);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };
  return (
    <>
      {isOpen && (
        <Modal
          key={key}
          open={isOpen}
          iconType="success"
          title="Your account successfully verified"
          desc={`We will redirect you to login page after ${seconds} seconds`}
          buttons={[]}
        />
      )}
      <div className="h-screen flex items-center dark:bg-slate-900 bg-gray-100">
        <div className="w-full max-w-md mx-auto p-6 mt-12">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Verify your account
                </h1>
              </div>
              <form className="mt-8" onSubmit={handleConfirmUser}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="confirmationCode"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Confirmation Code
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="confirmationCode"
                        name="confirmationCode"
                        className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca]"
                        required
                        value={confirmationCode.value}
                        onChange={(e) =>
                          setConfirmationCode({
                            value: e.target.value,
                            isValid: true,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* End Form Group */}
                  <button
                    type="submit"
                    className="py-3 px-4 flex justify-center items-center gap-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Verify
                    <div
                      className={`items-center justify-center ${
                        isLoading === true ? "flex" : "hidden"
                      }`}
                    >
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Page;
