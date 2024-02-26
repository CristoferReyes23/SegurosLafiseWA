import { formSchema } from "@/modules/Printer/utils/formPrinter.schema";
import { BaseViewModel } from "@/shared/models/baseView.model";
import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";
import { PrinterService } from "@/shared/services/printer.service";
import { useFormik } from "formik";
import { useState } from "react";

const PrinterHelper = () => {
  const [responseData, setResponseData] = useState<BaseViewModel<PolicyListResponseModel> | null>(null);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const onSubmit = (formData: any, { setSubmitting }: any) => {
    PrinterService.getAllPolicy(formData["userIdValue"])
      .then((res) => {
        setResponseData(res);

        if (!res.isOk) {
          setIsVisibleAlert(true);
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: onSubmit,
    validationSchema: formSchema,
  });

  return {
    formik,
    responseData,
    setIsVisibleAlert,
    isVisibleAlert,
  };
};

export default PrinterHelper;
