import "./style.css";
import CardSearch from "components/CardSearch";
import ResultCard from "components/ResultCard";

const Home = () => {
  return (
    <div className="content-page">
      <CardSearch />
      <div className="base-card container container-result">
        <img src="" alt="" />
        <div className="base-card container-result-info">
          <h2>Informações</h2>
          <ResultCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;
