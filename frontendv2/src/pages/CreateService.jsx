import { useEffect, useState } from 'react';

import ErrorMessage from '../components/ErrorMessage.jsx';
import logo from '../assets/images/Logo.png';
import './CreateService.css';

const CreateService = ({createService, loggedWithUserId, waitForBackend}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [allPayments, setAllPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [payload, setPayload] = useState({
    paymentMethod: [],
    id_cliente: loggedWithUserId
  });
  
  const submit = (e) => {
    e.preventDefault();
    const eobj = Object.fromEntries(new FormData(e.target).entries());
    createService(payload);
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

  function setValue(name, value) {
    const aux = payload;
    
    if(name == 'paymentMethod') {
      aux['paymentMethod'].push(value);
      console.log(value);
    }else {
      aux[name] = value;
    }

    setPayload(aux);
  }

  function checkValue(value) {

    setValue('valor', value.target.value)
    const newData = allPayments.filter((v) => {
      return value.target.value <= v.valor_maximo;
    })

    setData(newData);
  }

  function submitForm() {
    console.log("payload", payload);
    console.log("client", loggedWithUserId);
    debugger;
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
              <input type="text" name="titulo" id="title" onChange={(e) => setValue('titulo', e.target.value)} required />
              <p>Valor (R$)</p>
              <input type="number" name="valor" id="value" onChange={(e) => checkValue(e)} required />
              {data.map(i => (
                <div>
                  <input type="checkbox" name="payment" value={i.id} id={i.nome} onChange={(e) => setValue('paymentMethod', e.target.value)} />
                  <label for={i.nome}>{i.nome}</label>
                </div>
              ))}
              <p>Descricao</p>
              <textarea id="description" name="descricao" onChange={(e) => setValue('descricao', e.target.value)} required />
              <button onClick={() => submitForm()}>Criar servico</button>
              <input type="reset" value="Limpar dados" className="cs-reset-text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateService;