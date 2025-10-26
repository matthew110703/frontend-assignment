import { icons } from "@/assets";
import { Link } from "react-router-dom";

const infoLinks = [
  { id: 1, title: "About Us" },
  { id: 2, title: "Origins" },
  { id: 3, title: "FAQs" },
  { id: 4, title: "Contact" },
  { id: 5, title: "Legal" },
];

const contactDetails = {
  mail: "contact@cyberdivisino.tn",
  phone: "+216 29 065 054",
  address: "Susah, Imm Ibrahim, 6th Floor",
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around gap-y-8 px-4 lg:mb-8 lg:flex-row lg:items-start">
      <div>
        <img src={icons.brandLogo} alt="Brand Logo" />
      </div>
      <div className="flex w-full flex-row items-start justify-around lg:contents">
        <div className="space-y-2">
          <p className="text-[15px] leading-[150%] font-medium tracking-[3%]">
            Information
          </p>
          <ul className="space-y-2">
            {infoLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className="text-[13px] leading-[150%] tracking-[3%]"
                  to={"#"}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[15px] leading-[150%] font-medium tracking-[3%]">
            Contact Us
          </p>
          <ul className="space-y-2 *:text-[13px] *:leading-[150%] *:tracking-[3%]">
            <li>{contactDetails.mail}</li>
            <li>{contactDetails.phone}</li>
            <li>{contactDetails.address}</li>
          </ul>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[15px] leading-[150%] font-medium tracking-[3%]">
          Follow us On Social Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
