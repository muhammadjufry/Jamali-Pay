"use client";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { Auth } from "aws-amplify";

type Props = {};

function Page({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);
  const [timeRedirect, setTimeRedirect] = useState(3);
  const [newPassword, setNewPassword] = useState({ value: "", isValid: true });
  const [confirmationCode, setNewConfirmationCode] = useState({
    value: "",
    isValid: true,
  });
  const router = useRouter();
  const urlParams = useSearchParams();
  const email = urlParams.get("email");

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

  const updatePassword = async (e: any) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    if (!confirmationCode.value) {
      setNewConfirmationCode({ value: "", isValid: false });
      return;
    }
    if (!newPassword.value) {
      setNewPassword({ value: "", isValid: false });
      return;
    }

    try {
      await Auth.forgotPasswordSubmit(
        email,
        confirmationCode.value,
        newPassword.value
      );
      setIsOpen(true);
      setKey(key + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const setInput =
    (setter: (inp: { value: string; isValid: boolean }) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter({ value: e.target.value, isValid: true });
    };
  return (
    <>
      {isOpen && (
        <Modal
          key={key}
          open={isOpen}
          iconType="success"
          title="Your Password has been changed!"
          desc={`You will be redirected to the login page in ${timeRedirect} secs.`}
          buttons={[]}
        />
      )}
      <div className="h-screen flex items-center dark:bg-slate-900 bg-gray-100">
        <div className="w-full max-w-md mx-auto p-6 mt-12">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Reset Password
                </h1>
              </div>
              <form className="mt-8" onSubmit={updatePassword}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="password"
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
                        onChange={setInput(setNewConfirmationCode)}
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
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca]"
                        required
                        value={newPassword.value}
                        onChange={setInput(setNewPassword)}
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
                  </div>
                  {/* End Form Group */}
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Change password
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
