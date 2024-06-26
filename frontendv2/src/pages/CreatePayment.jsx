import ErrorMessage from '../components/ErrorMessage.jsx';
import logo from '../assets/images/Logo.png';
import './CreateService.css';

const CreatePayment = ({createPayment, errorMessage, waitForBackend}) => {
  const submit = (e) => {
    e.preventDefault();
    const eobj = Object.fromEntries(new FormData(e.target).entries());
    createPayment(eobj);
  }

  return (
    <div>
      {errorMessage != "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div />
      )}
      <div className="cs-page">
        <div className="cs">
          <div className="cs-logo">
            <img src={logo} width="225" height="60" />
          </div>
          <h1>Cadastrar novo metodo de pagamento</h1>
          <div className="cs-form">
            <form id="form" onSubmit={submit}>
              <p>Sigla</p>
              <input type="text" name="sigla" id="title" required />
              <p>Nome</p>
              <input type="text" name="nome" id="value" required />
              <p>Valor máximo</p>
              <input type="number" name="valor_maximo" id="value" required />
              <p>Indicador de meio eletrônico</p>
              <select name="meio_eletronico" required>
                <option value="0">Não</option>
                <option value="1">Sim</option>
              </select>
              <button disabled={waitForBackend}>Criar Pagamento</button>
              <input type="reset" value="Limpar dados" className="cs-reset-text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePayment;