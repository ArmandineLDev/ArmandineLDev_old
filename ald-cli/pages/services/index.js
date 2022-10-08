import classes from './Services.module.css';


import PortfolioCard from "../../components/Cards/PortfolioCard";
import SimpleCard from "../../components/Cards/SimpleCard";
import ServiceCard from "../../components/Cards/ServiceCard";

const ServicesPage = () =>{
    return (
        <>
            <h2>Mes services</h2>
            <ul>
                <li>Création de sites internet standard : sites vitrines, blog, site e-commerce, site évènementiels</li>
                <p>Standard en fonction de design pré-créés ou entièrement sur-mesure</p>
                <li>Des développements spécifiques : Intranet / Extranet, des applications internes, ...</li>
                <li>Création d'applications web</li>
                <li>Gestion de projets</li>
                <li>Intégration web</li>
                <li>Mise à jour d'un site déjà existant</li>
                <li>La maintenance de vos outils web</li>
                <li>Avec des entreprises et professionnels, des associations, des particuliers</li>
            </ul>
            <div className={classes.serviceCards}>
            <SimpleCard>
                <ServiceCard>
                    <h3>SITES VITRINES & BLOGS STANDARDS</h3>
                    <ul>
                        <li>Charte graphique standard,</li>
                        <li>Complètement responsive (1),</li>
                        <li>Sélection de votre palette couleur à partir d'une liste préétablie,</li>
                        <li>Une interface standard de gestion de vos contenus,</li>
                        <li>Formulaire de contact,</li>
                        <li>Insertion de vos contenus (textes, images et autres medias)1</li>
                        <li>ou après une courte formation, vous les gérez vous-mêmes,</li>
                        <li>Création des liens de partage vers vos réseaux sociaux (Facebook, Instagram, Pinterest, ...),</li>
                        <li>Mise en ligne du site sur vos serveurs ou les nôtres (à votre choix),</li>
                        <li>Plan du site, ...</li>
                        {/*} <li>Statistiques de visite du site, ...</li>*/}
                    </ul>
                </ServiceCard>
            </SimpleCard>
            <SimpleCard>
                <ServiceCard>
                    <h3>SITE VITRINE, BLOG & AUTRES CREATIONS</h3>
                    <ul>
                        <li>Charte graphique personnalisée,</li>
                        <li>Complètement responsive (1),</li>
                        <li>Définition de votre palette couleur,</li>
                        <li>Une interface personnalisée de gestion de vos contenus,</li>
                        <li>Formulaire de contact,</li>
                        <li>Insertion de vos contenus (textes, images et autres medias)</li>
                        <li>ou après une courte formation, vous les gérez vous-mêmes,</li>
                        <li>Création des liens de partage vers vos réseaux sociaux (Facebook, Instagram, Pinterest, ...),</li>
                        <li>Mise en ligne du site sur vos serveurs ou les nôtres (à votre choix),</li>
                        <li>Plan du site, ...</li>
                        {/*} <li>Statistiques de visite du site, ...</li>*/}
                    </ul>
                </ServiceCard>
            </SimpleCard>
                {/*<div className={classes.otherServices}>*/}
                <SimpleCard>
                    <ServiceCard>
                        <h3>MAINTENANCE DE VOS OUTILS</h3>
                        <ul>
                            <li>mise à jour de contenus de sites et petites modifications graphiques</li>
                            <li>sauvegarde du site à la fréquence choisie sur supports externalisés</li>
                            <li>restauration de votre site en cas d'intrusion</li>
                        </ul>
                    </ServiceCard>

                </SimpleCard>
                {/*} <SimpleCard>
                    <ServiceCard>
                        <h3>AUTRES DEVELOPPEMENTS</h3>
                    </ServiceCard>
                </SimpleCard>*/}
                {/*} </div>*/}

            </div>
            (1) lisible sur tous les supports : ordinateurs, tablettes, smartphone

            <p>Je mets un point d'honneur à ce que chaque produit soit le reflet exact de votre demande.</p>

<article>

</article>
<p>Pour toute demande d'information, de devis, n'hésitez pas à me contacter</p>

        </>

    )
}
export default ServicesPage;