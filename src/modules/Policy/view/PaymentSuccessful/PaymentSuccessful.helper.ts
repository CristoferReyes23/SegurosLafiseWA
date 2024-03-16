import { useState } from "react";
import { redirect, useLocation } from "react-router-dom";

function PaymentSuccessfulHelper() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { state: locationParams } = useLocation();
  const [pdfModalData, setPdfModalData] = useState<{ title: string; pdfUrl: string }>({
    pdfUrl: "",
    title: "",
  });

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  const onPressButton = (btnKey: "VOUCHER" | "POLICY" | "CLOSE") => {
    console.log(btnKey);

    switch (btnKey) {
      case "POLICY":
        setPdfModalData({
          pdfUrl: locationParams.voucherUrl,
          title: "Póliza",
        });
        setIsVisibleModal(true);
        break;
      case "VOUCHER":
        setPdfModalData({
          pdfUrl: locationParams.voucherUrl,
          title: "Comprobante",
        });
        setIsVisibleModal(true);
        break;

      default:
        break;
    }
  };

  return {
    pdfModalData,
    hideModal,
    onPressButton,
    isVisibleModal,
    locationParams,
  };
}

export default PaymentSuccessfulHelper;
