import React from "react";

type AccentSpanProps = {
  children: React.ReactNode;
};

const AccentSpan: React.FC<AccentSpanProps> = ({ children }) => {
  return (
    <span className="text-mainYellow font-bold text-[.9rem] md:text-[1rem] drop-shadow-lg">
      {children}
    </span>
  );
};

export default AccentSpan;
