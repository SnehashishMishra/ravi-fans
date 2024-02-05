import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const Button = ({ type, handleClick }) => {
  const arrow = () => {
    switch (type) {
      case "up":
        return <FiArrowUp size={"2em"} color="white" />;
      case "up-right":
        return <FiArrowUpRight size={"2em"} color="white" />;
      default:
        return "😑";
    }
  };
  return (
    <button
      className="bg-[#FF1F25] p-2 rounded-full relative z-10"
      onClick={handleClick}
    >
      {arrow()}
    </button>
  );
};

export default Button;
