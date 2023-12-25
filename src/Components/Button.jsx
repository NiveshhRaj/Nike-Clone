import React from "react";
import { arrowRight } from "../assets/icons";

export const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullwidth
}) => {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullwidth && 'w-full'}`}
      >
        {label}
        {iconURL && (
          <img
            src={arrowRight}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </div>
  );
};
