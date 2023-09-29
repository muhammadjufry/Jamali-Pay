"use client";
import BanksTicker from "@/components/BanksTicker";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";

type Props = {};

function Page({}: Props) {
  const router = useRouter();
  const [firstName, setFirstName] = useState({ value: "", isValid: true });
  const [lastName, setLastName] = useState({ value: "", isValid: true });
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkUser();
  }, [router]);

  const setInput =
    (setter: (inp: { value: string; isValid: boolean }) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter({ value: e.target.value, isValid: true });
    };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (!firstName.value) {
      setFirstName({ value: "", isValid: false });
      setError("Firstname should not empty!");
      return;
    }

    if (!lastName.value) {
      setLastName({ value: "", isValid: false });
      setError("Lastname should not empty!");
      return;
    }

    if (!email.value) {
      setEmail({ value: "", isValid: false });
      setError("Email({  should not empty!");
      return;
    }

    if (!password.value) {
      setPassword({ value: "", isValid: false });
      setError("Password should not empty!");
      return;
    }

    setIsLoading(true);

    try {
      await Auth.signUp({
        username: email.value,
        password: password.value,
        attributes: {
          email: email.value,
          name: `${firstName.value} ${lastName.value}`,
        },
      });
      setError("");

      localStorage.setItem("pending_verification_email", email.value);

      router.push("/account/verify");
    } catch (error: any) {
      console.error(error);
      if (
        error.message ==
        "Password does not conform to policy: Password must have uppercase characters"
      ) {
        setError("New Password must have uppercase characters");
      } else {
        setError(error.message);
      }
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
              Sign Up to Jamali Pay
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Register your busniess at Jamali Pay and start accepting payments
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
                Sign up with Google
              </button>
            </div>
            <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>
            {/* Form */}
            <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
              <div>
                <label
                  htmlFor="hs-hero-name-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">First name</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-name-2"
                  className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca] sm:p-4"
                  placeholder="First name"
                  value={firstName.value}
                  onChange={setInput(setFirstName)}
                />
              </div>
              <div>
                <label
                  htmlFor="hs-hero-name-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Last name</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-name-2"
                  className="py-3 px-4 block w-full focus:outline-none rounded-md text-sm border border-[#e5e7eb] focus:border-[#c5c7ca] sm:p-4"
                  placeholder="Last name"
                  value={lastName.value}
                  onChange={setInput(setLastName)}
                />
              </div>
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
              </div>
              <div className="flex flex-col gap-2">
                {error.length > 0 && (
                  <div className="text-red-500 text-[15px]">{error}</div>
                )}
                <button
                  type="submit"
                  className="py-3 px-4 justify-center rounded-md border border-transparent font-semibold bg-blue-500 text-white flex items-center gap-4 "
                >
                  Sign up
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
            <p className="mt-4 text-gray-500">
              Already Have Account?
              <Link href="/login">
                <span className="text-blue-500 hover:text-blue-600">
                  {" "}
                  Login
                </span>
              </Link>
            </p>
            {/* End Form */}
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
