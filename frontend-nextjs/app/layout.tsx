import type { Metadata } from "next";
import "./globals.css";
import DarkModeButton from "@/components/DarkModeButton";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Jamali Pay - Best payment gateway solution for SaaS Business",
  description:
    "We support all banks in the world, except for Israel banks, and offer secure, fast payment options for cryptocurrencies and e-wallets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-thicccboi font-medium dark:bg-gray-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <DarkModeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
