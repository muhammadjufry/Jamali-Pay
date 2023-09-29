"use client";
import BanksTicker from "@/components/BanksTicker";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useGetUser } from "@/hooks/useSyncUser";

type Props = {};

function Page({}: Props) {
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getUser, getUserData } = useGetUser();

  useEffect(() => {
    getUser();
    if (getUserData) {
      router.push("/");
    }
  }, [getUserData]);

  const setInput =
    (setter: (inp: { value: string; isValid: boolean }) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter({ value: e.target.value, isValid: true });
    };

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    if (!email.value) {
      setEmail({ value: "", isValid: false });
      setError("Email should not empty!");
      return;
    }

    if (!password.value) {
      setPassword({ value: "", isValid: false });
      setError("Password should not empty!");
      return;
    }

    setIsLoading(true);

    try {
      await Auth.signIn({ username: email.value, password: password.value });
      setError("");
      router.push("/");
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }

    setIsLoading(false);
  };
  return (
    <>
      {/* Hero */}
      <div className="relative max-w-[85rem] lg:grid lg:grid-cols-2 lg:h-screen mx-auto flex flex-col">
        <div className="lg:mx-auto flex lg:items-center p-8 sm:px-6 lg:py-20 lg:py-32 lg:px-8 h-full">
          <div className="lg:pr-8">
            {/* Title */}
            <h1 className="text-3xl text-gray-800 font-bold lg:text-4xl lg:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
              Login to Jamali Pay
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Access to your busniess at Jamali Pay and start managing your
              payments
            </p>
            {/* End Title */}
            <div className="mt-8 grid">
              <button
                type="button"
                className="py-3 px-4 outline-none inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle"
              >
                <Image
                  src="/icons/google.png"
                  width={20}
                  height={20}
                  alt="Google Icon"
                />
                Login with Google
              </button>
            </div>
            <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>
            {/* Form */}
            <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
              <div>
                <label
                  htmlFor="hs-hero-email-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-email-2"
                  className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca] sm:p-4"
                  placeholder="Email address"
                  value={email.value}
                  onChange={setInput(setEmail)}
                />
              </div>
              <div>
                <label
                  htmlFor="hs-hero-password-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Password</span>
                </label>
                <input
                  type="password"
                  className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca] sm:p-4"
                  placeholder="Password"
                  value={password.value}
                  onChange={setInput(setPassword)}
                />
                <Link href="/forgot-password" className="mt-2 block">
                  <span className="text-blue-500 hover:text-blue-600 text-[15px]">
                    Forgot Password?
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                {error.length > 0 && (
                  <div className="text-red-500 text-[15px]">{error}</div>
                )}
                <button
                  type="submit"
                  className="py-3 px-4 flex justify-center items-center gap-4 rounded-md border border-transparent font-semibold bg-blue-500 text-white"
                >
                  Login
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
            {/* End Form */}
            <p className="mt-4 text-gray-500">
              Do not have an account?
              <Link href="/signup">
                <span className="text-blue-500 hover:text-blue-600 text-[15px]">
                  {" "}
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-300 to-blue-500 text-white p-8 lg:p-16">
          <div className="h-full flex flex-col">
            <div>
              <h2 className="lg:text-4xl text-3xl font-bold">Jamali Pay</h2>
              <h4 className="lg:text-2xl text-xl lg:mt-6 mt-4 leading-9 font-semibold">
                The best payment gateway solution for SaaS busniess
              </h4>
              <h4 className="lg:text-2xl text-xl lg:mt-14 mt-7 leading-8 font-semibold">
                We Support all banks in the world:
              </h4>
            </div>
            <div className="mt-8">
              <BanksTicker />
            </div>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Hero */}
    </>
  );
}

export default Page;
