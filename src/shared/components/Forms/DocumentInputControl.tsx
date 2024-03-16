import { EnumDocumentMaskTemplateValues, EnumDocumentTypeValues } from "@/shared/utils/constValues";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { FormikProps } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import { IMaskInput } from "react-imask";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  formik: FormikProps<any>;
  label: string;
  name: string;
  dependencyName: string;
  regexValidation?: RegExp;
}

const DocumentInputControl = ({ formik, name, label, dependencyName }: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [mask, setMask] = useState<any>("");
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    const selectedType = String(formik.values[dependencyName]);
    formik.setFieldValue(name, "");
    setValueInput("");
    setIsDisabled(selectedType == "" || !selectedType);

    switch (selectedType) {
      case EnumDocumentTypeValues.CEDULA: //cedula
        setMask(EnumDocumentMaskTemplateValues.CEDULA);
        break;
      case EnumDocumentTypeValues.RUC: //ruc
        setMask(EnumDocumentMaskTemplateValues.RUC);
        break;

      default:
        setMask(/[\s\S]*/);
        break;
    }
  }, [formik.values[dependencyName]]);

  const { isInvalid } = getFormikProps(formik, name);

  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <IMaskInput
        disabled={isDisabled}
        mask={mask}
        lazy={false}
        className={`form-control text-uppercase ${isInvalid ? "is-invalid" : ""}`}
        value={valueInput}
        name={name}
        id={name}
        onAccept={(value) => {
          setValueInput(value);
          formik.setFieldValue(name, value);
        }}
      />
      <Feedback type="invalid">{getFormikErrorField(formik, name)}</Feedback>
    </FormGroup>
  );
};

export default DocumentInputControl;
