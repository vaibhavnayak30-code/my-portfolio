"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center text-center px-6 mt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={600}
            height={100}
            className="rounded-full"
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi 👋 I'm Vaibhav
        </motion.h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Software Developer | AI Enthusiast
        </p>

        <p className="max-w-xl mt-6 text-gray-600 dark:text-gray-300">
          Passionate about building scalable applications and exploring AI,
          LLMs, and modern web technologies.
        </p>

        <div className="flex gap-6 mt-8 text-2xl">
          <a href="#" className="hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaYoutube />
          </a>
        </div>

      </main>
    </>
  );
}