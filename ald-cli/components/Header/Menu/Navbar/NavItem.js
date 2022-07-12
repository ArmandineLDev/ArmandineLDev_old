import Link from "next/link";
import classes from "./Navitem.module.css"

const NavItem = ({name, link}) => {
    return (
       <Link href={link}>
           <a className={classes.navItem}>{name}</a>
       </Link>
    )
}

export default NavItem