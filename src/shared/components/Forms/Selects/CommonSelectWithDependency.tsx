import { useLoadSelect } from "@/shared/hooks/useLoadSelect";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikProps } from "formik";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import { useInitialValueGetTextSelect } from "@/shared/hooks/useInitialValueGetTextSelect";

interface Props {
  form: FormikProps<any>;
  name: string;
  nameText?: string;
  dependencyField: string;
  pathApi: string;
  floatingLabel: string;
  firstOptionEmpty?: string;
}

export const CommonSelectWithDependency = ({
  name,
  nameText,
  form,
  pathApi,
  floatingLabel,
  dependencyField,
  firstOptionEmpty,
}: Props) => {
  const { data, isDisabled } = useLoadSelect<BaseListDataModel[]>({
    form,
    name,
    providerName: "LAFISE",
    dependencyField,
    pathApi,
  });
  useInitialValueGetTextSelect({ form, data, name, nameText });

  const { onChange, ...inputProps } = getFormikProps(form, name);

  const onChangeValue = (e: any) => {
    if (nameText) form.setFieldValue(nameText, data?.find((i) => i.id == e.target.value)?.text);

    //event handler
    onChange(e);
  };

  return (
    <FormGroupTemplate label={floatingLabel} name={name}>
      <FormSelectTemplate
        onChange={(e) => onChangeValue(e)}
        data={data ?? []}
        firstOptionEmpty={firstOptionEmpty}
        errorMessage={getFormikErrorField(form, name)}
        disabled={isDisabled}
        {...inputProps}
      />
    </FormGroupTemplate>
  );
};
