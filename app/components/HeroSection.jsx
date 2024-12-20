"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="contact">
      <div className="grid grid-cols-1 mx-8 mb-16 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 font-extrabold text-3xl sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-fuchsia-700">
              Hello, <br></br>
            </span>
            <TypeAnimation
              sequence={["I'm Joselin Permata.", 2000]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            A computer science student with a passion in Software Engineering,
            Web & Mobile Development, UI/UX Design. Constantly seeking new
            opportunities and further challenges myself by worked on various
            projects. I&apos;m excited for collaborating and expanding my skill
            and knowledge.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 mb-4 rounded-full bg-gradient-to-tr from-orange-300 to-fuchsia-700 text-neutral-900 font-semibold">
              Download CV
            </button>
            <a
              href="https://github.com/joselinprmt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="h-10 w-10" />
            </a>
            <a
              href="https://linkedin.com/in/joselin-permata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="h-10 w-10" />
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <Image
            src="images/hero.svg"
            alt="hero image"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
