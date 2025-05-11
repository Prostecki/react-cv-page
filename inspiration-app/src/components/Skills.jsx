export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "React.js",
    "JavaScript (ES6)",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Git/GitHub",
    "Express.js",
    "REST API",
    "PHP",
    "Docker",
    "Vue.js",
    "Motion.dev",
    "Material UI",
    "Bootstrap",
  ];

  return (
    <section className="max-md:w-full flex flex-col items-start">
      <h1 className="text-3xl font-bold tracking-widest uppercase mb-3">
        Skills
      </h1>
      <ul className="">
        {skills.map((skill, i) => (
          <li className="list-none pl-0" key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
