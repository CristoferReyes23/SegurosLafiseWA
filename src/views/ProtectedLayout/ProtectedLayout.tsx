import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import "./protectedLayout.css";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/esm/Card";
import { getImageURL } from "@/shared/utils/getImageUrl";
import { useState } from "react";
import SubTitleHeader from "@/views/ProtectedLayout/components/SubTitleHeader";
import useTokenTimer from "@/views/ProtectedLayout/hooks/useTokenTimer";

const ProtectedLayout = () => {
  const [titleHeader, setTitleHeader] = useState("");
  useTokenTimer();

  return (
    <>
      <div className="main-wrapper">
        <Navbar expand="lg" className="bg-body-tertiary px-4">
          <Stack direction="vertical">
            <h1 className="text-blue fw-bold m-0">Seguros Lafise</h1>
            <SubTitleHeader titleHeader={titleHeader} setTitleHeader={setTitleHeader} />
          </Stack>
        </Navbar>

        <main className="main-container">
          <div className="px-4 py-4">
            <Outlet context={{ setTitleHeader }} />
          </div>
        </main>

        <section className="sidebar bg-blue d-none d-md-block">
          <Card className="card w-auto">
            <Card.Body>
              <Card.Title>Servicio solicitado </Card.Title>
              <Card.Img className="my-4" src={getImageURL("lafiseSponsor.png")} style={{ width: "300px" }}></Card.Img>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};

export default ProtectedLayout;
