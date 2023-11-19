import React from "react";

const Bgpattern = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="relative w-full h-full">
        <img
          src="/bg-zigzag.png"
          alt="zig-zag line"
          className="absolute -right-[10%] top-0 scale-75"
        />
        <img
          src="/bg-circles.png"
          alt="circles"
          className="absolute -bottom-10 -left-10 scale-[250%]"
        />
      </div>
    </div>
  );
};

export default Bgpattern;
