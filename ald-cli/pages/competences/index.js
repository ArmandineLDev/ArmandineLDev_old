import {SkillsDatas} from "../../datas/skills"
const CompetencesPage = () => {
    return (
        <div>
            <h2>this is competences page</h2>
            {console.log(SkillsDatas)}
            {SkillsDatas.map((item, indexSection)=>{
                console.log('item', indexSection)
                return(

<>

                        <h3 key={indexSection}>{item.type}</h3>
                        {console.log(item.list.map)}

                        <div>{item.list.map((skill, indexSkill)=>{
                            console.log('skill', indexSkill)
                            return(<div><p key={indexSkill}>{skill.name}</p>
                                <p>{skill.icon}</p>
                                <img src={`../../public/pictures/skills-icons/${skill.icon}`} alt={'truc'}/></div>)
                        })}</div>
            </>
                )
            })}
        </div>
    )
}
export default CompetencesPage;