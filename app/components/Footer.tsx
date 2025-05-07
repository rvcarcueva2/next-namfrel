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
  return (
    <footer className="bg-[#1e0775] text-white pt-10">
      <div className="max-w-[1342px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">

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
          <h3 className="text-base font-bold mb-4">Contact Us</h3>
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
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
              <span>(+63) 939 110 2872 (Smart)</span>
            </div>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FDD854"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
            </svg>
              <span className="break-words text-left">(+63) 977 241 7080 (Globe)</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 pt-9">
          <div className="space-y-4 text-sm">
           <div className="flex items-center gap-3 justify-center md:justify-start">
           <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#FDD854"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z"
              clipRule="evenodd"/>
          </svg>
              <span>(632) 8451 1586</span>
            </div>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FDD854"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z"
                clipRule="evenodd"/>
            </svg>
              <span>(632) 8736 0969</span>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FDD854"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z"
                clipRule="evenodd"/>
            </svg>
              <span>(632) 8788 3484</span>
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
      </div>

      <div className="bg-[#dc160c] mt-8 md:mt-10 text-center text-sm font-light py-4 md:py-6">
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;