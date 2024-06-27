import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage.jsx';
import logo from '../assets/images/Logo.png';
import './MyServices.css';

const MyServices = ({loggedWithUserId, url}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getService() {
    let res = null;
    try {
      await fetch(url + "/services/client/" + loggedWithUserId,
        { method: "GET", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" } }
      )
      .then((ress) => { return ress.json() })
      .then((dataa) => { res = dataa })
      .catch((err) => {
        setErrorMessage(err.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000)
      })
      console.log(res);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("")
      }, 5000);
    }
    if (res == null) return;
    setLoading(false);
    setData(res);
    console.log("res", res);
  }

  useEffect(() => {
    // TODO send to backend with the username id "loggedWithUserId" to get requested services.
    console.log("Consult list of services with ID " + loggedWithUserId);
    getService();
  }, [])

  return (
    <div>
      {errorMessage != "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div />
      )}
      <div className="ms-page">
        <div className="ms">
          <div className="ms-logo">
            <img src={logo} width="225" height="60" />
          </div>
          <h1>Minhas solicitacoes de servico</h1>
          <div className="ms-table-services">
            { !loading ? (
              <table>
              <thead>
                <tr>
                  <td>Codigo</td>
                  <td>Servico</td>
                  <td>Descricao</td>
                  <td>Metodos de Pagamento</td>
                  <td>Valor Total</td>
                </tr>
              </thead>
              <tbody>
                {data.map(i => (
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.titulo}</td>
                    <td>{i.descricao}</td>
                    <td>{i.paymentMethod.join(', ')}</td>
                    <td>{i.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : <span>Carregando</span> }
          </div>
          <NavLink to="/"><button>Voltar</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default MyServices;