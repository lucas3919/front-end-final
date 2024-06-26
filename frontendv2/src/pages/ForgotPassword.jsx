import ErrorMessage from '../components/ErrorMessage.jsx';
import logo from '../assets/images/Logo.png';
import './ForgotPassword.css';

const ForgotPassword = ({changePassword, errorMessage}) => {
  const submitChange = (e) => {
    e.preventDefault();
    
    const eobj = Object.fromEntries(new FormData(e.target).entries());
    changePassword(eobj);
  }

  return (
    <div>
      {errorMessage != "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div />
      )}
      <div className="fp-page">
        <div className="fp">
          <div className="fp-logo">
            <img src={logo} width="225" height="60" />
          </div>
          <div className="fp-form">
            <form id="form" onSubmit={(e) => submitChange(e)}>
              <p>Login</p>
              <input type="email" name="email" id="username" required />
              <p>Nova Senha</p>
              <input type="password" name="senha" id="password" required />
              <p>Confirmar nova senha</p>
              <input type="password" name="senha" id="password_confirmation" required />
              <button>Redefinir a senha</button>
              <input type="reset" value="Limpar dados" className="fp-reset-text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;