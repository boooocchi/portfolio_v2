import React from "react";
import { useMediaQuery } from "react-responsive";

type iconLiProps = {
  xmlns: string;
  viewBox?: string;
  fill?: string;
  path: string;
  path2?: string;
  path3?: string;
  name: string;
};

const IconList: React.FC<iconLiProps> = ({
  xmlns,
  viewBox,
  fill,
  path,
  path2,
  path3,
  name
}) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 820px)"
  });

  return (
    <li>
      <div className="flex flex-col items-center justify-center gap-0 h-[3.5rem] w-[3.5rem] ">
        <div className="flex items-center h-4/5">
          <svg
            xmlns={xmlns}
            height={isTablet ? "1.7rem" : "2.2rem"}
            width={isTablet ? "1.7rem" : "2.2rem"}
            viewBox={viewBox}
            fill={fill}
          >
            <path d={path} />
            {path2 && <path d={path2} opacity="0.405" />}
            {path3 && <path d={path3} fillRule="nonzero" opacity="0.405" />}
          </svg>
        </div>
        <div className="text-[.6rem] sm:text-[.7rem] text-fontGray text-center">
          {name}
        </div>
      </div>
    </li>
  );
};

export default IconList;
