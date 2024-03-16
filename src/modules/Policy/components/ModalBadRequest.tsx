import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Stack from "react-bootstrap/esm/Stack";

interface Props {
  isVisible: boolean;
  hideModalEvent: any;
  message: string;
}

const ModalBadRequest = ({ isVisible, hideModalEvent, message }: Props) => {
  return (
    <Modal show={isVisible} size="sm" aria-labelledby="contained-modal-title-vcenter" centered animation={true}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="me-3">
            <i className="fa-solid fa-circle-exclamation"></i>
          </span>
          Ocurrió un error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">{message}</p>

        <Stack className="justify-content-center align-items-center">
          <Button onClick={hideModalEvent}>Cerrar</Button>
        </Stack>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBadRequest;
