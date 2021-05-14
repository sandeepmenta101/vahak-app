import styles from '../styles.module.scss';
import SelectInterface from '../../Interfaces/Select.interface';

export default function Select(props: SelectInterface){
    const { field, meta, options } = props;

    return(
        <div className={styles.form_select}>
            <select {...field}>
                {
                    options.map((option: TemplateStringsArray) => <option value={option}>{option}</option>)
                }
            </select>
        </div>
    )
}