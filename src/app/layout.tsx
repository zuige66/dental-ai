import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Dental AI",
  description: "AI-powered dental analysis and visualization platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Cloudinary Upload Widget */}
        <script src="https://widget.cloudinary.com/v2.0/global/all.js" async></script>
      </head>
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
