import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <li>
        <Link to="/quote">quote</Link>
      </li>
      <li>
        <Link to="/policy">policy</Link>
      </li>
    </div>
  );
};

export default index;
