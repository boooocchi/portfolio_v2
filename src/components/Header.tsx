import React from "react";
import { roboto, robotoBold } from "../../font_family/font_family";
import VerticalLink from "./VerticalLink";

type HeaderProps = {
  swiper?: any | undefined;
  activePageNumber?: number;
};

const Header: React.FC<HeaderProps> = ({ swiper, activePageNumber }) => {
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

  return (
    <>
      <nav className="max-w-[1500px] h-[4rem] w-full fixed z-[100] mix-blend-difference bg-black left-1/2 translate-x-[-50%]">
        <div className="h-full w-4/5 mx-auto flex items-center justify-between">
          <button onClick={() => swiper && swiper(0)}>
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
          </button>
          <div
            className={`${robotoBold.className} right-nav-wrapper text-fontGray`}
          >
            <ul className="flex gap-[2rem]">
              {navItems.map((item) => {
                let className = "text-white navButton inline-block relative";
                if (activePageNumber && item.id === activePageNumber) {
                  className =
                    "text-white activeNavButton inline-block relative";
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => swiper && swiper(item.id)}
                    className={className}
                  >
                    {item.name}
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
