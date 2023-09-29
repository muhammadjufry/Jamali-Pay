import ApolloProviderClient from "./ApolloProviderClient";
import type { Metadata } from "next";
import "./globals.css";
import Cookie_Card from "@/components/Cookie_Card";

export const metadata: Metadata = {
  title: "Jamali Pay",
  icons: {
    icon: "/logo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-thicccboi font-medium">
        <Cookie_Card />
        <ApolloProviderClient>{children}</ApolloProviderClient>
      </body>
    </html>
  );
}
