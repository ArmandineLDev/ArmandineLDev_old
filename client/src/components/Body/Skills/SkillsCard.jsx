import React from 'react';

const SkillsCard = (skill) => {
  return <div className='flex flex-col py-4 px-2 border-2 border-zinc-700'> 
      <div>
          {skill.icon}
      </div>
      <label className=''>{skill.name}</label>
      

  </div>
};

export default SkillsCard;
