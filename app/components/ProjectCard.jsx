import Link from "next/link";
import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, url }) => {
  return (
    <div className="hover:scale-105 hover:shadow-xl">
      <div
        className="h-64 md:h-48 rounded-t-xl mt-4 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">
          <Link
            href={url}
            className="h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white group/link"
          >
            <LinkIcon className="h-9 w-9 text-gray-400 m-2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-neutral-800 p-6">
        <div className="text-center text-base font-bold sm:text-left">
          {title}
        </div>
        <div className="text-center text-base text-gray-400 sm:text-left divt-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
