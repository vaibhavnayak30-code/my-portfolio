import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6">
      <div className="font-semibold text-xl">Vaibhav Nayak</div>

      <div className="flex gap-8 text-xl">
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/education">Education</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}