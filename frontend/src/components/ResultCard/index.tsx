import "./style.css";

type Props = {
  perfil: string;
  avatar_url: string;
  followers: string;
  location: string;
  name: string;
};

function ResultCard({ perfil, avatar_url, followers, location, name }: Props) {
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
            defaultValue={`Perfil: ${perfil}`}
          />
          <input
            type="text"
            name="followers"
            className="form-control"
            placeholder="followers"
            defaultValue={`Seguidores: ${followers}`}
          />
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="location"
            defaultValue={`Localização: ${location}`}
          />
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
            defaultValue={`Nome: ${name}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
