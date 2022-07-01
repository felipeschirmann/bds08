import Button from "components/Button";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

type FormData = {
  gitHubId: string;
};

const BASE_URL = "https://api.github.com/users/"

function CardSearch() {
  const [formData, setFormData] = useState<FormData>({
    gitHubId: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]:value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
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
        <Link to="/after">
          <Button text="Encontrar" />
        </Link>
      </form>
    </div>
  );
}

export default CardSearch;
