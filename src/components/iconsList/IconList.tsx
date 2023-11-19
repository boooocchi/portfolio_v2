import React from "react";

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
  return (
    <li>
      <div className="flex flex-col items-center justify-center gap-0 h-[4rem] w-[3.5rem] ">
        <div className="flex items-center h-4/5">
          <svg
            xmlns={xmlns}
            height="2.2rem"
            width="2.2rem"
            viewBox={viewBox}
            fill={fill}
          >
            <path d={path} />
            {path2 && <path d={path2} opacity="0.405" />}
            {path3 && <path d={path3} fill-rule="nonzero" opacity="0.405" />}
          </svg>
        </div>
        <div className="text-[.8rem] text-mainBlack text-center">{name}</div>
      </div>
    </li>
  );
};

export default IconList;
