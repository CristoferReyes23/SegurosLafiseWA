import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { BaseListDataModel } from "@/shared/models/baseListData.model";
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
  const { data } = useFetch<BaseListDataModel[]>({
    to: "LAFISE",
    urlPath,
  });

  const { onChange, ...extraProps } = getFormikProps(form, name);
  const onChangeValue = (e: any) => {
    if (nameText) {
      form.setFieldValue(nameText, testValue?.find((i) => i.id == e.target.value)?.text);
    }

    onChange(e);
  };

  return (
    <FormGroupTemplate label={label} name={name}>
      <FormSelectTemplate
        firstOptionEmpty={firsOption}
        data={data ?? testValue}
        errorMessage={getFormikErrorField(form, name)}
        onChange={onChangeValue}
        {...extraProps}
      />
    </FormGroupTemplate>
  );
};

export default CommonSelectGroup;

const testValue = [
  {
    id: "1",
    text: "t1",
  },
  {
    id: "2",
    text: "t2",
  },
];
