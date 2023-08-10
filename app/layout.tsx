"use client";
import "./globals.css";
import { sfPro, THICCCBOI } from "./fonts";
import cx from "classnames";

export const metadata = {
  title: "Jamali Pay - Best Payment gateway solution",
  description:
    "Simplify transactions with Jamali Pay! Handle taxes, subscriptions, and enjoy support for all banks and cryptocurrencies. Secure, seamless, and future-ready. Join us now!",
  twitter: {
    card: "summary_large_image",
    title: "Jamali Pay - Best Payment gateway solution",
    description:
      "Simplify transactions with Jamali Pay! Handle taxes, subscriptions, and enjoy support for all banks and cryptocurrencies. Secure, seamless, and future-ready. Join us now!",
    creator: "@steventey",
  },
  metadataBase: new URL("https://jamalipay.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, THICCCBOI.variable)}>{children}</body>
    </html>
  );
}
