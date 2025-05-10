"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainLinks = [
    { href: "/", label: "Results" },
    { href: "/crowdsourcing", label: "Crowdsourcing" },
    { href: "/transmission", label: "Transmission" },
    { href: "/analytics", label: "Analytics" },
    { href: "/election-statistics", label: "Election Statistics" },
    { href: "/demographics", label: "Demographics" },
  ];

  const subLinks = [
    { href: "/senate", label: "Senate" },
    { href: "/house-of-representatives", label: "House of Representatives" },
    { href: "/party-list", label: "Party-list" },
    { href: "/provincial", label: "Provincial" },
    { href: "/city-municipality", label: "City/Municipality" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const contentWidth = window.innerWidth - 295; // Subtract logo width
      const minRequiredWidth = 1200; // Minimum width needed for all tabs
      setIsCollapsed(contentWidth < minRequiredWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="main-header">
      {!isCollapsed ? (
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-white font-semibold pr-8">
          {mainLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-lg transition relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === href ? "after:scale-x-100 font-bold" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      ) : (
        <div className="flex items-center justify-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-200 transition p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1e0775] shadow-lg z-40">
          <div className="px-4 py-4 space-y-2">
            {mainLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block text-lg text-white hover:bg-blue-600 px-4 py-3 rounded-lg ${
                  pathname === href ? "bg-blue-600 font-bold" : ""
                }`}
              >
                {label}
              </a>
            ))}
            <div className="border-t border-white/20 pt-4">
              {subLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`block text-lg text-white hover:bg-[#dc160c] px-4 py-3 rounded-lg ${
                    pathname === href ? "bg-[#dc160c] font-bold" : ""
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}