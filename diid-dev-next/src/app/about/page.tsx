import React from "react";

export default function About() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="text-center max-w-lg">
        <h1 className="text-xl font-bold mb-4">About Me</h1>
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p className="mb-4">
          An energetic and passionate individual with a strong interest in
          technology and programming. Particularly in Android and web
          development. Excellent at collaborating with others to achieve specific
          objectives on time and understanding foreign languages such as English
          and Japanese.
        </p>
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <span className="text-lg font-bold">Hacktiv8</span>
        <p className="mb-4">
          Full Stack JavaScript Immersive Program{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://drive.google.com/file/d/14umGQoNkEOmxNa3PxJxK8cXrAh6N6Wjj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Transcript)
          </a>
        </p>
        <span className="text-lg font-bold">Gunadarma University</span>
        <p>Bachelor of Informatics Engineering (GPA 3.04/4.00)</p>
      </div>
    </div>
  );
}
