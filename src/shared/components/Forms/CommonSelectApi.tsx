import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikProps } from "formik";

interface Props {
  form: FormikProps<any>;
  name: string;
  dependencyField: string;
  pathApi: string;
  firstOptionEmpty?: string;
}

const CommonSelectApi = ({ dependencyField, form, name, pathApi, firstOptionEmpty }: Props) => {
  const { data, isDisabled } = useLoadSelect<BaseListDataModel[]>({
    form,
    name,
    providerName: "LAFISE",
    dependencyField,
    pathApi,
  });

  return (
    <FormSelectTemplate
      data={data ?? []}
      firstOptionEmpty={firstOptionEmpty}
      errorMessage={getFormikErrorField(form, name)}
      {...getFormikProps(form, name)}
      disabled={isDisabled}
    />
  );
};

export default CommonSelectApi;
