import { NavLink } from 'react-router-dom';
import logoPicture from '../assets/images/Logo.png';

const Navbar = ({isLogged}) => {
  return (
    <div className="nav">
      <div className="img">
        <img src={logoPicture} width="150" height="40" />
      </div>
      { isLogged ? (
        <div className="link">
          <NavLink to="/services">Minhas solicitacoes de servico</NavLink>
          <NavLink to="/PaymentCreate">Metodos de pagamento</NavLink>
        </div>
      ) : (
        <div className="link">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Cadastro de novos clientes</NavLink>
        </div>
      )}
    </div>
  )
};

export default Navbar;