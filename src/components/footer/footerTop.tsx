//icons
import And from '../../assets/img/and/and_Bitmao.png';
import Ios from '../../assets/img/ios/ios_Bitmap.png';
import instagram from '../../assets/img/instagram/instagram.png';
import facebook from '../../assets/img/facebook/facebook.png';
import twitter from '../../assets/img/twitter/twitter.png';

const FooterTop = () => {
  return (
      <div className='footer-top-container'>
        <div className='footer-top-container__store-wrapper'>
          <img src={And} alt="and-icon" />
          <img src={Ios} alt="ios-icon" />
        </div>
        <div className='footer-top-container__social-wrapper'>
          <img src={instagram} alt={'instagram-icon'} />
          <img src={facebook} alt={'facebook-icon'} />
          <img src={twitter} alt={'twitter-icon'} />
        </div>
      </div>
    );
};

export default FooterTop;
