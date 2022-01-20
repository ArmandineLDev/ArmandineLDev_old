import React from "react";
import Separator from "../../commons/Separator";
import { SkillsDatas } from "../../../datas/skills"
import SkillsCard  from "./SkillsCard";

const Skill = () => {
    const data = SkillsDatas;
  return (
    <>
        <label className="h2">Skills</label>
        <div className="">
          {data.map((item, indexSection) => {
            return (
              <div className="space-y-2" key={indexSection}>
                <h3 className="h3">{item.type}</h3>
                <div className="container flex flex-col 2sm:flex-row 2sm:flew-wrap space-y-2 2sm:space-y-0 2sm:space-x-4">
                   {item.list.map((skill, indexSkill) => {
                    return <SkillsCard skill={skill} key={indexSkill} />;
                  })}
                </div>
                 
              </div>
            );
          })}
        </div>
      
      <Separator />
    </>
  );
};

export default Skill;
