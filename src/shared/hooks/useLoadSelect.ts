import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
import { fetchCall } from "@/shared/utils/fetchApi";
import { TypeProviderApi } from "@/shared/utils/urlPaths";
import { useEffect, useState } from "react";

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
    if (form.values[dependencyField]) {
      callApi();
    }

    form.setFieldValue(name, null);
    setIsDisabled(!form.values[dependencyField]);
  }, [form.values[dependencyField]]);

  const callApi = async () => {
    // //test
    // setData([
    //   {
    //     id: "1",
    //     text: "test1",
    //   },
    //   {
    //     id: "2",
    //     text: "test2",
    //   },
    //   {
    //     id: "3",
    //     text: "test3",
    //   },
    //   {
    //     id: "4",
    //     text: "test4",
    //   },
    // ] as T);
    // return;

    const result = await fetchCall<T>({
      providerName,
      path: getUrlWithValues(form.values, pathApi),
    });
    setData(result);
  };

  return {
    isDisabled,
    data,
  };
};