import classes from './SimpleCard.module.css';

const SimpleCard = ({children}) => {
    console.log(children)
    return (
        <div className={classes.card}>{children}</div>
    )
}
export default SimpleCard;