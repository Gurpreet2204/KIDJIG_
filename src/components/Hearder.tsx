import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hearder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-nav w-full h-[80px] flex sticky">
        <div className=" container mx-auto flex items-center justify-evenly ">
          <div className="w-24 rounded-3xl">
            <img
              src="https://s3-alpha-sig.figma.com/img/64fd/2ad3/fe72bd43def70cb321dc93b14a3b55fe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjAazcXUgIjozcC0IbjfEuF9Ug4TOSYxpeHM8pcaylZIN9p2sPgtUYjZJ9g38m6Ko5gd-GwK1B0knkh-vB6pa2K~cxP4lFTqJyQjS5DJ1TBn2XLGRHXY4gJtxpXVurrQU6zm~f2StLEN0ir~Cp2lgwn5-zXUBzQfKq6R1h-ysKplZAs1HkwN4e~4FS~2xHbUactwt6XYfoxMcqktRLaKfF9dKjjuwkfc4Pb~TtbvzoH-g1V7LjvqTGf0Fv5Kklc6IsWS6COdFMzO2p9YEg8Q8KMm36~7vY32RJtp9fRmqvfWM2fBpv20EH0Mt2ZpjWC41ZfrELQMjli9~PD7l~5K6Q__"
              alt="Logo"
            />
          </div>

          <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-[80px] left-0 w-full flex-col items-center md:relative md:flex md:flex-row md:top-0 md:w-auto`}
        >
          <ul
            className={`${
              isMenuOpen ? "bg-nav w-full items-center" : "md:bg-transparent"
            } flex flex-col md:flex-row text-white gap-4`}
          >
            <Link to={"/"} onClick={toggleMenu}>
              <li className="py-2 md:py-0">About</li>
            </Link>
            <Link to={"/"} onClick={toggleMenu}>
              <li className="py-2 md:py-0">Services</li>
            </Link>
            <Link to={"/"} onClick={toggleMenu}>
              <li className="py-2 md:py-0">Process</li>
            </Link>
            <Link to={"/"} onClick={toggleMenu}>
              <li className="py-2 md:py-0">Work</li>
            </Link>
            <Link to={"/"} onClick={toggleMenu}>
              <li className="py-2 md:py-0">Pricing</li>
            </Link>
            <Link to={"/"} onClick={toggleMenu}>
              <li className="py-2 md:py-0">FAQs</li>
            </Link>
          </ul>
        </div>

          <button className="hidden md:flex font-semibold items-center justify-center text-white border border-indigo-600 h-12 w-28 rounded-xl">
            Book a call
          </button>
        </div>
      </nav>
    </>
  );
};

export default Hearder;
