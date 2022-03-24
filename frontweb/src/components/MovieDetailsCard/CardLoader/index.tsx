import ContentLoader from 'react-content-loader';
import './styles.css';

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={1}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#525252"
      foregroundColor="#6C6C6C"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="400" />
    </ContentLoader>
  </div>
);

export default CardLoader;
