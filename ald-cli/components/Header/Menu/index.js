import classes from "./Menu.module.css"
import {useState} from "react";
import Mobile from "./Mobile";
import Web from "./Web";
import Navbar from "./Navbar";

const Menu = () =>{
    const [isOpen, setIsOpen] = useState()
    return(
        <>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.burgerMenu}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setIsOpen(!isOpen)}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            <ul className={classes.webMenu}>
                <Navbar />
            </ul>

        </>
    )

}

export default Menu;