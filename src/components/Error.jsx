import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error">
      <h2>Page not found</h2>
      <Link to="/" className="back">
        Back home
      </Link>
    </main>
  );
};

export default Error;
