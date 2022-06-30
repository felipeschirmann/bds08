import "./style.css";
import { Link } from "react-router-dom";
import Button from "components/Button";

const Home = () => {
  return (
    <div className="container">
      <h1>Desafio Github API</h1>
      <p>Bootcamp Spring React - DevSuperior</p>
      <Link to="/before">
        <Button text="Começar" />
      </Link>
    </div>
  );
};

export default Home;
