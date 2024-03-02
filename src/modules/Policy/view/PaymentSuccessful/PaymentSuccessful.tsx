import PaymentSuccessfulHelper from "@/modules/Policy/view/PaymentSuccessful/PaymentSuccessful.helper";
import ViewModalPdf from "@/modules/Printer/components/ViewModalPdf";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Navigate } from "react-router-dom";

const PaymentSuccessful = () => {
  const { isVisibleModal, hideModal, showModal, locationParams } = PaymentSuccessfulHelper();

  if (!locationParams) return <Navigate to="/dashboard" replace={true} />;

  return (
    <div>
      <Card className={`w-auto rounded-0 m-0 py-5`}>
        <div className="container text-center">
          <h1>
            <i className="fa-solid fa-circle-check"></i> ¡Pago realizado con exito!
          </h1>
          <Button variant="success" className="btn-lg mt-5 mb-3" onClick={showModal}>
            Imprimir comprobante de pago
          </Button>
          <p className="lead">Puedes reemprimir la poliza accediendo al menu Reimprimir Poliza </p>
        </div>
      </Card>

      {isVisibleModal && (
        <ViewModalPdf
          urlPdf={"https://web.stanford.edu/class/cs142/lectures/StateManagement.pdf"}
          isVisiblePdf={isVisibleModal}
          hideModal={hideModal}
        />
      )}
    </div>
  );
};

export default PaymentSuccessful;
