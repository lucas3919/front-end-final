const CartBlock = ({id, name, price, quality, onRemove, onAdd}) => {
  return (
    <div className="cart-block-in">
      <h1>{name}</h1>
      <p>{price}</p>
      <div>
        <div>
          <button onClick={() => onRemove(id, false)}>-</button>
          <span>{quality}</span>
          <button onClick={() => onAdd(id)}>+</button>
        </div>
        <button onClick={() => onRemove(id, true)}>Remover</button>
      </div>
    </div>
  )
}

export default CartBlock;