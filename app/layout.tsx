import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Vaibhav Nayak | Software Developer",
//   description:
//     "Vaibhav Nayak is a software developer specializing in AI, web development, and modern technologies.",
//   keywords: [
//     "Vaibhav Nayak",
//     "Software Developer",
//     "AI Developer",
//     "Next.js Developer",
//     "Full Stack Developer"
//   ],
//   authors: [{ name: "Vaibhav Nayak" }],

//   openGraph: {
//   title: "Vaibhav Nayak | Software Developer",
//   description: "Portfolio of Vaibhav Nayak - Software Developer",
//   url: "https://vaibhavnayak.com",
//   siteName: "Vaibhav Nayak Portfolio",
//   type: "website",
// },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


