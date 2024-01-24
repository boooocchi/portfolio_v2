import React from "react";

type AccentSpanProps = {
  children: React.ReactNode;
};

const AccentSpan: React.FC<AccentSpanProps> = ({ children }) => {
  return (
    <span className="text-mainYellow font-bold lg:text-[1.1rem] sm:text-[1rem] text-[.8rem] drop-shadow-lg">
      {children}
    </span>
  );
};

export default AccentSpan;
