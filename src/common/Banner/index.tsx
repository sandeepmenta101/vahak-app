import styles from '../styles.module.scss';
import  BannerInterface from '../../Interfaces/Banner.interface';

export default function Banner(props: BannerInterface){
    
    return(
        <section className={styles.banner}>
            <h1>{props.content}</h1>
        </section>
    )
}