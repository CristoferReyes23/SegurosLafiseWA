import { customValidation } from "@/modules/Policy/utils/customValidationForm";
import { formSchema } from "@/modules/Printer/utils/formPrinter.schema";
import { BaseViewModel } from "@/shared/models/baseView.model";
import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";
import { PrinterService } from "@/shared/services/printer.service";
import { useFormik } from "formik";
import { useRef, useState } from "react";

const PrinterHelper = () => {
  const [responseData, setResponseData] = useState<BaseViewModel<PolicyListResponseModel> | null>(null);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [isVisiblePdf, setIsVisiblePdf] = useState(false);
  const [urlPdf, setUrlPdf] = useState("");
  const loadingRef = useRef<any>(null);

  const onSubmit = (formData: any) => {
    loadingRef.current?.show(true);

    PrinterService.getAllPolicy(formData["documentoIdentificacion"])
      .then((res) => {
        setResponseData(res);

        if (!res.isOk) {
          setIsVisibleAlert(true);
        }
      })
      .finally(() => {
        loadingRef.current?.show(false);
      });
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: onSubmit,
    validate: (values) => customValidation(values, 1),
    validationSchema: formSchema,
    validateOnMount: true,
  });

  const onClickPrint = (id: string) => {
    PrinterService.getPdfPath(id).then((path) => {
      setIsVisiblePdf(true);
      setUrlPdf(path);
    });
  };

  const hidePdf = () => {
    setIsVisiblePdf(false);
  };

  return {
    formik,
    urlPdf,
    hidePdf,
    loadingRef,
    isVisiblePdf,
    onClickPrint,
    responseData,
    isVisibleAlert,
    setIsVisibleAlert,
  };
};

export default PrinterHelper;
