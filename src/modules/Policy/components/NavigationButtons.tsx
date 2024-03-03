import { useFormikContext } from "formik";
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
  const { isValid, handleSubmit } = useFormikContext();

  return (
    <Row className="justify-content-end mt-3">
      <Col className="col-auto">
        {!isFirst && (
          <Button className="btn btn-secondary me-3" onClick={props.onClickPrevious}>
            Atrás
          </Button>
        )}
        <Button disabled={!isValid} className="btn btn-primary" onClick={() => handleSubmit()}>
          Continuar
        </Button>
      </Col>
    </Row>
  );
};

export default NavigationButtons;
