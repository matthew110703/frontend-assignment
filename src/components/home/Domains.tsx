import { domains } from "@/assets";

const allDomains = [
  { id: 1, title: "Administration", img: domains.administration },
  { id: 2, title: "Design", img: domains.design },
  { id: 3, title: "Development", img: domains.development },
  { id: 4, title: "AI", img: domains.ai },
];

const Domains = () => {
  return (
    <div className="space-y-8">
      <h1 className="px-4 text-3xl leading-[110%] lg:text-6xl">
        Our teams are continuously developing innovative strategies, building
        new technologies, and conducting ongoing research.
      </h1>
      <div className="flex flex-col gap-1 px-1 lg:flex-row">
        {allDomains.map((domain) => (
          <figure key={domain.id} className="relative">
            <img
              src={domain.img}
              alt={domain.title}
              className={`aspect-video w-full object-cover lg:aspect-auto lg:max-h-fit ${domain.id === 3 ? "min-h-[314px]" : "max-h-[150px]"} ${domain.id === 4 ? "object-[5%_18%]" : ""}`}
            />
            <figcaption className="absolute bottom-4 left-4 z-10 text-2xl font-bold">
              {domain.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Domains;
