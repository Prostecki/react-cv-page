export default function Social() {
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/marktaratynov/",
    },
    {
      name: "Github",
      link: "https://github.com/Prostecki",
    },
  ];
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold uppercase tracking-widest">
        Social Network
      </h1>
      {socialLinks.map((item, i) => (
        <h2 key={i}>
          <span className="font-bold tracking-wide">{item.name}</span>:{" "}
          <a
            className="social-link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link}
          </a>
        </h2>
      ))}
    </section>
  );
}
