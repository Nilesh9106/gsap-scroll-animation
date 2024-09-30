import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeAR | AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-full bg-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
