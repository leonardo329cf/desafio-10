import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { AuthContext } from '../../AuthContext';
import { removeAuthData } from '../../util/storage';
import history from '../../util/history';

import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        <div className="nav-logout">
          {authContextData.authenticated ? (
            <>
              <a href="#logout" onClick={handleLogoutClick}>
                SAIR
              </a>
            </>
          ) : (
              <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
