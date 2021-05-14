import styles from '../styles.module.scss';
import TravelInterface from './../../Interfaces/Travel.interface';

export default function BidDetails({ source, destination, noOfTravellers, vehicleType }: TravelInterface){
    return(
        <div className={styles.card}>
            <aside className={styles.left}>
                <h4>Journey Details</h4>
                <h1>{source} - {destination}</h1>
                <h2>{noOfTravellers} Persons, {vehicleType}</h2>
            </aside>
            <aside className={styles.right}>
                <button><i className="fas fa-pencil-alt"></i> Edit</button>
            </aside>
        </div>
    )
}