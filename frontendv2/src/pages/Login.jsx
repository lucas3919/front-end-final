import { NavLink } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage.jsx';
import './Login.css';
import loginImage from '../assets/images/LoginImage.png';
import logo from '../assets/images/Logo.png';

const Login = ({signIn, errorMessage, waitForBackend}) => {
  const submitLogin = (e) => {
    e.preventDefault();
    const eobj = Object.fromEntries(new FormData(e.target).entries());
    signIn(eobj);
  }

  return (
    <div className="login-des">
      {errorMessage != "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div />
      )}
      <div className="login-page">
        <img src={loginImage} />
        <div className="login">
          <div className="login-logo">
            <img src={logo} width="225" height="60" />
          </div>
          <div className="login-form" onSubmit={(e) => submitLogin(e)}>
            <form id="form">
              <p>Login</p>
              <input type="text" name="email" required />
              <p>Senha</p>
              <input type="password" name="senha" required />
              <NavLink to="/forgot">Esqueci a senha</NavLink>
              <button disabled={waitForBackend}>Fazer login</button>
              <input type="reset" value="Limpar dados" className="login-reset-text" />
            </form>
          </div>
          <div className="login-create">
            <span>Ainda nao e cliente? </span><NavLink to="/register">Cadastre-se!</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;