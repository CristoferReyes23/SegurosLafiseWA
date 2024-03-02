import Alert from "react-bootstrap/esm/Alert";

interface Props {
  onClose: any;
  message: string;
}

const errorAlert = ({ message, onClose }: Props) => {
  return (
    <Alert key={"danger"} variant={"danger"} onClose={onClose} dismissible className="mt-3">
      <div>
        <span className="me-3">
          <i className="fa-solid fa-circle-info"></i>
        </span>
        {message}
      </div>
    </Alert>
  );
};

export default errorAlert;
