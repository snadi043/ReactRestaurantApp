import { useState } from 'react';
import Header from './components/Layout/header';
import Meals from './components/Meals/Meals';
import Cart from  './components/Cart/Cart';
import CartProvider from './store/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowChart={showCartHandler}/>
        <main>
         <Meals/>
        </main>
      
    </CartProvider>
      
  );
}

export default App;
