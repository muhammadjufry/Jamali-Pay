"use client";
import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconCircleCheck,
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  iconType: "success" | "warning" | "error" | "info";
  title: string;
  desc: string;
  buttons: {
    text: string;
    active: boolean;
    onClick: () => void;
  }[];
};

function Modal({ isOpen, onClose, iconType, title, desc, buttons }: Props) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) return null;

  const bgColorClass = (() => {
    switch (iconType) {
      case "success":
        return "bg-green-100 dark:bg-green-700";
      case "warning":
        return "bg-yellow-100 dark:bg-yellow-700";
      case "error":
        return "bg-red-100 dark:bg-red-700";
      case "info":
        return "bg-blue-100 dark:bg-blue-700";
      default:
        return "bg-gray-100 dark:bg-gray-700";
    }
  })();
  return (
    <>
      <div
        className={`hs-overlay w-screen h-screen fixed flex items-center justify-center z-[60] overflow-x-hidden overflow-y-auto bg-[#00000033]  ${
          showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
            <div className="absolute top-2 right-2">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400"
                onClick={handleClose}
              >
                <IconX className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <span
                className={twMerge(
                  "mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full",
                  bgColorClass
                )}
              >
                {iconType === "success" ? (
                  <IconCircleCheck />
                ) : iconType === "warning" ? (
                  <IconAlertTriangleFilled />
                ) : iconType === "error" ? (
                  <IconAlertCircleFilled />
                ) : (
                  <IconInfoCircleFilled />
                )}
              </span>
              {/* End Icon */}
              <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
                {title}
              </h3>
              <p className="text-gray-500">{desc}</p>
              <div className="mt-6 flex justify-center gap-x-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold ${
                      button.active === true ? "bg-blue-500" : "bg-white"
                    } text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
                    data-hs-overlay="#hs-sign-out-alert"
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
