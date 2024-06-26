import paymentMethod from '../assets/images/Payment.png';

const Footbar = () => {
  return (
    <div>
      <div className="foot">
        <div>
          <p>Fale conosco</p>
          <p>(81) 34567890</p>
          <p>(81) 997788901</p>
          <p><a href="mailto:contato@techpulse.com">contato@techpulse.com</a></p>
          <br />
          <p>Avenida Cais do Apolo, 77, Recife-PE</p>
        </div>
        <div className="foot-payment">
          <p>Formas de pagamento</p>
          <img src={paymentMethod} />
        </div>
      </div>
      <div className="foot">
        <div>
          <span>@ 2024 Tech Pulse</span>
          <span>Politica de Privacidade</span>
        </div>
        <div>
          <span>E-Mail:</span><a href="mailto:contato@techpulse.com">contato@techpulse.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footbar;