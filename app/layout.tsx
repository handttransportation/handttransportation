import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H&T Transportation | Long Island & NYC Rides",
  description:
    "Reliable airport transportation, private rides, courier service, and business transportation across Long Island and NYC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
