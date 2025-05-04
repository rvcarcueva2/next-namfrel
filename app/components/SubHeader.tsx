"use client";
import { usePathname } from "next/navigation";

export default function SubHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/senate", label: "SENATE" },
    { href: "/party-list", label: "PARTY-LIST" },
    { href: "/provincial", label: "PROVINCIAL" },
    { href: "/city", label: "CITY" },
  ];

  return (
    <div className="sub-header gap-8 text-white font-semibold p-4">
      <ul className="flex justify-center gap-8">
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