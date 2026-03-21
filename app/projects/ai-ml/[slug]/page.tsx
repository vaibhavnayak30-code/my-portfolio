import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const projects: any = {
        "credit-rating-prediction": {
            title: "Credit Rating & Investment Grade Prediction",
            desc: "Machine learning models to predict corporate credit ratings and classify investment-grade companies.",
            date: "2025",
            image: "/projects_logos/Credit_Rating.png",

            overview:
                "This project focuses on predicting corporate credit ratings and determining whether a company falls into the investment-grade category using machine learning techniques. Credit rating prediction plays a critical role in financial decision-making, risk assessment, and investment strategies.",

            working:
                "The dataset consists of financial indicators such as liquidity ratios, profitability metrics, and debt ratios. Data preprocessing included handling missing values, normalization, and feature selection. Multiple machine learning models including Logistic Regression and Neural Networks were trained and evaluated to classify companies into credit rating categories.",

            features: [
                "Credit rating classification (multi-class problem)",
                "Investment-grade prediction (binary classification)",
                "Feature engineering using financial ratios",
                "Model comparison and evaluation",
                "Data preprocessing and normalization",
            ],

            technologies: [
                "Python",
                "Scikit-learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Neural Networks",
            ],

            github: "https://github.com/vaibhavnayak30-code/Credit-Rating-Classification-and-Investment-Grade-Prediction.",
            youtube: "#",

            tags: ["Machine Learning", "Finance", "Classification", "AI"],
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
                <Link href="/projects/ai-ml" className="hover:underline">AI / ML</Link> ›{" "}
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
                width={800}
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