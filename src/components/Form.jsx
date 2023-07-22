import { useNavigate } from "react-router-dom";

const Form = ({ fetchUser, setInput }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
    navigate("/user");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <main className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub user"
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Form;
