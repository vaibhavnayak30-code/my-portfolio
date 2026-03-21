import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function AIMLProjects() {

    const projects = [
        {
            slug: "speed-breaker-detection",
            title: "IoT-Based Speed Breaker & Pothole Detection System",
            desc: "Developed a real-time IoT system using ultrasonic sensors and GPS to detect road anomalies and alert drivers via mobile app.",
            image: "/projects_logos/Speed_Breaker.png",
            date: "2020",
            tech: ["NodeMCU", "Ultrasonic Sensor", "GPS", "Android", "IoT"],
            github: "#",
            demo: "https://www.youtube.com/watch?v=bxF9FA_8kMI"
        },
    ];

    return (
        <main className="max-w-xl mx-auto px-6 mt-12">

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:underline">Home</Link> ›{" "}
                <Link href="/projects" className="hover:underline">Projects</Link> ›{" "}
            </p>

            <h1 className="text-3xl font-bold mb-10">Electronic Projects</h1>

            <div className="space-y-10">

                {projects.map((p) => (
                    <div
                        key={p.slug}
                        className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition"
                    >

                        <Link href={`/projects/electronics/${p.slug}`}>
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={800}
                                height={400}
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

