import AmountInterface from './../../Interfaces/Amount.interface';
import styles from '../styles.module.scss';
export default function AmountDetails({amount}: AmountInterface){
    return(
        <aside className={styles.amountContainer}>
            <h1><i className="fas fa-rupee-sign"></i> {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(Number(amount))}</h1>
        </aside>
    )
}