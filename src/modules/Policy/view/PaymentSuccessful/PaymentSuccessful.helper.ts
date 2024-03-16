import { PolicyService } from "@/shared/services/policy.service";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface LocationStateParams {
  policyId: number;
  success: boolean;
}

function PaymentSuccessfulHelper() {
  const locationRoute = useLocation();
  const routeParams = locationRoute.state as LocationStateParams;

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [policyPdfUrl, setPolicyPdf] = useState("");
  const [voucherPdfUrl, setVoucherPdf] = useState("");

  const [pdfModalData, setPdfModalData] = useState<{ title: string; pdfUrl: string }>({
    pdfUrl: "",
    title: "",
  });

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  const onPressButton = (btnKey: "VOUCHER" | "POLICY") => {
    if (btnKey == "POLICY") {
      if (!policyPdfUrl) {
        getPolicyPdfUrl();
        return;
      }

      setPdfModalData({
        title: "Póliza",
        pdfUrl: policyPdfUrl,
      });
      return;
    }

    //TODO:
    if (!voucherPdfUrl) {
    }
  };

  const getPolicyPdfUrl = async () => {
    const pdfUrl = await PolicyService.getPdf(routeParams.policyId);
    setPolicyPdf(pdfUrl);
    setPdfModalData({
      title: "Póliza",
      pdfUrl: pdfUrl,
    });
  };

  return {
    hideModal,
    pdfModalData,
    onPressButton,
    isVisibleModal,
    routeParams,
  };
}

export default PaymentSuccessfulHelper;
