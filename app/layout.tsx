import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-helvetica",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "NAMFREL",
  description: "NAMFREL Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <div className="mt-8 mb-18 mx-auto max-w-screen-2xl px-4">
          <div className="logo-container-wrapper">
            <div className="logo-container">
              <img
                src="/images/2025-NAMFREL-logo.png"
                alt="Eleksyon Logo"
                className="namfrel-logo"
              />
              <img
                src="/images/APC-Gold_Site-Seal.png"
                alt="APC Logo"
                className="apc-logo"
              />
            </div>
          </div>
        </div>

        <Header />
        <SubHeader />
        
          {children}
        

        <Footer />
      </body>
    </html>
  );
}