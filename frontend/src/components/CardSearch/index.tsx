import Button from "components/Button";
import { Link } from "react-router-dom";
import "./style.css";

function CardSearch() {
  return (
    <div className="base-card container">
      <h1>Encontre um perfil Github</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Usuário Github"
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
