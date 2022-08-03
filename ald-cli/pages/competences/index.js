import Header from "../../components/Header"

import CompetencesCss from './Competences.module.css'
import { SkillsDatas } from "../../datas/skills"
import SkillsCard from "./SkillsCard"

const CompetencesPage = () => {
    return (
        <>
            <Header />
            <h2>this is competences page</h2>
            {SkillsDatas.map((item, indexSection) => {
                return (

                    <>

                        <h3 key={indexSection}>{item.type}</h3>

                        <div className={CompetencesCss.skill}>{item.list.map((skill, indexSkill) => {
                            return (<SkillsCard skill={skill} key={indexSkill} />)
                        })}</div>
                    </>
                )
            })}
        </>
    )
}
export default CompetencesPage;