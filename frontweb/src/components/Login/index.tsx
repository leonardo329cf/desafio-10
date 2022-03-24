import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from '../../util/requests';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { saveAuthData } from '../../util/storage';
import { getTokenData } from '../../util/auth';

import './styles.css';
import { toast } from 'react-toastify';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/movies' } };

  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.replace(from);
      })
      .catch((error) => {
        toast.error("Erro ao tentar efetuar o login");
      });
  };

  return (
    <div className="base-card bg-secondary login-card">
      <div className="title-container">
        <h1>LOGIN</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-container">
            <div className="login-input">
              <input
                {...register('username', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
                type="text"
                className={`form-control base-input ${
                  errors.username ? 'is-invalid' : ''
                }`}
                placeholder="Email"
                name="username"
              />
              <div className="invalid-feedback d-block">
                {errors.username?.message}
              </div>
            </div>
            <div className="login-input">
              <input
                {...register('password', {
                  required: 'Campo obrigatório',
                })}
                type="password"
                className={`form-control base-input ${
                  errors.password ? 'is-invalid' : ''
                }`}
                placeholder="Password"
                name="password"
              />
              <div className="invalid-feedback d-block">
                {errors.password?.message}
              </div>
            </div>
          </div>
          <div className="login-submit">
            <button className="btn btn-tertiary">
              <h6>FAZER LOGIN</h6>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
