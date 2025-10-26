import type { Stat, Project } from "@/types";
import db from "./db.json";

/**
 * Get All Projects
 */
export const getAllProjects = (): Promise<Project[]> => {
  return new Promise<Project[]>((resolve) => {
    setTimeout(() => {
      resolve(db.projects);
    }, 1000);
  });
};

/**
 * Get About Stats
 */
export const getAboutStats = (): Promise<Stat[]> => {
  return new Promise<Stat[]>((resolve) => {
    setTimeout(() => {
      resolve(db.stats);
    }, 1000);
  });
};
