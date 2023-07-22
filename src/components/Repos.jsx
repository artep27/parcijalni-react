const Repos = ({ repos }) => {
  return (
    <div className="repos">
      <h2>Repositories:</h2>
      <ul>
        {repos.map((repo) => {
          const { id, name } = repo;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Repos;
