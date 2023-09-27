"use client";
import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconBell,
  IconCircleFilled,
  IconHelpCircle,
  IconMenu2,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
type Props = {
  userData?: {
    id: string;
    username: string;
    __typename: string;
  };
};

export default function Header({ userData }: Props) {
  const router = useRouter();
  const [dropdownClose, setDropdownClose] = useState(true);

  const logout = async () => {
    try {
      await Auth.signOut();
      router.refresh();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [openIndex, setOpenIndex] = useState<number>();
  const toggleRefs: any = {};
  const profileToggle = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      const clickedOutside = Object.values(toggleRefs).every(
        (ref: any) => !ref.current || !ref.current.contains(e.target)
      );

      if (clickedOutside) {
        setOpenIndex(-1);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [toggleRefs]);
  return (
    <header className="bg-white fixed w-full top-0 border-b z-10">
      <div className="flex items-center justify-end py-4 px-6 lg:px-8 relative">
        <ul className="flex items-center gap-6">
          <li
            onClick={() => profileToggle(0)}
            ref={(el) => (toggleRefs[0] = el)}
            className="cursor-pointer relative"
          >
            <IconUserCircle size={27} />
            {openIndex === 0 && userData && (
              <div className="absolute top-10 right-6 bg-white shadow-md flex flex-col gap-2 w-[250px]">
                <h2 className="font-bold border-b p-4">
                  <Link href="/dashboard/profile">{userData.username}</Link>
                </h2>
                <ul className="flex flex-col gap-2 p-4 py-2">
                  <li>
                    <Link href="/dashboard/settings">Settings</Link>
                  </li>
                  <li>
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => logout()}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/help">
              <IconHelpCircle size={27} />
            </Link>
          </li>
          <li
            onClick={() => profileToggle(1)}
            ref={(el) => (toggleRefs[1] = el)}
            className="cursor-pointer relative w-full"
          >
            <IconBell size={27} />
            {openIndex === 1 && userData && (
              <div className="absolute top-10 right-6 bg-white shadow-md flex flex-col w-[350px]">
                <h2 className="font-bold border-b pb-2 px-4">Notifications</h2>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2 items-start bg-white transition-all w-full hover:bg-slate-100 p-4 duration-500">
                    <IconCircleFilled
                      className="text-lime-500 mt-1"
                      size={10}
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        New customer order
                      </span>
                      <span className="text-xs text-gray-500">Just now</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
