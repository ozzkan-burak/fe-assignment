import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// logo
import bitmap from '../../assets/img/bitmap/Bitmap.png';

// components
import SearchBar from '../../components/search-bar';
import IconButton from '../../components/icon-button';

// icons
import cart from '../../assets/img/basket/Basket.png';
// interfaces
import { ICartTotal, ITotalPrice } from '../../interfaces/header';

const Header = () => {

  let cartTotal: any = useSelector<ICartTotal>(state => state.cartTotal);
  const [total, setTotal] = useState(0.00);

  useEffect(() => {
    if (cartTotal.length > 0) {
      const total: ITotalPrice = cartTotal.reduce((a: any, b: any) => ({ price: a.price + b.price }));
      setTotal(total.price)
    } else {
      setTotal(0.00)
    }
  }, [cartTotal]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo ">
          <img src={bitmap} alt="logo" />
        </div>
        <div className="header__search ">
          <SearchBar />
        </div>
        <div className="header__cart-container">
          <div className="header__promotion-wrapper ">
            <IconButton icon={'notification'} text={'Lipsum'} bgColor={'white'} />
          </div>
          <div className="header__account-wrapper">
            <IconButton icon={'settings'} text={'Lipsum'} bgColor={'white'} />
          </div>
          <div className="header__notification-wrapper">
            <IconButton icon={'bell'} bgColor={'white'} />
          </div>
          <div className="header__cart-wrapper">
            <span className='header__cart-icon'>
              <img src={cart} alt="cart" />
            </span>
            <span className='header__cart-price'>
              {total.toFixed(2)}TL
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
