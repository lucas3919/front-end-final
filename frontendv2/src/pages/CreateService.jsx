import { useEffect, useState } from 'react';

import ErrorMessage from '../components/ErrorMessage.jsx';
import logo from '../assets/images/Logo.png';
import './CreateService.css';

const CreateService = ({createService, waitForBackend}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [allPayments, setAllPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const submit = (e) => {
    e.preventDefault();
    const eobj = Object.fromEntries(new FormData(e.target).entries());
    createService(eobj);
  }

  async function getPayment() {
    let res = null;
    try {
      await fetch("http://localhost:3000/payments",
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
    setAllPayments(res);
  }

  useEffect(() => {
    getPayment();
  }, [])

  function checkValue(value) {

    const newData = allPayments.filter((v) => {
      return value.target.value <= v.valor_maximo;
    })

    setData(newData);
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
          <h1>Cadastrar novo servico</h1>
          <div className="cs-form">
            <form id="form" onSubmit={submit}>
              <p>Titulo</p>
              <input type="text" name="titulo" id="title" required />
              <p>Valor (R$)</p>
              <input type="number" name="valor" id="value" onChange={(e) => checkValue(e)} required />
              {data.map(i => (
                <div>
                  <input type="checkbox" name="payment" value={i.id} id="payment" required/>
                  <label for="payment">{i.nome}</label>
                </div>
              ))}
              <p>Descricao</p>
              <textarea id="description" name="descricao" required />
              <button disabled={waitForBackend}>Criar servico</button>
              <input type="reset" value="Limpar dados" className="cs-reset-text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateService;