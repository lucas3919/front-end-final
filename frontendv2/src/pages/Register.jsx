import ErrorMessage from '../components/ErrorMessage.jsx';
import logo from '../assets/images/Logo.png';
import './Register.css';

const Register = ({register, errorMessage}) => {
  const createAccount = (e) => {
    e.preventDefault();
    const eobj = Object.fromEntries(new FormData(e.target).entries());
    register(eobj);
  }

  return (
    <div>
      {errorMessage != "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div />
      )}
      <div className="reg-page">
        <div className="reg">
          <div className="reg-logo">
            <img src={logo} width="225" height="60" />
          </div>
          <div className="reg-form">
            <form id="form" onSubmit={(e) => createAccount(e)}>
              <div className="reg-form-col">
                <div>
                  <p>Nome Completo</p>
                  <input type="text" name="nome" id="fullname" required />
                </div>
                <div>
                  <p>CPF</p>
                  <input type="text" name="cpf" id="cpf" required />
                </div>
                <div>
                  <div className="reg-form-row">
                    <div>
                      <p>Data de Nascimento</p>
                      <input type="date" name="nascimento" id="birth" required />
                    </div>
                    <div>
                      <p>Telefone Celular</p>
                      <input type="number" name="phone" id="phone" required />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="reg-form-row">
                    <div>
                      <p>Estado Civil</p>
                      <input type="radio" id="solteiro" name="estado_civil" value="Solteiro" /><label htmlFor="solteiro">Solteiro</label><br />
                      <input type="radio" id="casado" name="estado_civil" value="Casado" /><label htmlFor="casado">Casado</label><br />
                      <input type="radio" id="divorciado" name="estado_civil" value="Divorciado" /><label htmlFor="divorciado">Divorciado</label><br />
                      <input type="radio" id="viuvo" name="estado_civil" value="Viuvo" /><label htmlFor="viuvo">Viuvo</label><br />
                    </div>
                    <div>
                      <p>Escolaridade</p>
                      <select id="school" name="school">
                        <option value="1gi">1 grau incompleto</option>
                        <option value="1gc">1 grau completo</option>
                        <option value="2gc">2 grau completo</option>
                        <option value="ns">Nivel superior</option>
                        <option value="pg">Pos graduacao</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reg-form-col">
                <div>
                  <p>Criar nova senha</p>
                  <input type="password" name="senha" id="password" required />
                </div>
                <div>
                  <p>Confirmar nova senha</p>
                  <input type="password" name="senha" id="confirm-password" required />
                </div>
                <div>
                  <p>E-Mail</p>
                  <input type="text" name="email" id="email" required />
                </div>
                <div className="reg-submit-class">
                  <button>Cadastrar</button>
                  <input type="reset" value="Limpar dados" className="reg-reset-text" />
                </div>
              </div>
            </form>
          </div>
          <div className="reg-errors">
            <ul id="ul-error"></ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;