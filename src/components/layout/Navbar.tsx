import { icons } from "@/assets";
import { Divider } from "../ui";

const Navbar = () => {
  return (
    <header>
      <div className="mx-auto flex w-11/12 flex-col items-center justify-between pt-8 pb-4 sm:flex-row sm:pt-4 sm:pb-4">
        <img
          src={icons.brandLogo}
          alt="Brand logo"
          className="hidden sm:block"
        />
        <button>
          <img src={icons.hamburger} alt="Hamburger menu" />
        </button>
      </div>
      <Divider />
    </header>
  );
};

export default Navbar;
