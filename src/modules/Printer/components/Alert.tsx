interface Props {
  message: string;
  setVisible: (...args: any) => void;
}

const AlertTemplate = ({ setVisible, message }: Props) => {
  const onClick = () => {
    setVisible(false);
  };

  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center" role="alert">
      <div>
        <span className="me-3">
        <i className="fa-solid fa-circle-info"></i>
        </span>
        {message}
      </div>
      <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onClick}></button>
    </div>
  );
};

export default AlertTemplate;
