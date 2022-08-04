import CompetencesCss from './Competences.module.css'
import { SkillsDatas } from "../../datas/skills"
import SkillsCard from "./SkillsCard"
import SimpleCard from "../../components/Cards/SimpleCard";

const CompetencesPage = () => {
    return (
        <>
            <h2>this is competences page</h2>
            {SkillsDatas.map((item, indexSection) => {
                return (

                    <>

                        <h3 key={indexSection}>{item.type}</h3>

                        <div className={CompetencesCss.skill}>{item.list.map((skill, indexSkill) => {
                            return (<SimpleCard><SkillsCard skill={skill} key={indexSkill} /></SimpleCard>)
                        })}</div>
                    </>
                )
            })}
        </>
    )
}
export default CompetencesPage;