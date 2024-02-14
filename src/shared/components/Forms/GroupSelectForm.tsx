import {
  getFormikErrorField,
  getFormikProps,
} from "@/modules/Policy/utils/getFormikProps";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { FormikProps, FormikValues } from "formik";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";

interface Props {
  dataSource: SelectDataTemplate[];
  label: string;
  isDisabled?: boolean;
  firstOption?: SelectDataTemplate;

  form: FormikProps<FormikValues>;
  name: string;
}

export const GroupSelectForm = ({ dataSource, form, label, name }: Props) => {
  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>{label}</FormLabel>
      <FormSelectTemplate
        data={dataSource}
        errorMessage={getFormikErrorField(form, name)}
        {...getFormikProps(form, name)}
      />
    </FormGroup>
  );
};
