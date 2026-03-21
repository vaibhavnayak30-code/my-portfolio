import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function DataScienceProjects() {

    const projects = [
        {
            slug: "crime-data-analysis",
            title: "Crime Data Analysis & Visualization",
            desc: "Analyzed Dallas policing dataset to uncover patterns, trends, and disparities using R and data visualization.",
            image: "/projects_logos/CrimeData.png",
            date: "Dec 2023",
            tech: ["R", "ggplot2", "Plotly", "Leaflet", "EDA"],
            github: "https://github.com/vaibhavnayak30-code/Data-Visualization-Using-Python",
            demo: "/projects/data-visualization.pdf"
        },
    ];

    return (
        <main className="max-w-xl mx-auto px-6 mt-12">

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:underline">Home</Link> ›{" "}
                <Link href="/projects" className="hover:underline">Projects</Link> ›{" "}
            </p>

            <h1 className="text-3xl font-bold mb-10">Data Science Projects</h1>

            <div className="space-y-10">

                {projects.map((p) => (
                    <div
                        key={p.slug}
                        className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition"
                    >

                        <Link href={`/projects/data-science/${p.slug}`}>
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={500}
                                height={200}
                                className="rounded-lg mb-4"
                            />
                        </Link>

                        <h2 className="text-xl font-semibold">
                            {p.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            {p.desc}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-sm bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-6 mt-5 text-gray-600 dark:text-gray-300">

                            <a
                                href={p.github}
                                target="_blank"
                                className="flex items-center gap-2 hover:text-black dark:hover:text-white"
                            >
                                <FaGithub />
                                GitHub
                            </a>

                            <a
                                href={p.demo}
                                target="_blank"
                                className="flex items-center gap-2 hover:text-black dark:hover:text-white"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>

                        </div>

                    </div>
                ))}

            </div>

        </main>
    );
}

