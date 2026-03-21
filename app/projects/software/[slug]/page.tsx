import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const projects: any = {
        // "slackbot": {
        //     title: "HR Assistant Slackbot with OpenAI Assistant API",
        //     desc: "A revolutionary AI Chatbot for Slack, designed to enhance HR ticketing systems using the OpenAI Assistant API.",
        //     date: "Jan 2024",
        //     image: "/projects/slackbot.png",

        //     overview:
        //         "I have developed an AI-powered chatbot for Slack, utilizing the OpenAI Assistant API, meticulously designed to transform HR ticketing systems. This chatbot integrates seamlessly with Slack, enabling HR teams to handle employee issues with greater efficiency and interactivity.",

        //     working:
        //         "A Slack app has been developed and integrated into the Slack channel. This SlackApp is powered by a Flask application, which I have written in Python and deployed on Digital Ocean. For the language processing, I am utilizing GPT-4 API through the OpenAI Assistant API. The settings of newly generated tickets is handled by Airtable. The Assistant API leverages OpenAI’s capabilities to interpret user intent, gather necessary information using function calling, and transmit it through API calls, ensuring that data is efficiently stored in Airtable.",

        //     features: [
        //         "Interactive Ticket Generation",
        //         "Instant Notifications",
        //         "Efficient Ticket Management",
        //     ],

        //     technologies: [
        //         "Python",
        //         "Slack API",
        //         "OpenAI Assistant API",
        //         "Airtable",
        //         "Digital Ocean",
        //     ],

        //     github: "https://github.com/yourrepo",
        //     youtube: "#",

        //     tags: ["Slack", "OpenAI", "chatbot", "AI", "HR"],
        // },
    };

    const project = projects[slug];

    if (!project) {
        return <h1 className="text-center mt-20">Project Coming Soon!</h1>;
    }

    return (
        <main className="max-w-3xl mx-auto px-6 mt-12">

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:underline">Home</Link> ›{" "}
                <Link href="/projects" className="hover:underline">Projects</Link> ›{" "}
                <Link href="/projects/software" className="hover:underline">Software Development</Link> ›{" "}
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