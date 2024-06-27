import { NavLink } from 'react-router-dom';

import Service from './Service.jsx';

const Services = ({isLogged, addcart, listServices, loading}) => {
  console.log(listServices);
  return (
    <div className="services">
      <div className="nav-services">
        <h1>Nossos servicos</h1>
        {isLogged ? <NavLink to="/create"><button>Criar servico</button></NavLink> : <div/> }
      </div>
      {!loading ? (
        <div className="list-services">
          {listServices.map(o => (
            <Service
              key={o.id}
              serviceId={o.id}
              name={o.titulo}
              description={o.descricao}
              price={o.valor}
              addcart={addcart}
              paymentMethods={o.paymentMethod}
            />
          ))}
        </div>
      ) : <span>Carregando servicos</span> }
    </div>
  )
}

export default Services;