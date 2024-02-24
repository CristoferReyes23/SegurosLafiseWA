import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikProps } from "formik";

// common select FormGroup

interface Props {
  form: FormikProps<any>;
  name: string;
  dependencyField: string;
  pathApi: string;
  floatingLabel: string;
  firstOptionEmpty?: string;
}

export const CommonSelectGroup = ({ name, form, pathApi, floatingLabel, dependencyField, firstOptionEmpty }: Props) => {
  const { data, isDisabled } = useLoadSelect<BaseListDataModel[]>({
    form,
    name,
    providerName: "LAFISE",
    dependencyField,
    pathApi,
  });

  return (
    <FormGroupTemplate label={floatingLabel} name={name}>
      <FormSelectTemplate
        data={data ?? []}
        firstOptionEmpty={firstOptionEmpty}
        errorMessage={getFormikErrorField(form, name)}
        {...getFormikProps(form, name)}
        disabled={isDisabled}
      />
    </FormGroupTemplate>
  );
};
