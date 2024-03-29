import Modal from "react-bootstrap/esm/Modal";

interface Props {
  urlPdf: string;
  isVisiblePdf: boolean;
  hideModal: (...args: any[]) => void;
}

const ViewModalPdf = ({ urlPdf, isVisiblePdf, hideModal }: Props) => {
  return (
    <Modal
      show={isVisiblePdf}
      onHide={hideModal}
      dialogClassName="modal-xl"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">Póliza</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "80vh" }}>
        <iframe src={urlPdf} width={"100%"} height={"100%"} />
      </Modal.Body>
    </Modal>
  );
};

export default ViewModalPdf;
