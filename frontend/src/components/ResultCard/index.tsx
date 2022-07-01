import "./style.css";

function ResultCard() {
  return (
    <div className="resul-informations">
      <input
        type="text"
        name="perfil"
        className="form-control"
        placeholder="perfil"
      />
      <input
        type="text"
        name="followers"
        className="form-control"
        placeholder="followers"
      />
      <input
        type="text"
        name="location"
        className="form-control"
        placeholder="location"
      />
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="name"
      />
    </div>
  );
}

export default ResultCard;
