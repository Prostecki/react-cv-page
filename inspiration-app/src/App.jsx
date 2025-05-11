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
    <section className="md:max-w-[1200px] m-auto my-5 pr-8 pl-8 drop-shadow-sm max-md:flex-col">
      <div>
        <Introduction />
      </div>
      <div className="flex justify-between w-full gap-8 items-start mt-10 max-md:flex-col-reverse">
        <div className="flex flex-col gap-5 max-md:flex-col max-md:items-start w-full">
          <Skills />
          <Education />
          <Social />
          <Languages />
        </div>
        <div className="flex w-full flex-col max-md:flex-col-reverse max-md:items-center">
          <Experience />
          <hr className="h-1 bg-gray-500 my-5" />
          <Courses />
        </div>
      </div>
    </section>
  );
}

export default App;
