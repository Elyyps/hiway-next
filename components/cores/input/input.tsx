import React, { useState, useEffect } from "react";
import styles from "./input.module.scss";

interface IInputProps {
  classModify?: string;
  errorMessage?: string;
  label?: string;
  name: string;
  onBlur?: (text: string) => void;
  onChange?: (event: any) => void;
  onChangeText?: (text: string) => void;
  onClick?: any;
  placeholder?: string;
  style?: any;
  type?: string;
  value?: any;
}

const InputComponent = (props: IInputProps) => {
  const { name, type, style, placeholder, label, errorMessage, value } = props;

  const [values, setValues] = useState("");

  useEffect(() => {
    setValues(value);
  }, [value]);
  const handleChange = (event: any) => {
    if (props.onChangeText) {
      props.onChangeText(event.target.value);
    }
    if (props.onChange) {
      props.onChange(event);
    }
    if (typeof value !== undefined) {
      setValues(event.target.value);
    }
  };
  const handleBlur = (event: any) => {
    if (props.onBlur) {
      props.onBlur(event);
    }
    if (typeof value !== undefined) {
      setValues(event.target.value);
    }
  };

  return (
    <div className={styles["form__item"]}>
      {label && (
        <label htmlFor="label" className={styles["form__item-label"]}>
          {label}
        </label>
      )}
      <div className={styles["form__item-holder"]}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type={type ? type : "text"}
          name={name}
          step={1}
          value={values ? values : ""}
          style={style}
          placeholder={placeholder}
        />
      </div>

      <div className={styles["error-message"]}>{errorMessage}</div>
    </div>
  );
};

export { InputComponent };
