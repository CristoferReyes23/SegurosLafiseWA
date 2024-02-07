import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Outlet } from "react-router-dom";
import "./protectedLayout.css";
import Card from "react-bootstrap/esm/Card";
// import SponsorImage from "@/assets/images/lafiseSponsor.png";
import Stack from "react-bootstrap/esm/Stack";
import { getImageURL } from "@/shared/utils/getImageUrl";

const ProtectedLayout = () => {
  return (
    <>
      <div className="main-wrapper d-flex flex-column">
        <Navbar expand="lg" className="bg-body-tertiary px-4">
          <Stack direction="vertical">
            <h1 className="text-primary fw-bold">Seguros Lafise</h1>
            <p className="text-primary">
              SELECCIONE LA OPERACION QUE DESEA REALIZAR
            </p>
          </Stack>
        </Navbar>

        <Row className="containerBox gx-0 h-100">
          <Col>
            <div className="px-4">
              <Outlet />
            </div>
          </Col>
          <Col xs="auto" className="bg-primary h-100">
            <Card className="card">
              <Card.Body>
                <Card.Title>Servicio solicitado </Card.Title>
                <Card.Img
                  className="my-4"
                  src={getImageURL("lafiseSponsor.png")}
                  width={100}
                ></Card.Img>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProtectedLayout;
