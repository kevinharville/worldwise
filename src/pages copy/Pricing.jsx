import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <div>
      <PageNav />
      <h1>Pricing</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Pricing;
