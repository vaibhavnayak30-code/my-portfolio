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
      "I embarked on a journey to deepen my knowledge in Data Science and Artificial Intelligence.",
    modules: [
      "Advanced Professional Practice",
      "Databases",
      "Data Mining and Data Visualization",
      "Emerging Technologies",
      "Machine Learning",
      "Practical Data Analysis",
      "Programming for Data Science and Artificial Intelligence",
      "Research and Development Project",
      "Research Methods",
    ],
  },

  "bachelors-ee": {
    title: "Bachelors of Electronics & Communication Engineering",
    university: "Mangalore Institute of Technology & Engineering (India)",
    duration: "Sept 2016 - Sept 2020",
    description:
      "Completed my undergraduate degree focusing on electronics, communication systems, and computer science fundamentals.",
    modules: [
      "Digital Electronics",
      "Signals and Systems",
      "Communication Systems",
      "Microprocessors",
      "Computer Networks",
      "Embedded Systems",
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

      <p className="text-sm text-gray-500">
        Home » Educations
      </p>

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