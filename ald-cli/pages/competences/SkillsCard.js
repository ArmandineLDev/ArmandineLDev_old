import Image from "next/image";
import SkillCardCss from './SkillsCard.module.css'
const SkillsCard = (skill) => {
    return (<div className={SkillCardCss.card}>
        <div >
            <Image
                src={`/pictures/skills-icons/${skill.skill.icon}`}
                layout='responsive'
                width={50}
                height={50}
                alt={skill.skill.name}
            />
        </div>
        <h4>{skill.skill.name}</h4>
    </div>

    )
}
export default SkillsCard;