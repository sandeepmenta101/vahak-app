import { Formik, Field, Form } from "formik";
import { useHistory } from 'react-router-dom';

import BidDetails from "./../../common/BidDetails/index";
import InputInterface from "./../../Interfaces/Input.interface";
import styles from "./styles.module.scss";
const initialValues = {
  amount: '',
  rateNegotiable: "",
};

export default function Rate() {
    const history = useHistory();

  const onSubmit = (values: object) => {
    history.push('/user-details');
  };

  return (
    <>
      <BidDetails
        source="Mumbai"
        destination="Bangalore"
        noOfTravellers="5"
        vehicleType="SUV"
      />
      <div className={styles.container}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Field name="amount">
              {(props: InputInterface) => {
                const { field, form, meta } = props;
                return (
                  <div className={styles.formControl}>
                    <i className="fas fa-rupee-sign"></i>
                    <input
                      type="number"
                      {...field}
                      className={styles.numberField}
                      placeholder="0"
                    />
                  </div>
                );
              }}
            </Field>
            <Field name="rateNegotiable">
                {
                    (props: InputInterface) => {
                        const { field, form, meta } = props;
                        return <div className={styles.checkboxContainer}>
                            <label>
                                <input type="checkbox" {...field} /> Rate Negotiable
                            </label>
                        </div>
                    }
                }
            </Field>
            <button type="submit">Next</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
