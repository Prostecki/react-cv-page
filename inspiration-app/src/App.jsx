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
    <section className="my-5 pr-8 pl-8 drop-shadow-sm">
      <Introduction />
      <div className="flex justify-between mt-10">
        <div className="flex flex-col gap-5">
          <Skills />
          <Education />
          <Social />
          <Languages />
        </div>
        <div className="flex flex-col w-[60%]">
          <Experience />
          <hr className="h-1 bg-gray-500 my-5" />
          <Courses />
        </div>
      </div>
    </section>
  );
}

export default App;
