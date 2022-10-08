import classes from './ServiceCard.module.css';

const ServiceCard = ({children}) =>{
    return(
        <div className={classes.card}>
            {children}
        </div>
    )
}
export default ServiceCard;