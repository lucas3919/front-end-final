import { useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Register from './pages/Register.jsx';
import CreateService from './pages/CreateService.jsx';
import CreatePayment from './pages/CreatePayment.jsx';
import MyServices from './pages/MyServices.jsx';

function App() {
  const URL = "http://localhost:3000";

  const [isLogged, setIsLogged] = useState(false);
  const loggedWithUserId = useRef(-1);
  const [listServices, setListServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [waitForBackend, setWaitForBackend] = useState(false);
  const [homeLoading, setHomeLoading] = useState(true);

  const isError = useRef(false);

  const nav = useNavigate();

  async function signIn(obj) {
    console.log(obj);

    // Get client data
    let res = null;
    try {
      isError.current = false;
      await fetch(URL + "/clients",
        { method: "GET", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" } }
      )
      .then((res) => { return res.json() })
      .then((data) => { res = data })
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
    // If a fetch errors, skip.
    if (res == null) return;

    for (let i = 0; i < res.length; i++) {
      if (obj.email == res[i].email && obj.senha == res[i].senha) {
        nav("/");
        setIsLogged(true);
        loggedWithUserId.current = res[i].id;
        break;
      }
    }
    if (loggedWithUserId.current == -1) {
      setErrorMessage("Incorrect username or password.")
      setTimeout(() => {
        setErrorMessage("")
      }, 2500);
    }
  }

  async function register(obj) {
    console.log("Register...");
    console.log(obj);
    // TODO send to backend with the argument "obj" which consists of name, password, cpf, etc...
    setWaitForBackend(true);
    try {
      let res = await fetch(URL + "/clients",
        { method: "POST", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" }, body: JSON.stringify(obj) }
      )
      if (res.status == 200) nav("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("")
      }, 5000);
    }
    setWaitForBackend(false);
  }

  async function changePassword(obj) {
    console.log("Change password...");
    // TODO send to backend with the argument "obj" which consists of email, password and confirmation.
    console.log(obj);
    setWaitForBackend(true);
    try {
      let res = await fetch(URL + "/forgot-password",
        { method: "POST", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" }, body: JSON.stringify(obj) }
      )
      if (res.status == 200) nav("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("")
      }, 5000);
    }
    setWaitForBackend(false);
  }

  async function createService(obj) {
    console.log("Create service...");
    console.log(obj);
    obj.id_cliente = loggedWithUserId.current;
    // TODO send to backend with the argument "obj" which consists of text, name and description.
    setWaitForBackend(true);
    try {
      let res = await fetch(URL + "/services",
        { method: "POST", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" }, body: JSON.stringify(obj) }
      )
      if (res.status == 200) nav("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("")
      }, 5000);
    }
    setWaitForBackend(false);
  }

  async function createPayment(obj) {
    console.log("Create Payment...");
    console.log(obj);
    obj.id_cliente = loggedWithUserId.current;
    // TODO send to backend with the argument "obj" which consists of text, name and description.
    setWaitForBackend(true);
    try {
      let res = await fetch(URL + "/payment",
        { method: "POST", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" }, body: JSON.stringify(obj) }
      )
      if (res.status == 200) nav("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("")
      }, 5000);
    }
    setWaitForBackend(false);
  }

  async function getServices() {
    let res = null;
    try {
      isError.current = false;
      await fetch(URL + "/services",
        { method: "GET", headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any" } }
      )
      .then((res) => { return res.json() })
      .then((data) => { res = data })
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
    // If a fetch errors, skip.
    if (res == null) return;
    console.log(res);
    setListServices(res);
    setHomeLoading(false);
  }

  return (
    <>
      <Routes>
        <Route index element={ <Homepage isLogged={isLogged} errorMessage={errorMessage} listServices={listServices} getServices={getServices} loading={homeLoading} /> } />
        <Route path="login" element={ <Login signIn={signIn} errorMessage={errorMessage} waitForBackend={waitForBackend} /> } />
        <Route path="forgot" element={ <ForgotPassword changePassword={changePassword} errorMessage={errorMessage}  waitForBackend={waitForBackend} /> } />
        <Route path="register" element={ <Register register={register} errorMessage={errorMessage} waitForBackend={waitForBackend} /> } />
        <Route path="create" element={ <CreateService createService={createService} errorMessage={errorMessage} waitForBackend={waitForBackend} /> } />
        <Route path="PaymentCreate" element={ <CreatePayment createPayment={createPayment} errorMessage={errorMessage} waitForBackend={waitForBackend} /> } />
        <Route path="services" element={ <MyServices loggedWithUserId={loggedWithUserId.current} url={URL} /> } />
      </Routes>
    </>
  )
}

export default App;