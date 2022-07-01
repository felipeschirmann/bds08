import "./style.css";
import CardSearch from "components/CardSearch";

const Home = () => {
  return (
    <div className="content-page">
      <CardSearch />
      <div className="base-card container container-result">
        <img src="" alt="" />
        <div className="base-card container-result-info">
          <h2>Informações</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
