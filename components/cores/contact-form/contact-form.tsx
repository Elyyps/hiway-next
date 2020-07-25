import * as React from "react";
import style from "./contact-form.module.scss";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { InputComponent } from "../input/input";
import { validateEmail } from "../../../utils/validate-email";
import ButtonComponent from "../button/button";
import { LanguageContext } from "../../../context/language";

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
  const { language } = React.useContext(LanguageContext);

  return (
    <Form
      action={"#"}
      className={style["contact-form"]}
      onChange={formOnChange}
    >
      <div>
        <InputComponent
          name="firstName"
          placeholder={language === "EN" ? "First name" : "Naam"}
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
          placeholder={language === "EN" ? "Last name" : "Achternaam"}
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
          placeholder={language === "EN" ? "E-mail adress" : "E-Mailadrese"}
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
          placeholder={language === "EN" ? "Subject" : "Onderwerpen"}
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
        placeholder={
          language === "EN"
            ? "Type your message here"
            : "Schrijf je bericht hier"
        }
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
          title={language === "EN" ? "Send message" : "Bericht versturen"}
          variant={"primary"}
          icon={"/svg/chevron-right.svg"}
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
