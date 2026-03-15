"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  FaGithub,
  FaAward,
  FaLinkedin,
  FaYoutube,
  FaMedium,
  FaFileAlt
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center text-center px-6 mt-20">
        {/* <div className="relative"> */}
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

        {/* Floating Award Badge */}
        {/* <Link
            href="/awards/big-essex-award.pdf"
            target="_blank"
            title="Big Essex Gold Award"
            className="absolute -top-2 -right-2 bg-yellow-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaAward size={20} />
          </Link>
        </div> */}

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

        <div className="flex justify-center gap-6 mt-6 text-2xl">

          <a href="mailto:vaibhavdeveloper1998@email.com" className="hover:text-gray-600">
            <MdEmail />
          </a>

          <a href="https://www.linkedin.com/in/vaibhav-nayak03/" target="_blank">
            <FaLinkedin className="hover:text-gray-600" />
          </a>

          <a href="https://github.com/vaibhavnayak30-code" target="_blank">
            <FaGithub className="hover:text-gray-600" />
          </a>

          {/* <a href="https://youtube.com" target="_blank">
    <FaYoutube className="hover:text-gray-600" />
  </a>

  <a href="https://medium.com/@yourusername" target="_blank">
    <FaMedium className="hover:text-gray-600" />
  </a>

  <a href="/resume.pdf">
    <FaFileAlt className="hover:text-gray-600" />
  </a> */}

        </div>

        <div className="mt-12">
          {/* RIGHT SIDE - AWARD */}
          <Link
            href="/awards/big-essex-award.pdf"
            target="_blank"
            className="flex flex-col items-center bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition w-48"
          >
            <FaAward className="text-yellow-500 text-4xl mb-3" />

            <p className="text-center font-medium">
              Big Essex Gold Award
            </p>

            <p className="text-xs text-gray-500 mt-1">
              View Certificate
            </p>
          </Link>
        </div>

      </main>
    </>
  );
}