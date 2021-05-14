import BidDetails from './../../common/BidDetails/index';
import AmountDetails from './../../common/AmountDetails/index';
import styles from './styles.module.scss';
export default function SubmitForm(){
    return(
        <>
            <BidDetails source="Mumbai/MH" destination="Chennai/TN" noOfTravellers="5" vehicleType="SUV" />
            <AmountDetails amount="10000" />
            <button className={styles.button}>Submit Bid</button>
        </>
    )
}