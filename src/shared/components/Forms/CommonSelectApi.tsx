import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { BaseListDataModel } from "@/shared/models/baseListData.model";
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

  const dataView: BaseListDataModel[] =
    data
      ?.map((i) => ({
        text: i.text,
        id: i.id.toString(),
      }))
      .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id)) ?? []; //avoid

  return (
    <FormSelectTemplate
      data={dataView}
      firstOptionEmpty={firstOptionEmpty}
      errorMessage={getFormikErrorField(form, name)}
      {...getFormikProps(form, name)}
      disabled={isDisabled}
    />
  );
};

export default CommonSelectApi;
