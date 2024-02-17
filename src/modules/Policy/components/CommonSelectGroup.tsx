import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { BaseListDataModel } from "@/modules/Policy/models/models";
import {
  getFormikErrorField,
  getFormikProps,
} from "@/modules/Policy/utils/getFormikProps";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { FormikProps, FormikValues } from "formik";

// common select FormGroup

interface Props {
  form: FormikProps<FormikValues>;
  name: string;
  dependencyField: string;
  pathApi: string;
  floatingLabel: string;
  firstOption?: SelectDataTemplate;
}

export const CommonSelectGroup = ({
  name,
  form,
  pathApi,
  floatingLabel,
  dependencyField,
  firstOption,
}: Props) => {
  const { data, isDisabled } = useLoadSelect<BaseListDataModel[]>({
    form,
    name,
    use: "LAFISE",
    dependencyField,
    pathApi,
  });

  return (
    <FormGroupTemplate label={floatingLabel} name={name}>
      <FormSelectTemplate
        data={data ?? []}
        firstOption={firstOption}
        errorMessage={getFormikErrorField(form, name)}
        {...getFormikProps(form, name)}
        disabled={isDisabled}
      />
    </FormGroupTemplate>
  );
};
