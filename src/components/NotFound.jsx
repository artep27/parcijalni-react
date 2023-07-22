import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error">
      <h2>User not found</h2>
      <Link to="/" className="back">
        Back home
      </Link>
    </main>
  );
};

export default NotFound;
