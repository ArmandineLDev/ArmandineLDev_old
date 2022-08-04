import Header from "../Header";

import classes from './Layout.module.css';
import Footer from "../Footer";

const Layout = ({children}) =>{
    return(
        <>
        <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
        </>
    )
}
export default Layout;