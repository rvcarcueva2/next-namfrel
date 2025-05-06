"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Results", href: "/results" },
  { label: "Voter's Profile", href: "/voters-profile" },
  { label: "Senate", href: "/senate" },
  { label: "Party-list", href: "/party-list" },
  { label: "Provincial", href: "/provincial" },
  { label: "City", href: "/city" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
        setResponseMsg("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResponseMsg("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1e0775] text-white pt-10">
      <div className="max-w-[1342px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">

        <div className="md:col-span-1">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <Image
              src="/images/namfrel-logo.png"
              alt="NAMFREL Logo"
              width={100}
              height={96}
              className="w-24 md:w-28 object-contain"
            />
            <Image
              src="/images/apc-logo.png"
              alt="APC Logo"
              width={100}
              height={96}
              className="w-24 md:w-28 object-contain"
            />
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FDD854"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.998.998 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.381l-.133-.162a1 1 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-left">
                Unit 601, DMG Center, <br />
                Domingo M. Guevara St. Brgy. Mauway, <br />
                Mandaluyong City, Philippines
              </p>
            </div>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FDD854"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 6.995c-2.306 0-4.534.408-6.215 1.507-1.737 1.135-2.788 2.944-2.797 5.451a4.78 4.78 0 0 0 .01.62c.015.193.047.512.138.763a2.557 2.557 0 0 0 2.579 1.677l1.578.001a2.685 2.685 0 0 0 2.685-2.685v-.645a.684.684 0 0 1 .684-.684h2.647a.686.686 0 0 1 .686.687v.646c0 .711.284 1.394.787 1.897.478.478 1.101.787 1.847.787h1.647a2.555 2.555 0 0 0 2.575-1.674c.09-.25.123-.57.137-.763.015-.2.022-.433.01-.617-.002-2.508-1.049-4.32-2.785-5.458-1.68-1.1-3.907-1.51-6.213-1.51Z"/>
              </svg>
              <span>0912345678</span>
            </div>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FDD854"
                viewBox="0 0 24 24"
              >
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
              </svg>
              <span className="break-words text-left">namfrelsecretariat@namfrel.org.ph</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 text-center md:text-left">
          <h3 className="text-base font-bold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-block w-full py-1 hover:text-[#fdd854] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 text-center md:text-left">
          <h3 className="text-base font-bold mb-4">Follow Us</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-3">
            <a
              href="https://www.facebook.com/Namfrel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fdd854] transition-colors duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="w-8 h-8 md:w-6 md:h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd" 
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://x.com/Namfrel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fdd854] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="w-8 h-8 md:w-6 md:h-6"
                viewBox="0 0 24 24">
                <path 
                  d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@namfrel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fdd854] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="w-8 h-8 md:w-6 md:h-6"
                viewBox="0 0 24 24">
                <path d="M9.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
                <path 
                  fillRule="evenodd"
                  d="M11 5a1 1 0 0 1 1-1c1.544 0 3.324.754 4.515 2.168 1.235 1.467 1.788 3.584.934 6.148a1 1 0 0 1-1.898-.632c.646-1.936.2-3.319-.566-4.227A4.238 4.238 0 0 0 13 6.158V16.5a1 1 0 1 1-2 0V5Z"
                  clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/NamfrelBantayngBayan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fdd854] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="w-8 h-8 md:w-6 md:h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84 4.225 4.225 0 0 0-.79 1.964 30.147 30.147 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.271 4.271 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.82-5.4 2.8Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-base font-bold mb-4 text-center md:text-left">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name (Optional)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded bg-white/90 text-black shadow-md focus:ring-2 focus:ring-[#fdd854] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded bg-white/90 text-black shadow-md focus:ring-2 focus:ring-[#fdd854] outline-none"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full h-32 px-3 py-2 rounded bg-white/90 text-black shadow-md focus:ring-2 focus:ring-[#fdd854] outline-none"
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer bg-[#ffca0a] text-[#111928] px-5 py-2 rounded shadow-md hover:bg-[#ffd33d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
            {responseMsg && (
              <p className={`text-sm text-center ${
                responseMsg.includes("Thank") ? "text-white" : "text-red-300"
              }`}>
                {responseMsg}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="bg-[#dc160c] mt-8 md:mt-10 text-center text-sm font-light py-4 md:py-6">
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;