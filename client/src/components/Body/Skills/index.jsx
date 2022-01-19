import React from "react";
import Separator from "../../commons/Separator";
import { SkillsDatas } from "../../../datas/skills"
import SkillsCard  from "./SkillsCard";

const Skill = () => {
    const data = SkillsDatas;
  return (
    <>
        <label className="section-title">Skills</label>
        <div className="skills-container">
          {data.map((item, indexSection) => {
            return (
              <div className="skills-section" key={indexSection}>
                <label className="skills-section-title">{item.type}</label>
                <div className="skills-section-list">
                  {item.list.map((skill, indexSkill) => {
                    return <SkillsCard skill={skill} key={indexSkill} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )
      <Separator />
    </>
  );
};

export default Skill;
