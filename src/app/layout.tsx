import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TNSStudio: System Server and Server",
  description: "Imagine your Place to Build and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
