import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">the lost of Products</Link>.
      </p>
    </>
  );
}

export default Homepage;
