import "./style.css";
import ResultCard from "components/ResultCard";
import Button from "components/Button";
import axios from "axios";
import { useState } from "react";
import ResultCardLoader from "components/ResultCard/ResultCardLoader";

type FormData = {
  gitHubId: string;
};

type perfilGithub = {
  url: string;
  avatar_url: string;
  followers: string;
  location: string;
  name: string;
};

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [perfilGithub, setPerfilGithub] = useState<perfilGithub>();

  const [formData, setFormData] = useState<FormData>({
    gitHubId: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.gitHubId}`)
      .then((response) => {
        setPerfilGithub(response.data);
        console.log(response.data);
      })
      .catch((error) => setPerfilGithub(undefined))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="content-page">
      <div className="base-card container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="gitHubId"
              value={formData.gitHubId}
              className="form-control"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
          </div>
          <Button text="Encontrar" />
        </form>
      </div>
      {perfilGithub &&
        (isLoading ? (
          <>
            <ResultCardLoader />
          </>
        ) : (
          <ResultCard
            perfil={perfilGithub.url}
            avatar_url={perfilGithub.avatar_url}
            followers={perfilGithub.followers}
            location={perfilGithub.location}
            name={perfilGithub.name}
          />
        ))}
    </div>
  );
};

export default Search;
