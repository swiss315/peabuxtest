import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import backgroundImageUrl from "@/Assets/Images/background.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex  flex-col items-center justify-center " style={{height: '100vh', backgroundImage: `url(${backgroundImageUrl.src})`}}>
        {children}
      </div>
      </body>
    </html>
  );
}
