import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { getFormikErrorField, getFormikProps } from "@/modules/Policy/utils/getFormikProps";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { FormikProps } from "formik";

interface Props {
  form: FormikProps<any>;
  name: string;
  dependencyField: string;
  pathApi: string;
  firstOption?: SelectDataTemplate;
}

const CommonSelectApi = ({ dependencyField, form, name, pathApi, firstOption }: Props) => {
  const { data, isDisabled } = useLoadSelect<BaseListDataModel[]>({
    form,
    name,
    use: "LAFISE",
    dependencyField,
    pathApi,
  });

  return (
    <FormSelectTemplate
      data={data ?? []}
      firstOption={firstOption}
      errorMessage={getFormikErrorField(form, name)}
      {...getFormikProps(form, name)}
      disabled={isDisabled}
    />
  );
};

export default CommonSelectApi;
