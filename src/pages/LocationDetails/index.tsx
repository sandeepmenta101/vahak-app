import styles from "./styles.module.scss";
import Input from "../../common/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputInterface from "./../../Interfaces/Input.interface";
import Select from '../../common/Select';

const initialValues = {
  source: "",
  destination: "",
  carType: "",
  noOfTravellers: "",
};

const onSubmit = (values: Object) => {
  console.log(values);
};

export default function LocationDetails() {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <div className={styles.container}>
          <Field name="source">
            {(props: InputInterface) => {
              props["placeholder"] = "Enter Source Location";
              props["id"] = "Source";
              props["labelName"] = "Source Location";
              props['inputType'] = 'text';
               return <Input {...props} />;
            }}
          </Field>
          <Field name="destination">
            {(props: InputInterface) => {
              props["placeholder"] = "Enter Destination Location";
              props["id"] = "Destination";
              props["labelName"] = "Destination Location";
              props['inputType'] = 'text';  
              return <Input {...props} />;
            }}
          </Field>
        </div>
        <Field name="carType" as="select">
          <option value="">Select Car type</option>
          <option value="hatchBack">HatchBack</option>
          <option value="Sedan">Sedan</option> 
          <option value="suv">SUV</option>
        </Field>
        <Field name="noOfTravellers">
          {
            (props: InputInterface) => {
              props['placeholder'] = "Enter Number of Travellers";
              props['id'] = 'noOfTravellers';
              props['labelName'] = "Number of Travellers";
              props['inputType'] = 'number';
              return <Input {...props} />
            }
          }
        </Field>
        <button type="submit">Enter Bid Details</button>
      </Form>
    </Formik>
  );
}
