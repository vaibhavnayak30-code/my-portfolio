import Link from "next/link";
import Image from "next/image";

export default function Education() {
  const educations = [
    {
      slug: "msc-ai",
      degree: "MSc Data Science & its Applications",
      university: "University of Essex (UK)",
      duration: "Jan 2023 - Jan 2024",
      logo: "/UOE_Logo.png"
    },
    {
      slug: "bachelors-ee",
      degree: "Bachelors of Electronics & Communication Engineering",
      university: "Mangalore Institute of Technology & Engineering (India)",
      duration: "Sept 2016 - Sept 2020",
      logo: "/MITE_Logo.png"
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 mt-12 min-h-screen pb-24">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">»</span>
        <span className="text-gray-700 dark:text-gray-300">
          Educations
        </span>
      </div>

      <div className="space-y-10 mb-10">
        {educations.map((edu) => (
          <Link key={edu.slug} href={`/education/${edu.slug}`}>
            <div className="bg-gray-200 dark:bg-zinc-800 p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition space-y-3 mb-5">

              <div className="flex items-start gap-4">
                <Image
                  src={edu.logo!}
                  alt={edu.university}
                  width={100}
                  height={50}
                  className="object-contain"
                />

                <div>
                  <h2 className="text-xl font-semibold">{edu.degree}</h2>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.university}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">{edu.duration}</p>
                </div>

              </div>

            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}