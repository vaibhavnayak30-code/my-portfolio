"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-10 py-6">
      <div className="font-semibold text-xl">Vaibhav Nayak</div>

      <div className="flex gap-8 text-xl">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-2 border-b-2 transition-all duration-200 ease-in-out ${isActive
                ? "border-foreground font-semibold"
                : "border-transparent hover:border-gray-400"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <ThemeToggle />
    </nav>
  );
}