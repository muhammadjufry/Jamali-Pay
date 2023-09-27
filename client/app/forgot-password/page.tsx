"use client";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useModal from "@/hooks/useModal";
type Props = {};

function Page({}: Props) {
  const modal = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [timeRedirect, setTimeRedirect] = useState(3);
  const [email, setEmail] = useState({ value: "", isValid: true });
  const router = useRouter();
  useEffect(() => {
    if (timeRedirect === 0) {
      router.push("/login");
    }
    setInterval(() => {
      if (timeRedirect > 0 && isOpen === true) {
        setTimeRedirect(timeRedirect - 1);
      }
    }, 1000);
  }, [timeRedirect, isOpen, router]);
  const setInput =
    (setter: (inp: { value: string; isValid: boolean }) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter({ value: e.target.value, isValid: true });
    };
  const resetPassword = async (e: any) => {
    e.preventDefault();
    try {
      await Auth.forgotPassword(email.value);
      localStorage.setItem("pending_reset_password_email", email.value);
      modal.onOpen();
      router.push("/reset-password");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        iconType="success"
        title="Reset password link has been sent!"
        desc="Reset password link has been sent to your email"
        buttons={[]}
      />
      <div className="h-screen flex items-center">
        <div className="w-full max-w-md mx-auto p-6 mt-12">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="Jamali Pay"
          />
          <div className="mt-7 bg-white rounded-xl border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Forgot Password
                </h1>
              </div>
              <form className="mt-8" onSubmit={resetPassword}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca]"
                        required
                        value={email.value}
                        onChange={setInput(setEmail)}
                      />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  {/* End Form Group */}
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
