import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { BaseListDataModel } from "@/shared/models/baseListData.model";
import { FormikProps } from "formik";

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
  const { onChange, ...inputProps } = getFormikProps(form, name);

  const onChangeValue = (e: any) => {
    if (nameText)
      form.setFieldValue(
        nameText,
        [
          { id: "t1", text: "t1" },
          { id: "t2", text: "t2" },
        ]?.find((i) => i.id == e.target.value)?.text
      );

    //event handler
    onChange(e);
  };

  return (
    <FormGroupTemplate label={floatingLabel} name={name}>
      <FormSelectTemplate
        onChange={(e) => onChangeValue(e)}
        data={
          data ?? [
            { id: "t1", text: "t1" },
            { id: "t2", text: "t2" },
          ]
        }
        firstOptionEmpty={firstOptionEmpty}
        errorMessage={getFormikErrorField(form, name)}
        disabled={isDisabled}
        {...inputProps}
      />
    </FormGroupTemplate>
  );
};
