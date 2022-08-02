import Header from "../components/Header";
import Image from "next/image";
import homeCss from "./Home.module.css"

import codingImage from "../public/pictures/coding.jpg"

const HomePage = () => {
    return (
        <div>
            <Header />
            <main className={homeCss.main}>
                <article className={homeCss.homeSection}>
                    <div className={homeCss.presentation}>
                        <p>Hello, je suis</p>
                        <h2 className={homeCss.identity}>Armandine BARGE</h2>
                        <h3 className={homeCss.activity}>Développeuse web et d'applications indépendante</h3>
                    </div>
                    <div className={homeCss.image}><Image src={codingImage} /></div>

                </article>
                <article className={homeCss.services}>
                    <ul className={homeCss.servicesList}>
                        <li>Vous avez un projet de création de site web pour votre e-commerce ou bien d'un site vitrine.</li>
                        <li>Vous avez besoin d'un blog pour partager vos loisirs, vos résultats sportifs, ...</li>
                        <li>Pour développer votre activité vous avez besoin d'une application mobile, en lien ou non avec votre site internet</li>
                        <li>Vous avez déjà une équipe de développeurs et avez besoin d'un renfort ponctuel.</li>
                        <li>Vous avez déjà des outils existants et avez besoin de les actualiser.</li>
                    </ul>
                    <button className={homeCss.accessServices}>Ce que je propose</button>


                </article>
            </main>
        </div>
    )

}
export default HomePage;