"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const mainLinks = [
    { href: "/", label: "Transmission" },
    { href: "/analytics", label: "Analytics" },
    { href: "/voters-profile", label: "Voter's Profile" },
  ];

  const subLinks = [
    { href: "/senate", label: "SENATE" },
    { href: "/party-list", label: "PARTY-LIST" },
    { href: "/provincial", label: "PROVINCIAL" },
    { href: "/city", label: "CITY" },
  ];

  return (
    <header className="main-header relative z-10 bg-blue-700 text-white font-semibold">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <span className="text-lg font-bold">Menu</span>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-white font-semibold">
        {mainLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <a
              key={href}
              href={href}
              className={`text-lg transition transform active:-translate-y-0.5 relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                isActive ? "after:scale-x-100 font-bold" : ""
              }`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-4">
          <div className="space-y-2">
            {mainLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`block text-base transition relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                    isActive ? "after:scale-x-100 font-bold" : ""
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
          
          <div className="pt-4 border-t border-white/20">
            {subLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`block text-base uppercase transition relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                    isActive ? "after:scale-x-100 font-bold" : ""
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}