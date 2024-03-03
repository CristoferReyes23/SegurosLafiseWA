import { useImperativeHandle, useState } from "react";
import Alert from "react-bootstrap/esm/Alert";

interface Props {
  childRef: any;
  message?: string;
  variant?: string;
}

const AlertTemplate = ({ childRef, message, variant = "danger" }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageValue, setMessageValue] = useState(message);

  const show = (show: boolean, props?: any) => {
    setIsVisible(show);
    if (props["message"]) setMessageValue(props["message"]);
  };

  // Assign the function to the ref passed from the parent
  useImperativeHandle(childRef, () => ({
    show,
  }));

  if (isVisible)
    return (
      <Alert key={variant} variant={variant} onClose={() => show(false)} dismissible className="mt-3">
        <div>
          <span className="me-3">
            <i className="fa-solid fa-circle-info"></i>
          </span>
          {messageValue}
        </div>
      </Alert>
    );

  return <></>;
};

export default AlertTemplate;

export interface IAlertTemplate {
  show: (show: boolean, ...args: any[]) => void;
}
