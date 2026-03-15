import Link from "next/link";

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const educationData: any = {
    "uoe-dev": {
      job_role: "Software Developer",
      company: "University of Essex (UK)",
      duration: "Nov 2024 - Present",
      descriptions: [
        "Developed and maintained robust APIs and backend services using C#, contributing to a scalable distributed system.",
        "Designed and implemented responsive, accessible front-end interfaces using Vue.js/Blazor, TypeScript, HTML, and CSS.",
        "Played a key role in migrating the legacy front-end from Blazor to Vue.js, improving performance and maintainability.",
        "Built and maintained automated Playwright test cases to ensure reliability and regression coverage for critical UI workflows.",
        "Resolved complex client-reported issues by writing optimized SQL queries for troubleshooting and data analysis."
      ],
    },

    "infy-dev": {
      job_role: "Software Engineer",
      company: "Infosys",
      duration: "March 2021 - Dec 2022",
      descriptions: [
        "Enhanced EKART app’s Payment Method features using REST API and Java, improving transaction efficiency.",
        "Optimized front-end components for better performance, accessibility, and cross-browser compatibility.",
        "Mentored junior developers, fostering technical skills and independent problem-solving.",
        "Developed QA documentation, ensuring SLA compliance and error-free software support.",
        "Translated business requirements into technical specs, ensuring bug-free deliverables."
      ],
    },
  };

  const edu = educationData[slug];

  if (!edu) {
    return (
      <main className="max-w-3xl mx-auto px-6 mt-12">
        <h1 className="text-2xl font-bold">Education not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 mt-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 flex items-center flex-wrap">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <span className="mx-2 text-gray-400">›</span>

        <Link href="/experience" className="hover:underline">
          Experiences
        </Link>

        <span className="mx-2 text-gray-400">›</span>

        <span className="text-gray-700 dark:text-gray-300">
          {edu.job_role}
        </span>
      </div>

      <h1 className="text-4xl font-bold mt-2">{edu.job_role}</h1>

      <p className="text-gray-600 mt-3">{edu.company}</p>

      <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>

      <h2 className="text-2xl font-semibold mt-8">Description</h2>

      <ul className="list-disc pl-6 mt-3 space-y-2">
        {edu.descriptions.map((description: string, index: number) => (
          <li key={index}>{description}</li>
        ))}
      </ul>

      {/* <h3 className="font-semibold mt-6">Skills:</h3>

      <ul className="list-disc pl-6 mt-3 space-y-2">
        {edu.skills.map((module: string, index: number) => (
          <li key={index}>{module}</li>
        ))}
      </ul> */}

    </main>
  );
}