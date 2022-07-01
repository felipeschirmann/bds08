import ContentLoader from "react-content-loader";
import ImgLoader from "../ImgLoader";

const ResultCardLoader = () => (
  <div className="base-card container container-result">
    <ImgLoader />
    <div className="base-card container-result-info">
      <h2>Informações</h2>
      <div className="resul-informations">
        <ContentLoader
          speed={1}
          width={247}
          height={150}
          viewBox="0 0 247 150"
          backgroundColor="#f3f3f3"
          foregroundColor="#aaa7a7"
        >
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="50" r="8" />
          <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="80" r="8" />
          <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="110" r="8" />
          <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>
      </div>
    </div>
  </div>
);

export default ResultCardLoader;
