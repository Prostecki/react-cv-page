import "./App.css";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Social from "./components/Social";
import Languages from "./components/Languages";
import Courses from "./components/Courses";
import React from "react";

function App() {
  return (
    <section className="md:max-w-[1200px] m-auto my-5 drop-shadow-sm max-md:flex-col">
      <Introduction />
      <div className="flex flex-row-reverse justify-between w-full gap-8 items-start mt-10 max-md:flex-col max-md:gap-3 max-md:items-start">
        <div className="flex w-full flex-col max-md:items-start max-md:w-auto">
          <Experience />
          <hr className="h-0.5 bg-gray-300 my-5 max-md:my-2 max-md:w-full" />
          <Courses />
        </div>
        <div className="flex flex-col gap-5 max-md:items-start w-full max-md:w-auto">
          <Skills />
          <Education />
          <Social />
          <Languages />
        </div>
      </div>
    </section>
  );
}

export default App;
