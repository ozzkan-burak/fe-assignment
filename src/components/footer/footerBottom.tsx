import bitmap from '../../assets/img/bitmap/Bitmap@2x.png';

const FooterBottom = () => {
  return (
      <div className='footer-bottom-container container'>
        <div className='footer-bottom-container__img-wrapper'>
          <img src={bitmap} alt="logo" />
        </div>
        <span className='seperator'></span>
        <div className='footer-bottom-container__img-wrapper'>
          <img src={bitmap} alt="logo" />
        </div>
        <span className='seperator'></span>
        <div className='footer-bottom-container__img-wrapper'>
          <img src={bitmap} alt="logo" />
        </div>
      </div>
    );
};

export default FooterBottom;

