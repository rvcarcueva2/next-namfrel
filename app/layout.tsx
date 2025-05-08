import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
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
          <div className="z-20 flex -mb-30">
            <div className="logo-shadow-wrapper">
              <div className="logo-container">
                <img
                  src="/images/2025-NAMFREL-logo.png"
                  alt="Eleksyon Logo"
                  className="eleksyon-logo namfrel-logo"
                />

                <img
                  src="/images/APC-Gold_Site-Seal.png"
                  alt="APC Logo"
                  className="eleksyon-logo apc-logo"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="logo-spacer hidden md:block" />
              <div className="header-container relative z-10"> 
                <Header />
                <SubHeader />
              </div>
          </div>
          
        {/* Main content */}
        {children}

      <Footer />
        
    </body>
  </html>
  );
}
