export default function Experience() {
  const experience = [
    {
      position: "Delivery Driver",
      company: "ICA Group",
      location: "Brunna, Stockholm",
      year: "May 2024 - Present",
      description:
        "As a driver, I manage logistics and ensure efficient, timely deliveries. I plan and execute delivery schedules with precision, maintaining high accuracy. My focus on professionalism and reliability consistently results in high customer satisfaction.",
      skills: [
        "Logistics",
        "Management",
        "Time",
        "Customer Service",
        "Problem-Solving",
        "Route Optimization",
      ],
    },
    {
      position: "Frontend Developer",
      company: "Freelance",
      location: "Stockholm, Sweden",
      year: "Oct 2023 - Present",
      description:
        "Freelance frontend developer delivering responsive and functional websites. Proficient in HTML, CSS, and JavaScript, participate in the joint development of various projects with other developers.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
      ],
    },
    {
      position: "Frontend Development Intern",
      company: "IT Nordic School",
      location: "Moscow, Russia",
      year: "Oct 2022 - Apr 2023",
      description:
        "During the internship I gained practical experience in web development technologies, including HTML, CSS, JavaScript, PHP, MySQL. I Collaborated with experienced developers and designers to build innovative web applications and worked directly with clients to meet their business objectives.",
      skills: [
        "HTML",
        "CSS (including Bootstrap)",
        "JavaScript",
        "Vue.js",
        "Docker",
        "GitHub",
        "PHP",
        "MySQL",
      ],
    },
  ];
  return (
    <section className="flex max-md:flex-col">
      <div className="w-full">
        <h1 className="text-3xl font-bold tracking-widest uppercase">
          Experience
        </h1>
        {experience.map((item, i) => (
          <div key={i} className="flex flex-col max-md:mb-8 gap-2">
            <h1 className="text-2xl my-2">{item.position}</h1>
            <h2 className="flex items-center max-sm:items-start relative">
              <span className="font-bold">{item.company}</span>, {item.location}
            </h2>
            <h3>{item.year}</h3>
            <p className="tracking-wide leading-6 text-gray-600">
              {item.description}
            </p>
            <p>
              <span className="font-bold">Skills: </span>{" "}
              {item.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
