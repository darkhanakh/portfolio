import React from "react";
import { type Experience as ExperienceProps } from "@/lib/getExperience";

const ExperienceItem: React.FC<ExperienceProps> = ({
  position,
  organization,
  responsibilities,
  location,
  start_date,
  end_date,
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-semibold text-white">{position}</h3>
      <h4 className="text-lg font-semibold text-white">
        {organization} ({location})
      </h4>
      <p className="text-gray"></p>
      <p className="text-gray">
        {start_date} - {end_date}
      </p>
      <ul>
        {responsibilities.map((responsibility) => (
          <li
            className="text-white before:content-['❖'] before:mr-1 before:text-indigo-500"
            key={responsibility}
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
