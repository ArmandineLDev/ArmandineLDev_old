import React from "react";

const SkillsCard = (skill) => {
  return (
    <div className="flex flex-col py-4 px-4 border-2 border-zinc-700 rounded-2xl items-center space-y-2">
      <img
        className="h-24 w-24"
        src={skill.skill.icon}
        alt={skill.skill.name}
      />
      <h4 className="h4">{skill.skill.name}</h4>
    </div>
  );
};

export default SkillsCard;
