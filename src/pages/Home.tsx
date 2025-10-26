import { Hero, Portfolio, AboutStats, Domains } from "@/components/home";
import { Button, Divider } from "@/components/ui";

const Home = () => {
  return (
    <div className="space-y-24 xl:space-y-32">
      <Hero />
      <Portfolio />
      <AboutStats />
      <Domains />
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h2 className="text-center text-3xl lg:text-6xl">
          You’ve got questions, we’ve got answers...{" "}
          <br className="block lg:hidden" /> Let’s Chat!
        </h2>
        <Button>Contact the Team</Button>
      </div>
      <Divider className="mb-10" />
    </div>
  );
};

export default Home;
