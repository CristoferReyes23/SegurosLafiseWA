import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <Button>Tuani</Button>

      <li>
        <Link to="/quote">quote</Link>
      </li>
      <li>
        <Link to="/policy">policy</Link>
      </li>
    </div>
  );
};

export default Dashboard;
