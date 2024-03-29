import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
import { fetchCall } from "@/shared/utils/fetchApi";
import { TypeProviderApi } from "@/shared/utils/urlPaths";
import { useEffect, useState } from "react";
import { testData } from "@/shared/utils/test";

interface Props extends FormikComponentProps {
  name: string;
  providerName: TypeProviderApi;
  pathApi: string;
  dependencyField: string;
}

export const useLoadSelect = <T>({ form, name, pathApi, dependencyField, providerName }: Props) => {
  const [data, setData] = useState<T | undefined>();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!form.values[dependencyField]);
    form.setFieldValue(name, null);

    if (form.values[dependencyField]) {
      callApi();
    }
  }, [form.values[dependencyField]]);

  const callApi = async () => {
    setIsDisabled(true);
    //test code
    return new Promise((res) => {
      setTimeout(() => {
        setIsDisabled(false);
        setData(testData as T);
        res("ok");
      }, 600);
    });

    //TODO:
    const result = await fetchCall({
      providerName,
      path: getUrlWithValues(form.values, pathApi),
    });
    const jsonData = await result.json();
    setData(jsonData);
    setIsDisabled(false);
  };

  return {
    isDisabled,
    data,
  };
};
