import "./style.css";

type Props = {
  perfil: string;
  avatar_url: string;
  followers: string;
  location: string;
  name: string;
};

function ResultCard({ perfil, avatar_url, followers, location, name }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  };

  return (
    <div className="base-card container container-result">
      <img src={avatar_url} alt={avatar_url} />
      <div className="base-card container-result-info">
        <h2>Informações</h2>
        <div className="resul-informations">
          <input
            type="text"
            name="perfil"
            className="form-control"
            placeholder="perfil"
            defaultValue={""}
            value={`Perfil: ${perfil}`}
            onChange={handleChange}
          />
          <input
            type="text"
            name="followers"
            className="form-control"
            placeholder="followers"
            defaultValue={""}
            value={`Seguidores: ${followers}`}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="location"
            defaultValue={""}
            value={`Localização: ${location}`}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
            defaultValue={""}
            value={`Nome: ${name}`}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
