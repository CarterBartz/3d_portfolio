import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [swinging, setSwinging] = useState(false);
  const [reappeared, setReappeared] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollTop > 600) {
        setSwinging(true);
      } else {
        setSwinging(false);
      }

      if (scrollTop > 875) {
        setReappeared(true);
      } else {
        setReappeared(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const swingingProps = useSpring({
    transform: `translateX(${swinging ? "-100%" : "0%"})`,
    config: { tension: 300, friction: 20 },
  });

  const reappearedProps = useSpring({
    transform: `translateY(${reappeared ? "0%" : "-100%"})`,
    config: { tension: 300, friction: 20 },
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center py-5 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <animated.div className="w-full" style={swingingProps}>
        <div className="container flex items-center justify-between mx-auto max-w-7xl">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="object-contain mr-5 w-9 h-9" style={{ transform: 'scale(2.5)' }}/>
            <p className="text-white text-[24px] font-bold cursor-pointer flex ">
              Carter Bartz &nbsp;
              <span className="hidden sm:block"> | Software Developer </span>
            </p>
          </Link>

          <ul className="flex-row hidden gap-10 sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer ml-4`}
                onClick={() => setActive(nav.title)}
              >
                <a 
                  href={`#${nav.id}`}
                  className="letter-bounce"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end flex-1 sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200] z-10 rounded-xl`}
            >
              <ul className="flex flex-col items-start justify-end flex-1 gap-4 pl-0 list-none">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </animated.div>




      <animated.div className="fixed top-0 h-screen left-5 w-50 bg-primary" style={reappearedProps}>
        {/* Vertical reappeared navbar */}
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center justify-start gap-4 mt-10">
            <Link
              to="/"
              className="flex flex-col items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" className="object-contain m-5 w-9 h-9" style={{ transform: 'scale(4)' }}/>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[24px] font-medium cursor-pointer pl-0 list-none mt-10 mb-10`}
                onClick={() => setActive(nav.title)}
              >
                <a 
                  href={`#${nav.id}`} 
                  style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
                  className="letter-bounce"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </div>
        </div>
      </animated.div>




    </nav>
  );
};

export default Navbar;
