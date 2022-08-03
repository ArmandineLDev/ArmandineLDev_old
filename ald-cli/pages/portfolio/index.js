import Header from "../../components/Header";
import { projectDatas } from '../../datas/project'
import PortfolioCard from "../../components/Cards/PortfolioCard";

const Portfolio = () =>{
    return (
        <>
            <Header />
            <h3>Mes réalisation</h3>
            <div>
                {projectDatas.map((project, indexProject)=>{
                    return <PortfolioCard project={project} key={indexProject} />
                })}
            </div>
        </>
    )
    }
    export default Portfolio;