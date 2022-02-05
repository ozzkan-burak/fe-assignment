//container
import FooterBottom from "./footerBottom";
import FooterMiddle from "./footerMiddle";
import FooterTop from "./footerTop";


const Footer = () => {
  return (
      <footer className='container-fluid'>
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
        <div className='copyright-container container'>
          Lorem ipsum doloer sit amet, consectetur adipiscing elit.
        </div>
      </footer>
    );
};

export default Footer;
