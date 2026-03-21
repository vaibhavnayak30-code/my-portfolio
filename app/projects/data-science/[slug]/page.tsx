import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const projects: any = {
        "crime-data-analysis": {
            title: "Crime Data Analysis & Visualization (Dallas Police Dataset)",
            desc: "Analyzed a real-world policing dataset to uncover crime patterns, trends, and disparities using R and visualization techniques.",
            date: "Dec 2023",
            image: "/projects_logos/CrimeData.png",

            overview:
                "This project explores a real-world policing dataset from Dallas, Texas (2016) using data visualization and statistical analysis techniques. The objective was to uncover hidden patterns, identify crime hotspots, and analyze disparities in policing outcomes. The dataset consists of 2,383 records with 47 variables.",

            working:
                "The dataset was cleaned and transformed using R. Missing values and irrelevant columns were handled, followed by feature engineering such as extracting month, hour, and day from timestamps. Exploratory Data Analysis (EDA) was performed to identify patterns. Multiple visualizations including bar charts, time-series graphs, and geospatial maps were created using ggplot2, Plotly, and Leaflet.",

            features: [
                "Data Cleaning & Preprocessing",
                "Feature Engineering (Time-based analysis)",
                "Exploratory Data Analysis (EDA)",
                "Geospatial Crime Mapping",
                "Interactive Visualizations",
            ],

            technologies: [
                "R",
                "ggplot2",
                "Plotly",
                "Leaflet",
                "dplyr",
            ],

            github: "https://github.com/vaibhavnayak30-code/Data-Visualization-Using-Python", // update later
            youtube: "/projects/data-visualization.pdf", // using PDF as resource

            tags: ["Data Science", "Visualization", "R", "EDA", "Analytics"],
        },
    };

    const project = projects[slug];

    if (!project) {
        return <h1 className="text-center mt-20">Project not found</h1>;
    }

    return (
        <main className="max-w-3xl mx-auto px-6 mt-12">

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:underline">Home</Link> ›{" "}
                <Link href="/projects" className="hover:underline">Projects</Link> ›{" "}
                <Link href="/projects/data-science" className="hover:underline">Data Science</Link> ›{" "}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold">
                {project.title}
            </h1>

            <p className="text-gray-600 mt-3">
                {project.desc}
            </p>

            <p className="text-sm text-gray-500 mt-2">
                {project.date}
            </p>

            {/* Image */}
            <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl mt-6"
            />

            {/* Overview */}
            <h2 className="text-xl font-semibold mt-8">
                Project Overview
            </h2>

            <p className="text-gray-600 mt-3">
                {project.overview}
            </p>

            {/* Working */}
            <h2 className="text-xl font-semibold mt-8">
                Working of Project
            </h2>

            <p className="text-gray-600 mt-3">
                {project.working}
            </p>

            {/* Features */}
            <h2 className="text-xl font-semibold mt-8">
                Key Features
            </h2>

            <ul className="list-disc pl-6 mt-3 space-y-2">
                {project.features.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            {/* Technologies */}
            <h2 className="text-xl font-semibold mt-8">
                Technologies Leveraged
            </h2>

            <ul className="list-disc pl-6 mt-3 space-y-2">
                {project.technologies.map((t: string, i: number) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>

            {/* Links */}
            <h2 className="text-xl font-semibold mt-8">
                Additional Resources
            </h2>

            <div className="mt-3 space-y-2">

                <a href={project.github} target="_blank" className="block underline">
                    🔗 GITHUB
                </a>

                <a href={project.youtube} target="_blank" className="block underline">
                    📺 Youtube Tutorial
                </a>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className="text-xs bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </main>
    );
}