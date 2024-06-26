import { useState, useRef, useEffect } from 'react';

import './Homepage.css';
import Navbar from '../components/Navbar.jsx';
import Intro from '../components/Intro.jsx';
import Services from '../components/Services.jsx';
import Mission from '../components/Mission.jsx';
import Gallery from '../components/Gallery.jsx';
import FrameVideo from '../components/FrameVideo.jsx';
import PeopleTable from '../components/PeopleTable.jsx';
import Clients from '../components/Clients.jsx';
import Reviews from '../components/Reviews.jsx';
import Footbar from '../components/Footbar.jsx';
import Cart from '../components/Cart.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

const Homepage = ({isLogged, errorMessage, getServices, listServices, loading}) => {
  const [cart, setCart] = useState(false);
  const [amountinCart, setAmountInCart] = useState(0);
  const [currentCartScreen, setCurrentCartScreen] = useState([]);

  const addToCart = (serviceid) => {
    setCart(true);
    let addTo = { serviceId: 0, serviceName: "", price: 10, amount: 0 }
    let existsInCart = false;
    const nextCartScreen = currentCartScreen.map((i) => {
      if (i.serviceId == serviceid) {
        existsInCart = true;
        i.amount = i.amount + 1;
      }
      return i;
    })
    if (!existsInCart) {
      listServices.forEach(i => {
        if (serviceid == i.id) {
          addTo.serviceId = i.id;
          addTo.serviceName = i.titulo;
          addTo.price = i.valor;
          addTo.amount = 1;
        }
      })
      const next = [...currentCartScreen, addTo];
      setCurrentCartScreen(next);
    } else {
      setCurrentCartScreen(nextCartScreen);
    }
    setAmountInCart((prev) => prev + 1);
  }

  const removeFromCart = (id, all=false) => {
    let prevAmount = amountinCart;
    let nextCart = currentCartScreen.map(i => {
      if (i.serviceId == id) {
        if (all) {
          prevAmount = prevAmount - i.amount;
          i.amount = 0;
        } else {
          prevAmount = prevAmount - 1;
          i.amount = i.amount - 1;
        }
      }
      return i;
    });
    nextCart = nextCart.filter(p => p.amount > 0);
    setAmountInCart(prevAmount);
    setCurrentCartScreen(nextCart);
  }

  const closeCartWindow = () => {
    setCart(false);
  }

  const finalizeBuy = () => {
    let order = currentCartScreen;
    console.log(order);
    setCurrentCartScreen([]);
    setAmountInCart(0);
    setCart(false);
  }

  useEffect(() => {
    console.log("Consult a list of services");
    getServices();
  }, [])

  return (
    <>
      {errorMessage != "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <div />
      )}
      <div style={{ backgroundColor: '#313276', color: '#FFF' }}>
        {cart ?
          <Cart
            closeWindow={closeCartWindow}
            finalizeBuy={finalizeBuy}
            value={currentCartScreen}
            amount={amountinCart}
            onAdd={addToCart}
            onRemove={removeFromCart}
          />
          : <div />
        }
        <Navbar isLogged={isLogged} />
        <Intro />
        <Services isLogged={isLogged} listServices={listServices} addcart={addToCart} loading={loading}/>
        <Mission />
        <Gallery />
        <FrameVideo width="640" height="360" />
        <PeopleTable />
        <Clients />
        <Reviews />
        <Footbar />
      </div>
    </>
  )
}

export default Homepage;