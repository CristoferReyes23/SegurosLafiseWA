import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { FormikProps } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import InputMask from "react-input-mask";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  formik: FormikProps<any>;
  label: string;
  name: string;
  dependencyName: string;
  regexValidation?: RegExp;
}

const DocumentInputControl = ({ formik, name, label, dependencyName }: Props) => {
  const [mask, setMask] = useState("");

  useEffect(() => {
    const selectedType = formik.values[dependencyName];

    switch (selectedType) {
      case "1": //cedula
        setMask("999-999999-9999a");
        break;
      case "2": //ruc
        setMask("a99999999999999");
        break;

      default:
        setMask("");
        break;
    }

    formik.setFieldValue(name, "");
  }, [formik.values[dependencyName]]);

  const { isInvalid, ...inputFormik } = getFormikProps(formik, name);

  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputMask
        className={`form-control text-uppercase ${isInvalid ? "is-invalid" : ""}`}
        mask={mask}
        {...inputFormik}
      />
      <Feedback type="invalid">{getFormikErrorField(formik, name)}</Feedback>
    </FormGroup>
  );
};

export default DocumentInputControl;
