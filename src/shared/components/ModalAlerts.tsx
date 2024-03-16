import { useImperativeHandle, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Stack from "react-bootstrap/esm/Stack";

interface Props {
  modalRef: any;
}

const ModalAlerts = ({ modalRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  const show = (show: boolean, props?: any) => {
    setIsVisible(show);
    if (props) {
      setMessage(props["message"]);
      setTitle(props["title"]);
    }
  };

  useImperativeHandle(modalRef, () => ({
    show,
  }));

  return (
    <Modal show={isVisible} size="sm" aria-labelledby="contained-modal-title-vcenter" centered animation={true}>
      <Modal.Header>
        <p className="lead mb-0 h4">
          <span className="me-3">
            <i className="fa-solid fa-circle-exclamation"></i>
          </span>
          {title ?? "Aviso"}
        </p>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">{message}</p>

        <Stack className="justify-content-center align-items-center">
          <Button onClick={() => show(false)}>Cerrar</Button>
        </Stack>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAlerts;

export interface IModalAlertRef {
  show: (show: boolean, extra: { message?: string; title?: string }) => void;
}
