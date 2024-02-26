import { formSchema } from "@/modules/Printer/utils/formPrinter.schema";
import { BaseViewModel } from "@/shared/models/baseView.model";
import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";
import { PrinterService } from "@/shared/services/printer.service";
import { useFormik } from "formik";
import { useState } from "react";

const PrinterHelper = () => {
  const [responseData, setResponseData] = useState<BaseViewModel<PolicyListResponseModel> | null>(null);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [isVisiblePdf, setIsVisiblePdf] = useState(false);
  const [urlPdf, setUrlPdf] = useState("");

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

  const onClickPrint = (id: string) => {
    console.log(id);
    setIsVisiblePdf(true);
    setUrlPdf("https://web.stanford.edu/class/cs142/lectures/StateManagement.pdf");
  };

  const hidePdf = () => {
    setIsVisiblePdf(false);
  };

  return {
    formik,
    urlPdf,
    hidePdf,
    isVisiblePdf,
    onClickPrint,
    responseData,
    isVisibleAlert,
    setIsVisibleAlert,
  };
};

export default PrinterHelper;
