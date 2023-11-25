import React from "react";
import { roboto, robotoBold, rubik } from "../../font_family/font_family";
import VerticalLink from "./VerticalLink";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Link from "next/link";

type HeaderProps = {
  swiper?: any | undefined;
  activePageNumber?: number;
};

const navItems = [
  {
    name: "ABOUT",
    id: 1
  },
  {
    name: "SKILLS",
    id: 2
  },
  {
    name: "WORKS",
    id: 3
  },
  {
    name: "CONTACT",
    id: 4
  }
];

const Header: React.FC<HeaderProps> = ({ swiper, activePageNumber }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 820px)"
  });
  const isPC = useMediaQuery({
    query: "(min-width: 1025px)"
  });
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav
        className={`max-w-[1500px] h-[3.5rem] md:h-[4rem] w-full fixed z-[100]  bg-mainBlue left-1/2 translate-x-[-50%] ${
          !isTablet && "mix-blend-difference bg-transparent"
        }`}
      >
        <div className="h-full w-4/5 mx-auto flex items-center justify-between">
          <Link
            onClick={(e) => {
              if (isPC) {
                e.preventDefault();
                swiper && swiper(0);
              }
            }}
            href={!isPC ? "#hero" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-7 h-7 text-white font-extrabold hover:scale-110 duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <div
            className={`${robotoBold.className} right-nav-wrapper text-fontGray`}
          >
            {isTablet ? (
              <button
                className="flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="white"
                  className="w-8 h-8 stroke-white"
                >
                  <path
                    stroke-linecap="square"
                    stroke-linejoin="square"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            ) : (
              <ul className="flex gap-[2rem]">
                {navItems.map((item) => {
                  let className = "text-white navButton inline-block relative ";
                  if (activePageNumber && item.id === activePageNumber) {
                    className =
                      "text-white activeNavButton inline-block relative";
                  }
                  return (
                    <Link
                      key={item.id}
                      onClick={(e) => {
                        if (isPC) {
                          e.preventDefault();
                          swiper && swiper(item.id);
                        }
                      }}
                      href={!isPC ? `#${item.name}` : ""}
                      className={className}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

// Define the type for the props
type MenuModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, setIsOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const ulVariants = {
    open: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const buttonVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: 1000 }
      }
    },
    closed: {
      y: 10,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: 1000 }
      }
    }
  };

  const modalVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.3, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };
  return (
    <>
      <motion.div
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        variants={modalVariants}
        className={`fixed left-0 top-0 w-screen h-full  z-[110] bg-[rgba(0,0,0,0.3)] backdrop-blur-sm  overflow-scroll 
         ${isOpen ? "" : "pointer-events-none"} `}
      >
        <button
          className="absolute top-6 right-[11%] "
          onClick={(e) => {
            if (isOpen) {
              e.stopPropagation();
              setIsOpen(false);
            }
          }}
          disabled={!isOpen}
        >
          <motion.svg
            viewBox="0 0 600 600"
            initial="hidden"
            className="stroke-[5rem] h-4 w-4"
            animate={isOpen ? "visible" : "hidden"}
          >
            <motion.line
              x1="0"
              y1="0"
              x2="600"
              y2="600"
              stroke="white"
              variants={draw}
            />
            <motion.line
              x1="0"
              y1="600"
              x2="600"
              y2="0"
              stroke="white"
              variants={draw}
            />
          </motion.svg>
        </button>
        <motion.ul
          variants={ulVariants}
          className={`  min-h-[500px] flex flex-col gap-[2rem] items-center justify-center text-[2rem] ${rubik.className} `}
        >
          {navItems.map((item) => {
            let className =
              "text-fontGray  relative drop-shadow-md  hover:text-[2.2rem]  hover:duration-300";
            return (
              <motion.a
                variants={buttonVariants}
                key={item.id}
                className={className}
                href={`#${item.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                {item.name}
              </motion.a>
            );
          })}
        </motion.ul>
      </motion.div>
    </>
  );
};
