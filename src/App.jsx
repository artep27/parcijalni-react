import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Form fetchUser={fetchUser} setInput={setInput} />}
          />
          <Route path="/user" element={<User user={user} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
