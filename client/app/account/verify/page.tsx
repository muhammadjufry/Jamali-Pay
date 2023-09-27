"use client";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import Link from "next/link";

type Props = {};

function Page({}: Props) {
  const modal = useModal();
  const [confirmationCode, setConfirmationCode] = useState({
    value: "",
    isValid: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [seconds, setSeconds] = useState(3);
  const [key, setKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmail(localStorage.getItem("pending_verification_email") || "");
    }
    if (seconds === 0) {
      router.push("/login");
    }
    if (seconds > 0 && isOpen === true) {
      setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      router.push("/login");
    }
  }, [isOpen, seconds, router]);

  const handleConfirmUser = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await Auth.confirmSignUp(email, confirmationCode.value);
      localStorage.removeItem("pending_verification_email");
      modal.onOpen();
      setIsOpen(true);
      setKey(key + 1);
    } catch (error) {
      console.error(error);
      setError("Invalid code provided, please");
    }
    setIsLoading(false);
  };
  return (
    <>
      {isOpen && (
        <Modal
          key={key}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
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
                  {error && (
                    <span className="text-red-500 text-sm dark:text-red-400 mt-2 block mb-2 w-full text-gray-700 dark:text-gray-400">
                      {error + " "}
                      <Link
                        href="/account/request-verify"
                        className=" text-blue-500 hover:underline dark:text-blue-400"
                      >
                        request code again.
                      </Link>
                    </span>
                  )}
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
