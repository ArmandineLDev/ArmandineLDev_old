//import servicesCss from "./Services.modules.css";

import Header from "../../components/Header";

const ServicesPage = () =>{
    return (
        <>
            <Header />
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
            <li>...</li>
                <li>Avec des entreprises et professionnels, des associations, des particuliers</li>
            </ul>
                <table>
                    <thead>
                    <th></th>
                    <th>SITE VITRINE BLOG STANDARD</th>
                    <th>SITE, BLOG, ou autres CREATIONS PERSONNALISES</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>charte graphique</li>
                                <li>complètement responsive : lisible sur tout support : smartphone, tablette, PC</li>
                                <li>sélection de votre palette couleur</li>
                                <li>une interface de gestion de vos contenus</li>
                                <li>Formulaire de contact</li>
                                <li>insertion de vos contenus (textes, images et autres medias)</li>
                                <li>ou après une courte formation, vous les gérez vous-mêmes</li>
                                <li>création des liens de partage vers vos réseaux sociaux (Facebook, Instagram, Pinterest,... )</li>
                                <li>mise en ligne du site sur vos serveurs ou les nôtres à votre choix)</li>
                                <li>plan du site</li>
                                <li>statistiques de visite du site</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>à partir de maquettes prédéfinies</li>
                                <li>X</li>
                                <li>à partir d'une liste de choix</li>
                                <li>standard</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>entièrement personnalisée</li>
                                <li>X</li>
                                <li> entièrement personnalisée</li>
                                <li>entièrement personnalisée</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            <p>Je mets un point d'honneur à ce que chaque produit soit le reflet exact de votre demande.</p>
<article>
    <h3>MAINTENANCE DE VOS OUTILS</h3>
    <ul>
        <li>mise à jour de contenus de sites et petites modifications graphiques</li>
        <li>sauvegarde du site à la fréquence choisie sur supports externalisés</li>
        <li>restauration de votre site en cas d'intrusion</li>
    </ul>
</article>
<article>
    <h3>AUTRES DEVELOPPEMENTS</h3>
</article>
<p>Pour toute demande d'information, de devis, n'hésitez pas à me contacter</p>

        </>

    )
}
export default ServicesPage;