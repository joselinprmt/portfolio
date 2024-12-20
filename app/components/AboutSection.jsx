"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const aboutData = [
  {
    title: "Tech Stacks",
    id: "techStacks",
    content: (
      <>
        <h3 className="text-center text-base text-gray-400 sm:text-left">
          Programming Languages & Database
        </h3>
        <div className="flex flex-row flex-wrap justify-center items-center sm:justify-start">
          <img
            className="m-2"
            alt="Python"
            title="Python"
            width="28px"
            height="auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
          />
          <img
            className="m-2"
            alt="Java"
            title="Java"
            width="28px"
            height="auto"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
          />
          <img
            className="m-2"
            alt="Kotlin"
            title="Kotlin"
            width="28px"
            height="auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png"
          />
          <img
            className="m-2"
            alt="JavaScript"
            title="JavaScript"
            width="28px"
            height="auto"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          />
          <img
            className="m-2"
            alt="Postgresql"
            title="Postgresql"
            width="28px"
            height="auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png"
          />
        </div>

        <h3 className="text-center text-base text-gray-400 my-2 sm:text-left">
          Frameworks & Tools
        </h3>
        <div className="flex flex-row flex-wrap justify-center items-center sm:justify-start">
          <img
            className="m-2"
            alt="Django"
            title="Django"
            width="28px"
            height="auto"
            src="https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png"
          />
          <img
            className="m-2"
            alt="Spring Boot"
            title="Spring Boot"
            width="28px"
            height="auto"
            src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
          />
          <img
            className="m-2"
            alt="Figma"
            title="Figma"
            width="28px"
            height="auto"
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-1024.png"
          />
        </div>

        <h3 className="text-center text-base text-gray-400 my-2 sm:text-left">
          Web Development
        </h3>
        <div className="flex flex-row flex-wrap justify-center items-center sm:justify-start">
          <img
            className="m-2"
            alt="HTML5"
            title="HTML5"
            width="28px"
            height="auto"
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/96-html5-1024.png"
          />
          <img
            className="m-2"
            alt="CSS"
            title="CSS"
            width="28px"
            height="auto"
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-1024.png"
          />
          <img
            className="m-2"
            alt="Tailwind CSS"
            title="Tailwind CSS"
            width="28px"
            height="auto"
            src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
          />
          <img
            className="m-2"
            alt="React"
            title="React"
            width="28px"
            height="auto"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
          <img
            className="m-2"
            alt="Next.js"
            title="Next.js"
            width="28px"
            height="auto"
            src="https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=FFFFFF"
          />
          <img
            className="m-2"
            alt="Node.js"
            title="Node.js"
            width="28px"
            height="auto"
            src="https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=FFFFFF"
          />
        </div>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <h3 className="text-center text-base font-bold sm:text-left">
          Undergraduate Computer Science,
          <br />
          Universitas Indonesia
        </h3>
        <p className="text-center text-sm font-bold mt-2 sm:text-left">
          2021 - Present
        </p>
        <p className="text-center text-sm font-bold sm:text-left">GPA: 3.51</p>
        <p className="text-center text-sm font-bold sm:text-left">
          Relevant Coursework:
        </p>
        <p className="text-center text-sm mt-2 sm:text-left">
          Software Engineering Project
          <br />
          Platform-Based Programming
          <br />
          Advanced Programming
          <br />
          Human Computer Interaction
          <br />
          Data Structure & Algorithms
          <br />
          Introduction to AI & Data Science
          <br />
          Databases
        </p>
      </>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <h3 className="text-center text-base font-bold sm:text-left">
          Bangkit Academy 2024 Batch 1
        </h3>
        <p className="text-center text-sm pb-3 sm:text-left">
          Mobile development cohort
        </p>

        <h3 className="text-center text-base font-bold sm:text-left">
          Teaching assistant
        </h3>
        <p className="text-center text-sm pb-3 sm:text-left">
          of Scientific Writing & Research Methodology
        </p>

        <h3 className="text-center text-base font-bold sm:text-left">
          BEM Fasilkom UI
        </h3>
        <p className="text-center text-sm sm:text-left">
          Deputy Head of Science Department
        </p>
        <p className="text-center text-sm pb-3 sm:text-left">
          Science Department Intern
        </p>

        <h3 className="text-center text-base font-bold sm:text-left">
          Wisuda Virtual Fakultas Ilmu Komputer UI 2022
        </h3>
        <p className="text-center text-sm pb-3 sm:text-left">
          Staff of Creative
        </p>
      </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("techStacks");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start xl:gap-14 sm:pb-8 xl:px-8">
        <div className="hidden md:flex justify-center">
          <Image
            src="images/about.svg"
            alt="hero image"
            width={300}
            height={300}
            className="mt-8"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mt-4 text-center sm:text-left">
            About Me
          </h2>
          <div className="flex flex-row mt-8 justify-center sm:justify-start">
            <TabButton
              selectTab={() => handleTabChange("techStacks")}
              active={tab === "techStacks"}
            >
              Tech Stacks
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="my-4">
            {aboutData.find((t) => t.id === tab).content}
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default AboutSection;
