import { FormikComponentProps } from "@/modules/Policy/utils/getFormikProps";
import { getUrlWithValues } from "@/modules/Policy/utils/getUrlWithValues";
import { fetchCall } from "@/shared/utils/fetchApi";
import { TypeUrlTo } from "@/shared/utils/urlPaths";
import { useEffect, useState } from "react";

interface Props extends FormikComponentProps {
  name: string;
  use: TypeUrlTo;
  pathApi: string;
  dependencyField: string;
}

export const useLoadSelect = <T>({
  form,
  name,
  pathApi,
  dependencyField,
  use,
}: Props) => {
  const [data, setData] = useState<T | undefined>();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (form.values[dependencyField]) {
      callApi();
    } else form.setFieldValue(name, null);

    setIsDisabled(!form.values.marcaId);
  }, [form.values[dependencyField]]);

  const callApi = async () => {
    const result = await fetchCall<T>({
      use,
      path: getUrlWithValues(form, pathApi),
    });
    setData(result);
  };

  return {
    isDisabled,
    data,
  };
};
