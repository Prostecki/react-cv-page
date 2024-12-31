export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "React.js",
    "JavaScript (ES6)",
    "Git/GitHub",
    "Tailwind CSS",
    "Node.js",
    "MySQL",
    "Vue.js",
    "PHP",
    "Docker",
    "API Integration",
    "Motion.dev",
    "Material UI",
  ];

  return (
    <section className="w-60">
      <h1 className="text-3xl font-bold tracking-widest uppercase mb-3">
        Skills
      </h1>
      <ul className="ml-5 w-max">
        {skills.map((skill, i) => (
          <li className="list-disc" key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
