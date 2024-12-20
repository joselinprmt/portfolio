import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "UMMIL-L: RS Ummi Logistic App",
    description:
      "A web application designed to supports hospital logistics by enabling efficient inventory management and order tracking. Developed using Django and PostgreSQL, it supports healthcare facilities in optimizing their logistical operations.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    url: "https://gitlab.cs.ui.ac.id/eldira.lahanny/a4-logistik",
  },
  {
    id: 2,
    title: "Worldie: Around the World",
    description:
      "A web-based platform that connects travelers, allowing them to share insights and reviews about tourist destinations worldwide. Built using Nest JS and Next JS, it provides a collaborative space for exploring and discussing travel experiences.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    url: "https://github.com/WorldieATW",
  },
  {
    id: 3,
    title: "Ngetech",
    description:
      "A web and mobile application designed for sharing technology-related content, supporting the G20 program's vision of global collaboration. Developed using Django and Flutter, it fosters knowledge exchange within the tech community.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    url: "https://github.com/ngetech",
  },
  {
    id: 4,
    title: "CatarAct: Early Cataract Detection",
    description:
      "A mobile application designed for early cataract detection using image recognition. Built with Kotlin, it combines an intuitive user interface, machine learning models powered by TensorFlow, and a cloud-based API server to provide fast and accurate results.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    url: "https://github.com/cataract-bangkit/android/",
  },
  {
    id: 5,
    title: "Dicoding Story",
    description:
      "A mobile application that allows users to upload and share stories with text, images, and location details. Built with Kotlin, it features an intuitive interface for an engaging user experience.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    url: "https://www.linkedin.com/posts/joselin-permata_dicoding-story-joselin-permata-aprillia-activity-7207430514113142784-J_Sn/?utm_source=share&utm_medium=member_desktop",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold text-white my-8 text-center">
        My projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            description={proj.description}
            imgUrl={proj.image}
            tag={proj.tag}
            url={proj.url}
          />
        ))}{" "}
      </div>
    </section>
  );
};

export default ProjectSection;
