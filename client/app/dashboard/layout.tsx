import "../globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jamali Pay - Dashboard",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-thicccboi font-medium">{children}</body>
    </html>
  );
}
