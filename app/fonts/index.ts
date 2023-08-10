import localFont from "next/font/local";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const THICCCBOI = localFont({
  src: [
    {
      path: "./THICCCBOI_Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./THICCCBOI_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./THICCCBOI_SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./THICCCBOI_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tccc",
});
