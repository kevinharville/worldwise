import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <PageNav />
      <h1>Product</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Product;
