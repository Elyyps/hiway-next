import * as React from "react";
import style from "./newsletter-card.module.scss";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import ButtonComponent from "../button/button";
import { InputComponent } from "../input/input";
import { validateEmail } from "../../../utils/validate-email";

interface INewsletterCardFormErrorMessages {
  name: string;
  email: string;
}
export interface INewsletterCardFormValues {
  name: string;
  email: string;
}
const formOnChange = () => {
  return;
};
const InnerForm = (props: FormikProps<INewsletterCardFormValues>) => {
  const { touched, errors } = props;

  return (
    <Form
      action={"#"}
      className={style["newsletter-form"]}
      onChange={formOnChange}
    >
      <div>
        <InputComponent
          name="name"
          placeholder="Your first & last name"
          errorMessage={touched.name ? errors.name : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.name}
        />

        <InputComponent
          name="email"
          placeholder="Your e-mail adress"
          errorMessage={touched.email ? errors.email : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.email}
        />
      </div>

      <div className={style["newsletter-form-bottom"]}>
        <ButtonComponent
          title={"Send message"}
          variant={"primary"}
          icon={"/icons/chevron-right.svg"}
        />
      </div>
    </Form>
  );
};

interface IFormProps {
  onSubmit: (values: INewsletterCardFormValues) => void;
}

export const NewsletterCardFormComponent = withFormik<
  IFormProps,
  INewsletterCardFormValues
>({
  mapPropsToValues: () => ({
    name: "",
    email: "",
  }),

  validate: (values: INewsletterCardFormValues) => {
    const errors: FormikErrors<INewsletterCardFormErrorMessages> = {};

    if (!values.name) {
      errors.name = "name is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!validateEmail(values.email)) {
      errors.email = "enter a correct email";
    }

    return errors;
  },

  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values);
  },
})(InnerForm);
