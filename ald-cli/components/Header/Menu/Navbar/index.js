import NavItem from './NavItem';
import { itemsDatas } from '../../../../datas/menu';
//import classes from "./Navbar.module.css"

const Navbar = () => {


    return (
        <>
            {
                itemsDatas.map((item) => {
                    return(
                        <li key={item.id}>
                            <NavItem name={item.menu} link={item.link}/>
                        </li>

                    )

                })
            }
        </>
    )
}

export default Navbar