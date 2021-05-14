import { Formik, Form, Field } from "formik";

import BidDetails from "./../../common/BidDetails/index";
import AmountDetails from "./../../common/AmountDetails/index";
import InputInterface from "./../../Interfaces/Input.interface";
import Input from "../../common/Input";
import styles from "./styles.module.scss";
const initialValues = {
  phoneNumber: "",
  username: "",
  remarks: "",
};

export default function UserDetails() {
  const onSubmit = (values: object) => {
  };
  return (
    <>
      <BidDetails
        source="Mumbai/MH"
        destination="Chennai/TN"
        vehicleType="SUV"
        noOfTravellers="5"
      />
      <AmountDetails amount="10000" />
      <div className={styles.formContainer}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Field name="phoneNumber">
              {(props: InputInterface) => {
                props["id"] = "phoneNumber";
                props["labelName"] = "Enter your 10 digits Mobile Number";
                props["inputType"] = "number";
                props["placeholder"] = "Enter your 10 digits Mobile Number";
                return <Input {...props} />;
              }}
            </Field>
            <Field name="username">
              {(props: InputInterface) => {
                props["id"] = "username";
                props["labelName"] = "Enter your Name";
                props["inputType"] = "text";
                props["placeholder"] = "Enter your Name";
                return <Input {...props} />;
              }}
            </Field>
            <Field name="remarks">
              {(props: InputInterface) => {
                props["id"] = "remarks";
                props["labelName"] = "Enter Remarks (optional)";
                props["inputType"] = "text";
                props["placeholder"] = "Enter Remarks (optional)";
                return <Input {...props} />;
              }}
            </Field>
            <button type="submit">Verify via OTP</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
