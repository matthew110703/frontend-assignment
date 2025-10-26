import { icons, image2 } from "@/assets";
import { Divider } from "../ui";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllProjects } from "@/lib/api";
import type { Project } from "@/types";

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProjects() {
    try {
      const res = await getAllProjects();
      setProjects(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-2/12 right-[50px] z-10 hidden lg:block lg:max-w-[400px] xl:top-1/12 xl:right-1/12 xl:max-w-full">
        <img src={image2} alt="Random Image" />
      </div>
      <h1 className="mb-12 px-4 text-3xl lg:text-6xl">
        Simple Solutions for Complex Connections. <br /> We are Pushing Limits.
      </h1>
      <div className="mx-auto">
        <Divider className="mx-auto w-11/12" />

        {!isLoading &&
          projects.length > 0 &&
          projects.map((project, idx) => (
            <React.Fragment key={project.id}>
              <div
                className={`flex flex-col items-start justify-between gap-y-4 py-8 pl-4 md:flex-row lg:pl-20 ${idx === 1 ? "bg-accent-2 *:text-[#1E3F04]" : "bg-transparent"}`}
              >
                <Link
                  to={project.link}
                  className="flex items-baseline gap-2 lg:w-2/6"
                >
                  <span className="text-2xl">{project.title}</span>{" "}
                  <img
                    src={idx !== 1 ? icons.arrowLink : icons.arrowLinkGreen}
                    alt="External Link"
                  />
                </Link>
                <p className="mr-auto text-sm leading-[150%] lg:w-1/4">
                  {project.description}
                </p>
              </div>
              <Divider className="mx-auto w-11/12" />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
