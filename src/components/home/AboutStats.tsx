import { womanInHatImage } from "@/assets";
import type { Stat } from "@/types";
import { getAboutStats } from "@/lib/api";
import { useState, useEffect } from "react";

const AboutStats = () => {
  const [aboutStats, setAboutStats] = useState<Stat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchStats() {
    try {
      const res = await getAboutStats();
      setAboutStats(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div className="flex flex-col items-start gap-x-8 gap-y-4 lg:flex-row lg:items-center">
      <div className="hidden h-full min-w-[424px] lg:block">
        <img src={womanInHatImage} alt="Woman In Hat" />
      </div>
      <div className="space-y-16 px-4">
        <h1 className="text-3xl leading-[110%] lg:w-3/4 xl:text-6xl">
          Empowered by Innovation, Commited by Intellect and Driven by Values
        </h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {!isLoading &&
            aboutStats.length > 0 &&
            aboutStats.map((stat) => (
              <div
                key={stat.id}
                className="mb-4 flex flex-col gap-y-3 border-l lg:mb-0"
              >
                <span className="bg-accent-gradient w-[60px] text-center text-[32px] text-[#1E3F04] lg:text-[40px]">
                  {stat.value < 10 ? `0${stat.value}` : `${stat.value}`}
                </span>
                <div className="flex flex-col gap-y-4 px-5 pt-3">
                  <span className="text-xl font-medium lg:text-2xl">
                    {stat.title}
                  </span>
                  <p className="text-xs leading-[150%] italic md:text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
