import { useFormikContext } from "formik";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

interface Props {
  pageLength: number;
  currentPage: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const NavigationButtons = (props: Props) => {
  const isFirst = props.currentPage == 0;
  const isLast = props.currentPage === props.pageLength - 1;

  const { isValid, validateForm, handleSubmit } = useFormikContext();

  useEffect(() => {
    validateForm();
  }, [props.currentPage, validateForm]);

  return (
    <Row className="justify-content-end mt-3">
      <Col className="col-auto">
        {!isFirst && (
          <Button
            className="btn btn-secondary me-3"
            onClick={props.onClickPrevious}
          >
            Atrás
          </Button>
        )}
        <Button
          disabled={!isValid}
          className="btn btn-primary"
          onClick={() => (isLast ? handleSubmit() : props.onClickNext())}
        >
          Continuar
        </Button>
      </Col>
    </Row>
  );
};

export default NavigationButtons;
