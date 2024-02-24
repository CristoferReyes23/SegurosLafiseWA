import { Link } from "react-router-dom";
import { cardValues } from "@/modules/Dashboard/utils/const";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

const Dashboard = () => {
  return (
    <div>
      <Stack direction="horizontal" className="flex-wrap gap-5 mb-3">
        {cardValues.map((i) => (
          <Card style={{ width: "18rem" }} key={i.to} className="m-0">
            <Card.Body>
              <Card.Text className="h5 text-center mb-2">{i.title}</Card.Text>
              <Card.Img src={i.image} height={200} className="object-fit-cover rounded-0" />
              <Link to={i.to}>
                <Button variant="success" className="w-100">
                  {i.titleButton}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Stack>

      {/* print card */}
      <Stack direction="horizontal" className="flex-wrap gap-5">
        <Card style={{ width: "18rem" }} className="m-0">
          <Card.Body>
            <Card.Text className="h5 text-center mb-2">Reimprimir Polizas</Card.Text>
            <div className="object-fit-cover rounded-0">
              <h1 className="display-4 text-center my-4 text-danger">
                <i className="fa-solid fa-print"></i>
              </h1>
            </div>
            <Link to={"/printer"}>
              <Button variant="success" className="w-100">
                Continuar
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
};

export default Dashboard;
