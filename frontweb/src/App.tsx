import './assets/styles/custom.scss';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from 'Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme='colored'
      />
    </AuthContext.Provider>
  );
}

export default App;
