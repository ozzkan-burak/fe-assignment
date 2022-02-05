// icons
import bitmap from '../../assets/img/bitmap/Bitmap@2x.png';
import arrowDown from '../../assets/img/arrow_down/Arrow_simple_down.png';

const FooterMiddle = () => {
  return (
      <div className='footer-middle-container container'>
        <div className='footer-middle__email-wrapper'>
          <span className='footer-middle__email__image-wrapper'>
            <img src={bitmap} alt="logo" />
          </span>
          <span className='footer-middle__email__email-wrapper'>
            Lorem@tiklagelsin.com
          </span>
        </div>
        <div className='footer-middle__content-wrapper row'>
          <div className='footer-middle__content-wrapper__item'>
            <span className='item-header'>Lorem Ipsum</span>
            <span className='item-header-line-wrapper'>
              <span className='item-header-line-red'></span>
              <span className='item-header-line-grey'></span>
            </span>
            <ul>
              <li>Lorem</li>
              <li>Doloressini</li>
              <li>Amedissu</li>
            </ul>
          </div>
          <div className='footer-middle__content-wrapper__item'>
            <span className='item-header'>Doloressini</span>
            <span className='item-header-line-wrapper'>
              <span className='item-header-line-red'></span>
              <span className='item-header-line-grey'></span>
            </span>
            <ul>
              <li>
                <span>Lorem Ipsum doleressini</span>
                <img src={arrowDown} alt="arrow-down" />
              </li>
              <li>
                <span>Lorem Ipsum doleres</span>
                <img src={arrowDown} alt="arrow-down" />
              </li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum doleres</li>
            </ul>
          </div>
          <div className='footer-middle__content-wrapper__item'>
            <span className='item-header'>Ameddesso</span>
            <span className='item-header-line-wrapper'>
              <span className='item-header-line-red'></span>
              <span className='item-header-line-grey'></span>
            </span>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
              <li>
                <span>Doloressini</span>
                <img src={arrowDown} alt="arrow-down" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default FooterMiddle;
