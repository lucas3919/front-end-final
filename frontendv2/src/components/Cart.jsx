import CartBlock from './CartBlock.jsx';

const Cart = ({closeWindow, finalizeBuy, value, amount, onAdd, onRemove}) => {
  console.log(value);
  return (
    <div className="cart-background">
      <div className="cart-block">
        <div className="cart-inside">
          <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            <h1>Carrinho</h1>
            <button onClick={() => closeWindow()}>Fechar</button>
          </div>
          <div className="cart-list">
            {value.length > 0 ? (value.map(i => 
              <CartBlock
                key={i.serviceId}
                id={i.serviceId}
                name={i.serviceName}
                price={(i.price * i.amount)}
                quality={i.amount}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            )) : (<span>Seu carrinho esta vazio.</span>)}
          </div>
          <span>Seu carrinho tem <b>{amount} itens.</b></span>
          <div style={{position: 'absolute', bottom: '50px', display: 'grid', width: '80%' }}>
            <button onClick={() => finalizeBuy()}>Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;