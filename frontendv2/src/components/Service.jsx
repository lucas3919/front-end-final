const Service = ({name, description, price, serviceId, addcart}) => {
  return (
    <div className="service">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Valor: <b>R${price}</b></p>
      <button onClick={() => addcart(serviceId)}>COMPRAR</button>
    </div>
  )
}

export default Service;