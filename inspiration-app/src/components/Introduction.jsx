import ProfilePhoto from "./ProfilePhoto";
import Contacts from "./Contacts";

export default function Introduction() {
  return (
    <section className="flex max-md:flex-col-reverse max-md:items-center md:gap-10">
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-6xl text-start font-bold uppercase drop-shadow-lg max-md:text-center max-md:text-2xl">
          Mark Taratynov
        </h1>
        <p className="text-2xl tracking-widest uppercase max-md:text-center max-md:text-xl">
          Fullstack Developer
        </p>
        <p className="leading-8 text-lg text-gray-600 max-md:text-wrap">
          My journey in tech began at 10 when I fixed my first PC, sparking a
          lifelong passion for problem-solving and development. As a former
          elite athlete, I bring perseverance, determination, and a
          results-driven mindset to every project. Committed to continuous
          learning, I focus on delivering impactful solutions while advancing my
          skills in modern web technologies.
        </p>
        <p className="tracking-wider">
          My core principle: <span className="font-extrabold">patience</span>{" "}
          and <span className="font-extrabold">effort</span> drive progress.
        </p>
        <div>
          <Contacts />
        </div>
      </div>
      <ProfilePhoto />
    </section>
  );
}
