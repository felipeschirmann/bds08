import "./style.css";
import { Link } from "react-router-dom";
import Button from "components/Button";

const Home = () => {
  return (
    <div className="container">
      <div className="base-card">
        <h1>Encontre um perfil Github</h1>
        <input type="text" placeholder="Usuário Github" />
        <Link to="/after">
          <Button text="Encontrar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
