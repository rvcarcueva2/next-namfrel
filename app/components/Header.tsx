"use client";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Transmission" },
    { href: "/analytics", label: "Analytics" },
    { href: "/voters-profile", label: "Voter's Profile" },
  ];

  return (
    <header className="main-header relative z-10 flex items-center px-4 py-2 bg-blue-700">
      <nav className="flex flex-1 justify-center items-center gap-8 text-white font-semibold">
        {links.map(({ href, label }) => {
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
    </header>
  );
}