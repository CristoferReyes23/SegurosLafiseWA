import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import { useEffect } from "react";

interface Props extends FormikComponentProps {
  data?: BaseListDataModel[] | null;
  name: string;
  nameText?: string;
}

export function useInitialValueGetTextSelect({ data, form, name, nameText }: Props) {
  // if formik initial values contain an id of the property and need to get and save the name of the associated id
  useEffect(() => {
    if (!data || data.length === 0) return;

    const initialValue = form.initialValues[name];
    if (!initialValue || !nameText) return;

    const textValue = data?.find((i) => i.id == initialValue)?.text;
    form.setFieldValue(nameText, textValue);
  }, [data]);
}
