import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/app">Go to Home Page</Link>
    </div>
  );
}

export default PageNotFound;
