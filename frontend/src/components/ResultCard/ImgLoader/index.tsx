import ContentLoader from "react-content-loader"

const ImgLoader = () => (
  <ContentLoader 
    speed={1}
    width={150}
    height={150}
    viewBox="0 0 150 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#aaa7a7"
  >
    <rect x="1" y="5" rx="0" ry="0" width="150" height="150" />
  </ContentLoader>
)

export default ImgLoader