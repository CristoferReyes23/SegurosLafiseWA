import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./Wizard.css";
import Nav from "react-bootstrap/esm/Nav";

interface WizardTabs {
  title: string;
  icon: string;
}

interface Props {
  tabs?: WizardTabs[];
  pages: any[];
  onClickNext?: (...args: any[]) => {};
  onClickPrevious?: (...args: any[]) => {};
}

const Wizard = ({ pages, tabs }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const isFirst = currentPage == 0;
  const isLast = currentPage == pages.length - 1;

  const onClickContinue = () => {
    if (!isLast) setCurrentPage((pre) => ++pre);
  };

  const onClickPrevious = () => {
    if (!isFirst) setCurrentPage((pre) => --pre);
  };

  const onClickTab = (index: number) => setCurrentPage(index);

  return (
    <div>
      {tabs && (
        <Nav justify variant="tabs" className="mb-2">
          {tabs.map((i, index) => {
            return (
              <Nav.Item key={index.toString()}>
                <Nav.Link
                  onClick={() => onClickTab(index)}
                  className={`${currentPage == index && "active"}`}
                >
                  {i.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      )}

      {pages[currentPage]}

      <Row className="justify-content-end mt-3">
        <Col className="col-auto">
          {!isFirst && (
            <Button
              className="btn btn-secondary me-3"
              onClick={onClickPrevious}
            >
              Atrás
            </Button>
          )}
          <Button className="btn btn-primary" onClick={onClickContinue}>
            Continuar
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Wizard;
