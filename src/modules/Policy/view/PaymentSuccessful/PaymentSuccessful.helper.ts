import { useLoading } from "@/shared/contexts/LoadingWrapper";
import { PolicyService } from "@/shared/services/policy.service";
import { useEffect, useState } from "react";
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

  const loading = useLoading();

  const [pdfModalData, setPdfModalData] = useState<{ title: string; pdfUrl: string }>({
    pdfUrl: "",
    title: "",
  });

  useEffect(() => {
    getPolicyPdfUrl();
  }, []);

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
      setIsVisibleModal(true);
      return;
    }

    //TODO: voucher second pdf
    if (!voucherPdfUrl) {
    }
  };

  const getPolicyPdfUrl = async () => {
    loading.show();
    const pdfUrl = await PolicyService.getPdf(routeParams.policyId);
    setPolicyPdf(pdfUrl);
    setPdfModalData({
      title: "Póliza",
      pdfUrl: pdfUrl,
    });
    setIsVisibleModal(true);
    loading.hide();
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
