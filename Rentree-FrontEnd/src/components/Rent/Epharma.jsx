import React, { useState, useEffect } from 'react';
// import Card2Component from '../HomePage/Cards2/Card2Component'
import TopBooks from './Top _Sellers_Books/TopBooks';
import NewBooks from './New_Arrival_Books/NewBooks'
import PremiumGames from './Premium_Games/PremiumGames'
import Cart from './Top _Sellers_Books/Cart';
import Navbar from './Navbar';
import MedicalDeviceSection from './Medical_Devices/MedicalDeviceSection';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Styles/animate-cards.css'
// import Swal from 'sweetalert2'
import Swal from 'sweetalert2'
function Epharma() {
  const cartItem = JSON.parse(localStorage.getItem('cartItem'))
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState(cartItem?cartItem:[]);
 
  const handleClick = (item) => {
  if (cart.indexOf(item) !== -1) return
    else {
      item.amount = 1;
      setCart([...cart, item]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added into cart',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
  };
  useEffect(() => {
    console.log(cart)
    localStorage.setItem('cartItem',JSON.stringify(cart));
    
  });
  const handleChange = (item, d) => {
    
    const inc = cart.indexOf(item);
    const arr = cart;
    arr[inc].amount += d;

    if (arr[inc].amount === 0) 
    arr[inc].amount = 1;
    setCart([...arr]);
  };
  return (
    <div>
      <BrowserRouter basename='/'>
        <div className="App">
          (<Navbar setShow={setShow} size={cart.length} />
          {show ? (
            <div>
              {/* <Card2Component handleClick={handleClick} /> */}

              <Switch>
                    <Route path="/cart" ><Cart handleClick={handleClick} /></Route>
                    <Route path="/Epharma/topbooks" ><TopBooks handleClick={handleClick} /></Route>
                    <Route path="/Epharma/newbooks"><NewBooks handleClick={handleClick} /></Route>
                    <Route path="/Epharma/premiumgames"><PremiumGames handleClick={handleClick} /></Route>
                    <Route path="/Epharma/MedicalDevice"><MedicalDeviceSection handleClick={handleClick} /></Route>
                    {/* <Route path="/cardComponent"><Card2Component handleClick={handleClick} /></Route> */}
              </Switch>
            </div>

          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
        </div>

      </BrowserRouter>
    </div>


  )
}

export default Epharma;