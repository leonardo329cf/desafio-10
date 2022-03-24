import Login from '../../components/Login';
import HomeImage from '../../assets/images/homeImage.svg';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-image-card">
          <div className="image-card-content">
            <h1>Avalie Filmes</h1>
            <h4>Diga o que você achou do seu filme favorito</h4>
          </div>
          <img src={HomeImage} alt="Home" />
        </div>
        <Login />
      </div>
    </>
  );
};

export default Home;
