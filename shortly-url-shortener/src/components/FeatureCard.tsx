import React from "react";
import { FeatureCardProps } from "../types";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  offset = "",
  className = "",
}) => {
  return (
    <div className={`bg-white px-5 py-3 h-[13rem] rounded-lg shadow-md relative ${offset} ${className}`}>
      <div className="bg-[#3b3054] max-w-full rounded-full w-16 h-16 flex justify-center items-center md:mx-0 mx-auto -mt-12 mb-6">
        <img
          src={icon}
          alt={title}
          className="p-3"
          width="64"
          height="64"
        />
      </div>
      <h3 className="text-slate-800 text-xl font-bold mb-3 md:text-left">{title}</h3>
      <p className="text-slate-400 text-[15px] md:text-left">{description}</p>
    </div>
  );
};

export default FeatureCard;