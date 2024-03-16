import { customValidation } from "@/modules/Policy/utils/customValidationForm";
import { formSchema, initialValue } from "@/modules/Printer/utils/formPrinter.schema";
import { useLoading } from "@/shared/contexts/LoadingWrapper";
import { BaseViewModel } from "@/shared/models/baseView.model";
import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";
import { PolicyService } from "@/shared/services/policy.service";
import { PrinterService } from "@/shared/services/printer.service";
import { MESSAGES } from "@/shared/utils/formMessages";
import { useFormik } from "formik";
import { useRef, useState } from "react";

const PrinterHelper = () => {
  const [responseData, setResponseData] = useState<BaseViewModel<PolicyListResponseModel> | null>(null);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [isVisiblePdf, setIsVisiblePdf] = useState(false);
  const [urlPdf, setUrlPdf] = useState("");
  const loading = useLoading();
  const modalRef = useRef<any>();

  const onSubmit = (formData: any) => {
    loading.show();

    PrinterService.getAllPolicy(formData["documentoIdentificacion"])
      .then((res) => {
        setResponseData(res);

        if (!res.isOk) {
          setIsVisibleAlert(true);
        }
      })
      .finally(() => {
        loading.hide();
      });
  };

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmit,
    validate: (values) => customValidation(values, 1),
    validationSchema: formSchema,
    validateOnMount: true,
  });

  const onClickPrint = (id: string) => {
    loading.show();

    PolicyService.getPdf(Number(id))
      .then((resp) => {
        setIsVisiblePdf(true);
        setUrlPdf(resp);
      })
      .catch((_) => {
        modalRef.current?.show(true, { message: MESSAGES.errorPdf });
      })
      .finally(() => {
        loading.hide();
      });
  };

  const hidePdf = () => {
    setIsVisiblePdf(false);
  };

  return {
    formik,
    urlPdf,
    hidePdf,
    modalRef,
    isVisiblePdf,
    onClickPrint,
    responseData,
    isVisibleAlert,
    setIsVisibleAlert,
  };
};

export default PrinterHelper;
