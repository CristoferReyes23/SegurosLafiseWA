import Nav from "react-bootstrap/esm/Nav";
import "./TabWizard.css";

interface Props {
  tabs: string[];
  stepNumber: number;
  currentPage: number;
  onClick: (...args: any) => void;
}

const TabWizard = ({ tabs, onClick, currentPage, stepNumber }: Props) => {
  return (
    <Nav justify variant="tabs" className="mb-2">
      {tabs.map((i, index) => {
        return (
          <Nav.Item key={index.toString()}>
            <Nav.Link
              disabled={stepNumber < index}
              onClick={() => onClick(index)}
              className={`${currentPage == index && "active"}`}
            >
              {i}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default TabWizard;
