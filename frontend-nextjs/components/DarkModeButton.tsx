"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
export default function DarkModeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleMode = resolvedTheme === "dark" ? "light" : "dark";
  console.log(toggleMode);
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 bg-white dark:bg-gray-800 ${
          resolvedTheme === "dark"
            ? "border-white text-white"
            : "border-black text-black"
        }`}
        onClick={() => setTheme(toggleMode)}
      >
        <IconSun
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            resolvedTheme === "dark" ? "opacity-100 visible" : "opacity-0"
          }`}
        />
        <IconMoon
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300  ${
            resolvedTheme === "light" ? "opacity-100 visible" : "opacity-0"
          }`}
        />
      </button>
    </div>
  );
}
