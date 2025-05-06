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
        <div className="header-container">
          <Header />
          <SubHeader />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
