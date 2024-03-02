import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PaymentSuccessfulHelper() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleModal(true);
    }, 3000);
  }, []);

  const showModal = () => {
    setIsVisibleModal(true);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  return {
    isVisibleModal,
    showModal,
    hideModal,
    state,
  };
}

export default PaymentSuccessfulHelper;
