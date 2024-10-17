import Link from "next/link";
import { House } from "lucide-react";

import ActiveLink from "../active-link/ActiveLink";

const navLinks = [
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/pricing", name: "Pricing" },
];

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row bg-indigo-900 opacity-90 p-4 rounded m-2 text-white">
        <Link href={"/"} className="flex items-center">
          <House />
          <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        {navLinks.map((link) => (
          <ActiveLink key={link.name} {...link} />
        ))}
      </nav>
    </>
  );
}
