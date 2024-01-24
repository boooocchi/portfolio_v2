import React from "react";
import { robotoBold, rubik } from "../../font_family/font_family";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";

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

type OptionLanguage = {
  value: "ja" | "en";
  label: string;
};

const Header: React.FC<HeaderProps> = ({ swiper, activePageNumber }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 820px)"
  });
  const isPC = useMediaQuery({
    query: "(min-width: 1025px)"
  });
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const languageOptions: OptionLanguage[] = [
    { value: "en", label: "EN" },
    { value: "ja", label: "JP" }
  ];
  const { i18n } = useTranslation();

  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);

  const toggleLanguageMenuModal = () => {
    setIsOptionsVisible((prev) => !prev);
  };
  const handleSwitchLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setIsOptionsVisible(false);
  };

  return (
    <>
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav
        className={`max-w-[1500px] h-[3.5rem] md:h-[4rem] w-screen fixed z-[100]  bg-mainBlue  ${
          !isTablet && "mix-blend-difference bg-transparent"
        }`}
      >
        <div className="h-full md:w-4/5 w-[90%] mx-auto flex items-center justify-between">
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
              <ul className="flex gap-[2rem] items-center">
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
                <div className="relative">
                  <button onClick={toggleLanguageMenuModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      id="language"
                      className="w-9 h-9 relative top-1"
                    >
                      <path
                        fill="white"
                        d="M31.33 23.48a7.06 7.06 0 0 0-4.79 1.87 1.48 1.48 0 0 0-.94-.35 8.13 8.13 0 0 1-3.11-.59 12.28 12.28 0 0 0 2.48-6.3h.66a1.5 1.5 0 0 0 0-3h-4.29v-2.33a1.5 1.5 0 1 0-3 0v2.34h-4.26a1.5 1.5 0 0 0 0 3h7.84A9 9 0 0 1 20 22.67a9.32 9.32 0 0 1-1.76-2.93 1.5 1.5 0 1 0-2.82 1 12.38 12.38 0 0 0 2.11 3.63 9.28 9.28 0 0 1-3.42.6 1.5 1.5 0 1 0 0 3A11.3 11.3 0 0 0 20 26.54 10.42 10.42 0 0 0 24.71 28a7 7 0 0 0-.51 2.63v1.12H13.77a1.5 1.5 0 0 0-1.14.52 1.47 1.47 0 0 0-.34 1.21c0 .1.19 1.23.53 2.82a1 1 0 0 1-1.57 1C8.1 35 4.74 32.2 3.69 30.23a1.82 1.82 0 0 0-.15-.23 4.07 4.07 0 0 1-.74-2.35V11.52a4.13 4.13 0 0 1 4.13-4.13h25.74a4.13 4.13 0 0 1 4.13 4.13v12Zm29.87 7.13V46.7a4 4 0 0 1-.74 2.35 1.17 1.17 0 0 0-.15.27c-1 2-4.41 4.77-7.56 7.09a1 1 0 0 1-1.57-1c.34-1.6.52-2.73.53-2.83a1.49 1.49 0 0 0-1.48-1.73h-18.9a4.13 4.13 0 0 1-4.13-4.15V30.61a4.13 4.13 0 0 1 4.13-4.13h25.74a4.13 4.13 0 0 1 4.13 4.13Zm-10.42 14-1.73-4.31-3.42-8.56a1.3 1.3 0 0 0-.08-.17l-.06-.1-.09-.12-.09-.1-.1-.09-.13-.1L45 31l-.16-.09a.38.38 0 0 0-.1 0l-.16-.05H44l-.17.05a.38.38 0 0 0-.1 0l-.15.09-.11.05-.12.1-.1.09-.09.1-.1.12s0 .07-.05.1l-.09.17-3.5 8.57-1.73 4.32a1.51 1.51 0 0 0 .84 2 1.55 1.55 0 0 0 .56.11 1.51 1.51 0 0 0 1.39-1l1.34-3.35h4.84L48 45.73a1.49 1.49 0 0 0 1.39 1 1.54 1.54 0 0 0 .55-.11 1.5 1.5 0 0 0 .84-2ZM43 39.38h2.44l-1.22-3Z"
                      ></path>
                    </svg>
                  </button>
                  {isOptionsVisible && (
                    <ul className="absolute w-full top-[2.7rem]">
                      {languageOptions.map((option, index) => (
                        <motion.option
                          initial={{ opacity: 0, y: "70%" }}
                          animate={{
                            opacity:
                              i18n.language !== option.value ? "0.5" : "1",
                            y: 0
                          }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          value={option.value}
                          key={index}
                          onClick={() => handleSwitchLanguage(option.value)}
                          className={`underline text-center cursor-pointer ${
                            i18n.language !== option.value && "opacity-25"
                          }`}
                        >
                          {option.label}
                        </motion.option>
                      ))}
                    </ul>
                  )}
                </div>
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
  const { i18n } = useTranslation();

  const jpButtonBgColor =
    i18n.language === "ja" ? "bg-white text-mainBlue" : "";
  const enButtonBgColor =
    i18n.language === "en" ? "bg-white text-mainBlue" : "";

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
  const navLiClassName =
    "text-fontGray  relative drop-shadow-md  hover:text-[2.2rem]  hover:duration-300";
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
          className="absolute top-6 right-[11%] xs:right-[8%]"
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
          className={`  min-h-[550px] flex flex-col gap-[2rem] items-center justify-center text-[2rem] ${rubik.className} `}
        >
          {navItems.map((item) => {
            return (
              <motion.a
                variants={buttonVariants}
                key={item.id}
                className={navLiClassName}
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
          <motion.div
            variants={buttonVariants}
            className="flex flex-col gap-2 text-[.8rem] items-center text-white
              "
          >
            <span>language</span>
            <div className="flex gap-5">
              <button
                className={`border border-white px-2 py-1 ${enButtonBgColor} `}
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </button>
              <button
                className={`border border-white px-2 py-1 ${jpButtonBgColor} `}
                onClick={() => {
                  i18n.changeLanguage("ja");
                }}
              >
                JP
              </button>
            </div>
          </motion.div>
        </motion.ul>
      </motion.div>
    </>
  );
};
