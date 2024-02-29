import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="py-6">
      <div className="container bg-light min-vh-50 py-6 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="lc-block mb-4">
              <div>
                <h1 className="fw-bold display-1">500</h1>
              </div>
            </div>
            <div className="lc-block">
              <div>
                <p className="h2">Sorry, we get a problem when rendering page. </p>
                <p className="lead">Click the button below to go back to the homepage</p>
              </div>
            </div>
            <div className="lc-block">
              <Link to="/dashboard" className="btn btn-primary">
                Go Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorBoundary;
