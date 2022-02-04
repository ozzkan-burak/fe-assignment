// logo
import bitmap from '../../assets/img/bitmap/Bitmap.png';

// components
import SearchBar from '../../components/search-bar';
import IconButton from '../../components/icon-button';

// icons
import cart from '../../assets/img/basket/Basket.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container row">
        <div className="header__logo col-md-1">
          <img src={bitmap} alt="logo" />
        </div>
        <div className="header__search col-12 col-md-6">
          <SearchBar />
        </div>
        <div className="header__cart-container col-md-5 row">
          <div className="header__promotion-wrapper ">
            <IconButton icon={'notification'} text={'Lipsum'} bgColor={'white'}/>
          </div>
          <div className="header__account-wrapper">
            <IconButton icon={'settings'} text={'Lipsum'} bgColor={'white'}/>
          </div>
          <div className="header__notification-wrapper">
            <IconButton icon={'bell'} bgColor={'white'}/>
          </div>
          <div className="header__cart-wrapper">
            <span className='header__cart-icon'>
              <img src={cart} alt="cart" />
            </span>
            <span className='header__cart-price'>
              0.00 TL
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
