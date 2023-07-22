import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import { useState } from "react";
import Repos from "./Repos";

const User = ({ user }) => {
  const [repos, setRepos] = useState([]);
  const [showRepos, setShowRepos] = useState(false);

  if (user.message === "Not Found") {
    return <NotFound />;
  } else {
    const { avatar_url, login, name, location, bio } = user;
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${login}/repos`
        );
        const repos = await response.json();
        setRepos(repos);
        setShowRepos(true);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <main>
        <article className="user">
          <div className="userTop">
            <img src={avatar_url} alt={name || "User avatar"} />
            <h2>{login}</h2>
          </div>

          <h2> {name || "Name not provided"}</h2>
          <p>Location: {location || "Not provided"}</p>
          <p>Bio: {bio || "Bio not provided"}</p>
          {!showRepos && (
            <button onClick={fetchRepos} className="btn-repos">
              Show Repos
            </button>
          )}
          {showRepos && <Repos repos={repos} />}

          <Link to="/" className="back">
            Back home
          </Link>
        </article>
      </main>
    );
  }
};

export default User;
