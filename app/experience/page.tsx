import { profile } from "console";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {

  type Experience = {
    slug: string
    job_role: string
    company: string
    duration: string
    logo: string
  }
  const experiencs = [
    {
      slug: "uoe-dev",
      job_role: "Software Developer",
      company: "University of Essex (UK)",
      duration: "Nov 2024 - Present",
      logo: "/company_logos/UOE_Logo.png",
    },
    {
      slug: "infy-dev",
      job_role: "Software Engineer",
      company: "Infosys (India)",
      duration: "March 2021 - Dec 2022",
      logo: "/company_logos/Infosys_Logo.png"
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 mt-12 min-h-screen pb-24">

      {/* Breadcrumb */}
      <div className="text-xl text-gray-500 mb-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">»</span>
        <span className="text-gray-700 dark:text-gray-300">
          Experiences
        </span>
      </div>

      <div className="space-y-10 mb-10">
        {experiencs.map((edu) => (
          <Link key={edu.slug} href={`/experience/${edu.slug}`}>
            <div className="bg-gray-200 dark:bg-zinc-800 p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition space-y-3 mb-5">

              <div className="flex items-start gap-4">
                <Image
                  src={edu.logo!}
                  alt={edu.company}
                  width={100}
                  height={100}
                  className="object-contain"
                />

                <div>
                  <h2 className="text-xl font-semibold">{edu.job_role}</h2>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.company}
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