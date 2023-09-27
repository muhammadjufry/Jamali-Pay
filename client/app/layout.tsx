import ApolloProviderClient from "./ApolloProviderClient";
import type { Metadata } from "next";
import "./globals.css";

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
        <ApolloProviderClient>{children}</ApolloProviderClient>
      </body>
    </html>
  );
}
