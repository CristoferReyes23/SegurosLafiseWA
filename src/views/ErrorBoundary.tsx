import { useRouteError } from "react-router-dom";

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
                <h1 className="fw-bold display-1">404</h1>
              </div>
            </div>
            <div className="lc-block">
              <div>
                <p className="h2">Sorry, we can’t find the page you’re looking for. </p>
                <p className="lead">Click the button below to go back to the homepage</p>
              </div>
            </div>
            <div className="lc-block">
              <a className="btn btn-primary" href="#" role="button">
                Click me, I'm a button
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorBoundary;
