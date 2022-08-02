import Image from "next/image";
import logoImage from "../../public/pictures/logo.png"
import classes from "./Header.module.css"
import Menu from "./Menu";

const Header = () =>{
    return (
        <div className={classes.header}>
            <div className={classes.logoTitle}>
                <Image src={logoImage} width={100}/>
                <h1 className={classes.title}>Armandine L Dev</h1>
            </div>
            <div>
                <Menu />
            </div>



        </div>
    )
}
export default Header;