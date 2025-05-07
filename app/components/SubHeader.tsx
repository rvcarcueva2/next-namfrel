"use client";
import { usePathname } from "next/navigation";

export default function SubHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/senate", label: "Senate" },
    { href: "/party-list", label: "Party-list" },
    { href: "/provincial", label: "Provincial" },
    { href: "/city-municipality", label: "City/Municipality" },
  ];

  return (
    <div className="sub-header text-white font-semibold hidden md:block">
      {/* Desktop submenu */}
      <ul className="hidden md:flex justify-center gap-8 bg-[#dc160c] py-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`text-lg transition transform active:-translate-y-0.5 relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
                pathname === href ? "after:scale-x-100 font-bold" : ""
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}