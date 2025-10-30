import { FaBriefcase } from "react-icons/fa";
import "../App.css";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Intern | Symcloud",
      date: "Aug-2024 – Dec-2024",
      details: [
        "Developed and maintained web applications using React.js & FastAPI.",
        "Integrated RESTful APIs and optimized backend performance for scalability.",
        "Designed responsive UI components using Tailwind CSS to enhance user experience.",
        "Worked with MongoDB for efficient database management.",
        "Collaborated with a team to solve real-world challenges and improve code efficiency.",
      ],
    },
    {
      title: "Full Stack Intern | Glacier Agency",
      date: "July-2025 – Oct-2025",
      details: [
        "Developed custom Shopify apps using GraphQL Admin API.",
        "Built responsive interfaces with React.js and Node.js backend.",
        "Integrated API requests and automated e-commerce store processes.",
        "Collaborated on deployment, testing, and performance optimization workflows.",
        "Participated in code reviews to improve application reliability.",
      ],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-32 text-white relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">💼 My Experience</h2>

      <div className="relative h-[500px] overflow-y-auto custom-scrollbar p-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`group relative flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Detail Div */}
            <div className="w-full sm:w-5/12 relative p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 transition transform group-hover:scale-105 group-hover:shadow-yellow-400/50">
              <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-3">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:flex w-16 h-16 bg-yellow-400 rounded-full items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-125 mt-4 sm:mt-0">
              <FaBriefcase className="text-2xl text-gray-900" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};