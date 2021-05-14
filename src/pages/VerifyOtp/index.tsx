import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';
import BidDetails from '../../common/BidDetails/index';
import AmountDetails from '../../common/AmountDetails/index';
import VerifyOtpInterface from '../../Interfaces/VerifyOtp.interface';
export default function VerifyOtp(){
    const [otp, setOtp] = useState({otp_1: '', otp_2: '', otp_3: '', otp_4: ''});
    const history = useHistory();
    const [disabledSubmit, setDisabledSubmit] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { maxLength, name, value } = event.currentTarget;
        const [fieldName, fieldIndex] = name.split('_');
        if(value.length >= maxLength){
            if(parseInt(fieldIndex, 10) < 4){
                const nextSibling = document.querySelector(`input[name=otp_${parseInt(fieldIndex, 10) + 1}]`);
                if(nextSibling){
                    (nextSibling as HTMLInputElement).focus();
                }
            }
        }
        setOtp((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
        const otpValues = Object.values(otp).join('');
        if(otpValues.length === 3){
            setDisabledSubmit(false);
        }
    }

    const submitForm = () => {
        const otpValues = Object.values(otp).join('');
        if(otpValues === '1234'){
            history.push('/submit');
        }
    }

    return(
        <>
            <BidDetails source="Mumbai/MH" destination="Chennai/TN" noOfTravellers="5" vehicleType="SUV" />
            <AmountDetails amount="10000"/>
            <div className={styles.otpContainer}>
                <p>We've sent an OTP to your mobile number. Please enter it below to submit your bid <button><i className="fas fa-pencil-alt"></i> Edit</button></p>
                <div className={styles.otpForm}>
                    <input type="number" maxLength={1} onChange={handleChange} name="otp_1" value={otp.otp_1} />
                    <input type="number" maxLength={1} onChange={handleChange} name="otp_2" value={otp.otp_2} />
                    <input type="number" maxLength={1} onChange={handleChange} name="otp_3" value={otp.otp_3} />
                    <input type="number" maxLength={1} onChange={handleChange} name="otp_4" value={otp.otp_4} />
                </div>
                <button onClick={submitForm} disabled={disabledSubmit}>Verify OTP</button>
            </div>
        </>
    )
}