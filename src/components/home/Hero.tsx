import { heroBanner, icons } from "@/assets";
import { Button, Divider } from "../ui";

const Hero = () => {
  return (
    <div className="relative mx-auto flex w-11/12 flex-col justify-between sm:flex-row">
      {/* Animations Overlays */}
      <div className="overlay-1 absolute top-[60%] left-[75%] z-10 h-32 w-[200px] rounded-[50px] bg-[#ECF9E8] blur-[100px]" />
      <div className="overlay-2 absolute top-[20%] right-[65%] z-10 h-28 w-[200px] rounded-[50px] bg-[#ECF9E8] blur-[90px]" />
      {/* CTA Section */}
      <div className="basis-8/12 pt-8 md:space-y-16 md:pt-28">
        <h1 className="pr-6 text-[32px] leading-[130%] md:pr-0 md:text-[64px]">
          Closen the technology of the future to help you{" "}
          <span className="innovate-text h- relative ml-3 inline-block align-middle sm:ml-0">
            <span className="opacity-0">Innovate</span>
            <span className="absolute inset-0">
              <span
                className="animate-slide-word-1 absolute inset-0 opacity-0"
                style={{ color: "#C8F4A6" }}
              >
                Innovate
              </span>
              <span
                className="animate-slide-word-2 absolute inset-0 opacity-0"
                style={{ color: "#E9DABD" }}
              >
                Connect
              </span>
              <span
                className="animate-slide-word-3 absolute inset-0 opacity-0"
                style={{ color: "#F3FFA6" }}
              >
                Inspire
              </span>
            </span>
          </span>
        </h1>
        <div className="hidden space-y-5 md:block">
          <p className="w-3/4 leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
            arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam
            a sollicitudin convallis purus. Sed sed quam risus laoreet viverra
            id ut amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed
            est malesuada lobortis aliquam dolor eget donec
          </p>

          <Button>Get Started</Button>
        </div>

        <div className="hidden py-12 md:block">
          <p className="text-[15px] leading-[150%] text-[#636D5B] underline underline-offset-3">
            Some of our clients
          </p>
          <div className="flex items-baseline gap-6 py-4">
            <img src={icons.apple} alt="Apple.Inc" />
            <img src={icons.google} alt="Google" />
            <img src={icons.microsoft} alt="Microsoft" className="p-1" />
          </div>
          <Divider className="mt-8" />
        </div>
      </div>
      {/* Image Section */}
      <div className="h-full max-w-[557px] p-4 md:p-10 xl:w-full">
        <img src={heroBanner} alt="Hero Banner" className="h-full w-full" />
      </div>
      <div className="mt-2 block md:hidden">
        <p className="text-sm leading-[150%] text-[#636D5B] underline underline-offset-3">
          Some of our clients
        </p>
        <div className="flex items-baseline gap-6 py-4">
          <img src={icons.apple} alt="Apple.Inc" />
          <img src={icons.google} alt="Google" />
          <img src={icons.microsoft} alt="Microsoft" className="py-1" />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default Hero;
