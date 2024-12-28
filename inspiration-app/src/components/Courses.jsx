export default function Courses() {
  const courses = [
    {
      name: "FreeCodeCamp",
      date: "Nov 2023 - Jan 2024",
      description: "JavaScript Algorithms and Data Structures",
    },
    {
      name: "Udemy",
      date: "May 2024 - Sep 2024",
      description: "The Complete JavaScript Course 2024: From Zero to Expert",
    },
  ];
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold uppercase tracking-widest">
        Courses / Certifications
      </h1>
      {courses.map((item, i) => (
        <div className="flex flex-col gap-3" key={i}>
          <h1 className="font-bold">{item.name}</h1>
          <p>{item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
