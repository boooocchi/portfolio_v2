import Link from "next/link";
import React from "react";

import { useMediaQuery } from "react-responsive";

type VerticalLinkProps = {
  activePageNumber?: number;
};

const VerticalLink: React.FC<VerticalLinkProps> = ({ activePageNumber }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 820px)" //doesn't include 820px
  });
  const verticalLinkBaseClass = "fixed left-5 z-[999] duration-300";
  const additionalClass = isTablet
    ? "hidden"
    : activePageNumber === 0
    ? "bottom-10 invisible opacity-0"
    : "bottom-5 mix-blend-difference";

  return (
    <div className={`${verticalLinkBaseClass} ${additionalClass}`}>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="h-[5rem] w-[1px] bg-white"></span>
        <Link
          href="https://github.com/boooocchi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kota Ito's Github Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="github"
            className="h-[1.5rem] hover:scale-125 duration-300"
            fill="white"
          >
            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/kota-ito-%EF%BC%A0041212/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kota Ito's LinkedIn Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 100"
            id="linkedin"
            className="h-[1.6rem] fill-white hover:scale-125 duration-300"
          >
            <path d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path>
          </svg>
        </Link>
        <span className="h-[5rem] w-[1px] bg-white"></span>
      </div>
    </div>
  );
};

export default VerticalLink;
