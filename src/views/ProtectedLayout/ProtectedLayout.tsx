import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import "./protectedLayout.css";
// import SponsorImage from "@/assets/images/lafiseSponsor.png";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/esm/Card";
import { getImageURL } from "@/shared/utils/getImageUrl";

const ProtectedLayout = () => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar expand="lg" className="bg-body-tertiary px-4">
          <Stack direction="vertical">
            <h1 className="text-blue fw-bold">Seguros Lafise</h1>
            <p>
              <small className="text-blue">
                SELECCIONE LA OPERACION QUE DESEA REALIZAR
              </small>
            </p>
          </Stack>
        </Navbar>

        <main className="main-container">
          <div className="px-4 py-4">
            <Outlet />
          </div>
        </main>

        <section className="sidebar bg-blue d-none d-md-block">
          <Card className="card w-auto">
            <Card.Body>
              <Card.Title>Servicio solicitado </Card.Title>
              <Card.Img
                className="my-4"
                src={getImageURL("lafiseSponsor.png")}
                style={{ width: "300px" }}
              ></Card.Img>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};

export default ProtectedLayout;
