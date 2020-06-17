import * as React from "react";
import style from "./contact-form.module.scss";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { InputComponent } from "../input/input";
import { validateEmail } from "../../../utils/validate-email";
import ButtonComponent from "../button/button";

interface IContactFormErrorMessages {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
export interface IContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
const formOnChange = () => {
  return;
};
const InnerForm = (props: FormikProps<IContactFormValues>) => {
  const { touched, errors } = props;

  return (
    <Form
      action={"#"}
      className={style["contact-form"]}
      onChange={formOnChange}
    >
      <div>
        <InputComponent
          name="firstName"
          placeholder="First name"
          errorMessage={touched.firstName ? errors.firstName : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.firstName}
        />

        <InputComponent
          name="lastName"
          placeholder="Last name"
          errorMessage={touched.lastName ? errors.lastName : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.lastName}
        />
      </div>

      <div>
        <InputComponent
          placeholder="E-mail adress"
          name="email"
          errorMessage={touched.email ? errors.email : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.email}
        />

        <InputComponent
          placeholder="Subject"
          name="subject"
          errorMessage={touched.subject ? errors.subject : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.subject}
        />
      </div>

      <textarea
        placeholder={"Type your message here"}
        name={"message"}
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.message}
        rows={7}
      />
      <div className={style["contact-form-bottom"]}>
        <ButtonComponent
          title={"Send message"}
          variant={"primary"}
          icon={"/icons/chevron-right.svg"}
          type={"submit"}
        />
      </div>
    </Form>
  );
};

interface IFormProps {
  onSubmit: (values: IContactFormValues) => void;
}

export const ContactFormComponent = withFormik<IFormProps, IContactFormValues>({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  }),

  validate: (values: IContactFormValues) => {
    const errors: FormikErrors<IContactFormErrorMessages> = {};

    if (!values.firstName) {
      errors.firstName = "first name is required";
    }
    if (!values.lastName) {
      errors.lastName = "last name is required";
    }
    if (!values.subject) {
      errors.subject = "subject is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!validateEmail(values.email)) {
      errors.email = "enter a correct email";
    }

    return errors;
  },

  handleSubmit: (values: IContactFormValues, bag: any) => {
    bag.props.onSubmit(values);
  },
})(InnerForm);
