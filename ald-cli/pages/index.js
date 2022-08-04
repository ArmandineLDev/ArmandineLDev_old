import Image from "next/image";
import homeCss from "./Home.module.css"

import codingImage from "../public/pictures/coding.jpg"
import SimpleCard from "../components/Cards/SimpleCard";

const HomePage = () => {
    return (
        <>
            <section>
                <article className={homeCss.homeSection}>
                    <div className={homeCss.presentation}>
                        <p>Bonjour !</p>
                        <p>Bienvenue chez moi !</p>
                        <h2 className={homeCss.identity}>Armandine BARGE</h2>
                        <h3 className={homeCss.activity}>Développeuse web et d'applications indépendante</h3>
                    </div>
                    <div className={homeCss.image}><Image src={codingImage} className={homeCss.imageStyle}/></div>

                </article>

                <article>
                    <p className={homeCss.needs}>Du sur-mesure pour vous</p>
                    <div className={homeCss.allCards}>
                        <SimpleCard>Un projet de création de site web pour votre e-commerce ou bien d'un site vitrine.</SimpleCard>
                        <SimpleCard>Un blog pour partager vos loisirs, vos résultats sportifs, ...</SimpleCard>
                        <SimpleCard>Une application mobile, en lien ou non avec votre site internet.</SimpleCard>
                        <SimpleCard>Un renfort ponctuel pour votre équipe de développeurs.</SimpleCard>
                        <SimpleCard>Actualisation d'un site existant.</SimpleCard>
                    </div>

                </article>
                <div className={homeCss.accessPlace}>
                    <button className={homeCss.accessServices}>Ce que je propose</button>
                </div>

            </section>
        </>
    )

}
export default HomePage;