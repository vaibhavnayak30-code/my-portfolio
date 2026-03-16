import Link from "next/link";

export default function Projects() {
  const categories = [
    {
      title: "AI / ML Projects",
      slug: "ai-ml",
      desc: "Artificial Intelligence and Machine Learning applications",
    },
    {
      title: "Data Science Projects",
      slug: "data-science",
      desc: "Data analysis, visualization and predictive modelling",
    },
    {
      title: "Software Development",
      slug: "software",
      desc: "Full-stack applications and web platforms",
    },
    {
      title: "Electronics Projects",
      slug: "electronics",
      desc: "Embedded systems, IoT and hardware projects",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 mt-12">

      {/* Breadcrumb */}
      <div className="text-xl text-gray-500 mb-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">»</span>
        <span className="text-gray-700 dark:text-gray-300">
          Projects
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {categories.map((cat) => (
          <Link key={cat.slug} href={`/projects/${cat.slug}`}>
            <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl hover:scale-[1.02] hover:shadow-lg transition cursor-pointer">

              <h2 className="text-xl font-semibold">{cat.title}</h2>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {cat.desc}
              </p>

            </div>
          </Link>
        ))}

      </div>

    </main>
  );
}