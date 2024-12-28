export default function Languages() {
  const languages = ["Russian", "Swedish", "English"];
  return (
    <section>
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-3">
        Languages
      </h1>
      <ul className="ml-5">
        {languages.map((item, i) => (
          <li className="list-disc my-1" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
