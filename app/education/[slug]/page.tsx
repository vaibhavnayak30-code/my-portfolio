import Link from "next/link";

export default async function EducationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const educationData: any = {
  "msc-ai": {
    title: "MSc Data Science & its Applications",
    university: "University of Essex",
    duration: "Jan 2023 - Jan 2024",
    description:
      "I pursued advanced studies in Data Science and Artificial Intelligence, focusing on machine learning, data engineering, and modern AI-driven applications.",
    modules: [
    "Machine Learning",
    "Deep Learning",
    "Data Mining and Data Visualization",
    "Big Data Analytics",
    "Natural Language Processing",
    "Data Engineering",
    "Cloud Computing for Data Science",
    "Programming for Data Science (Python, R)",
    "Research and Development Project"
    ],
  },

  "bachelors-ee": {
    title: "Bachelors of Electronics & Communication Engineering",
    university: "Mangalore Institute of Technology & Engineering (India)",
    duration: "Sept 2016 - Sept 2020",
    description:
      "Completed my undergraduate studies with a strong foundation in electronics, computer science, and software development principles.",
    modules: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Embedded Systems",
    "Digital Electronics",
    "Signals and Systems",
    "Internet of Things (IoT)"
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

  <Link href="/education" className="hover:underline">
    Educations
  </Link>

  <span className="mx-2 text-gray-400">›</span>

  <span className="text-gray-700 dark:text-gray-300">
    {edu.title}
  </span>
</div>

      <h1 className="text-4xl font-bold mt-2">{edu.title}</h1>

      <p className="text-gray-600 mt-3">{edu.university}</p>

      <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>

      <h2 className="text-2xl font-semibold mt-8">Description</h2>

      <ul className="list-disc pl-6 mt-4 text-gray-700 dark:text-gray-300">
        <li>{edu.description}</li>
      </ul>

      <h3 className="font-semibold mt-6">Course Modules:</h3>

      <ul className="list-disc pl-6 mt-3 space-y-2">
        {edu.modules.map((module: string, index: number) => (
          <li key={index}>{module}</li>
        ))}
      </ul>

    </main>
  );
}