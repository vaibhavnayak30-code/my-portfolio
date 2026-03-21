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
      <main className="flex flex-col items-center text-center px-6 mt-16">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={220}
            height={220}
            className="rounded-3xl shadow-md"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi 👋 I'm Vaibhav
        </motion.h1>

        {/* Role */}
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Software Developer | AI & Machine Learning Enthusiast
        </p>

        {/* Short Intro */}
        <p className="max-w-2xl mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
          I am currently working as a Software Developer at a university, building scalable applications using
          ASP.NET Core and C#. Alongside my work, I explore Artificial Intelligence through projects in
          <span className="font-medium"> LLMs, RAG, Explainable AI</span>, and intelligent systems.

          <br /><br />

          I enjoy solving real-world problems, building end-to-end solutions, and sharing practical demos
          that help others learn and collaborate.
        </p>

        {/* Interest Line */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
          Interested in applying AI, machine learning, and optimisation techniques in domains such as
          healthcare, smart systems, and decision support.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link
            href="/projects"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>

          <a
            href="https://github.com/vaibhavnayak30-code"
            target="_blank"
            className="px-5 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            GitHub
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="mailto:vaibhavdeveloper1998@email.com">
            <MdEmail className="hover:text-gray-600" />
          </a>

          <a href="https://www.linkedin.com/in/vaibhav-nayak03/" target="_blank">
            <FaLinkedin className="hover:text-gray-600" />
          </a>

          <a href="https://github.com/vaibhavnayak30-code" target="_blank">
            <FaGithub className="hover:text-gray-600" />
          </a>
        </div>

        {/* Currently Exploring - CARD STYLE */}
        <div className="mt-10 w-full max-w-3xl">
          <h2 className="text-lg font-semibold mb-4">
            Currently Exploring
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              "LLMs",
              "RAG",
              "Explainable AI",
              "Optimisation"
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg text-center hover:shadow transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Award Section */}
        <div className="mt-12">
          <Link
            href="/awards/big-essex-award.pdf"
            target="_blank"
            className="flex flex-col items-center bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition w-56"
          >
            <FaAward className="text-yellow-500 text-4xl mb-3" />

            <p className="font-medium">
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