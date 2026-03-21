import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const projects: any = {
        "speed-breaker-detection": {
            title: "IoT-Based Speed Breaker & Pothole Detection System",
            desc: "A smart IoT system that detects potholes and speed breakers in real-time and alerts drivers to prevent accidents.",
            date: "2020",
            image: "/projects_logos/Speed_Breaker.png",

            overview:
                "This project presents a cost-effective IoT-based solution to detect road anomalies such as potholes and speed breakers using ultrasonic sensors and GPS. The system collects real-time data from vehicles and sends it to a cloud server, enabling drivers and authorities to access road condition insights.",

            working:
                "The system uses an ultrasonic sensor mounted on a vehicle to measure the distance between the road surface and the vehicle. Based on a predefined threshold, the system classifies the road condition as smooth, pothole, or speed breaker. GPS is used to capture location data, which is then sent to a cloud database. An Android application alerts drivers 100 meters in advance about upcoming hazards.",

            features: [
                "Real-time pothole and speed breaker detection",
                "GPS-based location tracking",
                "Cloud data storage and analysis",
                "Android app for driver alerts",
                "Threshold-based classification system",
            ],

            technologies: [
                "NodeMCU (ESP8266)",
                "Ultrasonic Sensor (HC-SR04)",
                "GPS Module",
                "Arduino IDE",
                "Android Studio",
                "XAMPP (Backend)",
            ],

            github: "#",
            youtube: "https://www.youtube.com/watch?v=bxF9FA_8kMI",

            tags: ["IoT", "Embedded Systems", "Sensors", "Smart Mobility"],
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
                <Link href="/projects/electronics" className="hover:underline">Electronics</Link> ›{" "}
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
