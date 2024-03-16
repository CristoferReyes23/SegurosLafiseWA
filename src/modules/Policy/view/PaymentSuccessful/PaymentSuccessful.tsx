import PaymentSuccessfulHelper from "@/modules/Policy/view/PaymentSuccessful/PaymentSuccessful.helper";
import ViewModalPdf from "@/modules/Printer/components/ViewModalPdf";
import ModalAlerts from "@/shared/components/ModalAlerts";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { Link, Navigate } from "react-router-dom";

const PaymentSuccessful = () => {
  const { isVisibleModal, hideModal, pdfModalData, routeParams, onPressButton, modalRef } = PaymentSuccessfulHelper();
  if (!routeParams) return <Navigate to="/dashboard" replace={true} />;

  return (
    <div>
      <Card className={`w-auto rounded-0 m-0 py-5`}>
        <div className="container">
          <h1 className="text-center">
            <i className="fa-solid fa-circle-check"></i> !Póliza realizado con éxito!
          </h1>
          <Stack direction="horizontal" className="justify-content-center gap-3 flex-wrap">
            <Link to="/dashboard">
              <Button variant="secondary">Cerrar</Button>
            </Link>

            <Button variant="success" onClick={() => onPressButton("VOUCHER")}>
              Imprimir comprobante
            </Button>

            <Button variant="primary" onClick={() => onPressButton("POLICY")}>
              Imprimir póliza
            </Button>
          </Stack>
        </div>
      </Card>

      {isVisibleModal && (
        <ViewModalPdf
          urlPdf={pdfModalData.pdfUrl}
          title={pdfModalData.title}
          isVisiblePdf={isVisibleModal}
          hideModal={hideModal}
        />
      )}

      <ModalAlerts modalRef={modalRef} />
    </div>
  );
};

export default PaymentSuccessful;
