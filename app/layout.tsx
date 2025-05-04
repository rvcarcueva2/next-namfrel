import type { Metadata } from "next";
import { Manrope } from "next/font/google";  // Importing Manrope font from Google Fonts
import "./globals.css"; // Importing global styles
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",  // You can change this variable name if needed
  subsets: ["latin"],         // Add other subsets as needed
  weight: ["400", "600", "700"], // Normal, semi-bold, and bold weights
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

        {/* Logo Section */}
        <div className="relative z-20 flex -mb-15">
          <div className="logo-container">
            <img
              src="/images/eleksyon-logo-new.png"
              alt="Eleksyon Logo"
              className="eleksyon-logo"
            />
          </div>
        </div>
        
        {/* Header Section*/}
        <div className="header-container">

          {/* Main Header */}
          <header className="main-header relative z-10 flex items-center px-4 py-2 bg-blue-700">
            
            {/* Main Navigation Header */}
            <nav className="flex flex-1 justify-center items-center gap-8 text-white font-semibold">
              <a href="/" className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform 
                      after:duration-300 after:origin-left hover:after:scale-x-100">
                        Transmission
                        </a>
              <a href="/analytics"className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform 
                      after:duration-300 after:origin-left hover:after:scale-x-100">
                        Analytics
                        </a>
              <a href="/voters-profile" className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform 
                      after:duration-300 after:origin-left hover:after:scale-x-100">
                        Voter's Profile
                        </a>
            </nav>

          </header>
      

        {/* Sub Header */}
        <div className="sub-header gap-8 text-white font-semibold p-4">
          <ul className="flex justify-center gap-8 text-white font-semibold">
            <li>
              <a
                href="/senate"
                className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
              >
                SENATE
              </a>
            </li>
            <li>
              <a
                href="/party-list"
                className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
              >
                PARTY-LIST
              </a>
            </li>
            <li>
              <a
                href="/provincial"
                className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
              >
                PROVINCIAL
              </a>
            </li>
            <li>
              <a
                href="/city"
                className="relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
              >
                CITY
              </a>
            </li>
          </ul>
        </div>
        </div>
        {children}
        <Footer>
        </Footer>
      </body>
    </html>
  );
}