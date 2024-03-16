import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { useInitialValueGetTextSelect } from "@/shared/hooks/useInitialValueGetTextSelect";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

interface Props extends FormikComponentProps {
  urlPath: EnumUrlCatalogsPaths;
  name: string;
  label: string;
  nameText?: string;
  firsOption: string;
}

const CommonSelectGroup = ({ firsOption, form, label, name, urlPath, nameText }: Props) => {
  const { data, isFetching } = useFetch<BaseListDataModel[]>({
    to: "LAFISE",
    urlPath,
  });
  useInitialValueGetTextSelect({ form, data, name, nameText });

  const { onChange, ...extraProps } = getFormikProps(form, name);
  const onChangeValue = (e: any) => {
    if (nameText) {
      form.setFieldValue(nameText, data?.find((i) => i.id == e.target.value)?.text);
    }

    onChange(e);
  };

  return (
    <FormGroupTemplate label={label} name={name}>
      <FormSelectTemplate
        firstOptionEmpty={firsOption}
        data={data ?? []}
        errorMessage={getFormikErrorField(form, name)}
        onChange={onChangeValue}
        disabled={isFetching}
        {...extraProps}
      />
    </FormGroupTemplate>
  );
};

export default CommonSelectGroup;
