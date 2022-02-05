//icons
import bitmap from '../../assets/img/bitmap/Bitmap@2x.png';
import add from '../../assets/img/add/36px@2x.png';
// componenta
import Details from "../details";
//interfaces
import { IDetail } from '../../interfaces/detail';



const Card = (data: any) => {

  const { id, label, price, discountLabel, firstPrice, details } = data.item;

  return (
    <div className='card-container'>
      <div className='card-header'>
      </div>
      <div className='card-body'>
        <img src={bitmap} alt={label} />
      </div>
      <div className='card-details'>
        {
          details !== null && details !== undefined ? details.map((item: IDetail, i: any) => (
            <Details detail={item} />
          ))
            : ''
        }
      </div>
      <div className="card-footer">
        <div className="card-price">
          <span className="card-footer__price-wrapper">
            <span className="price-wrapper-first">{firstPrice}</span>
            <span className="price-wrapper-price">{price}</span>
          </span>
          <span className="discount">
            {discountLabel}
          </span>
        </div>
        <div className="card-button">
          <button className="card-button__button">
            <img src={add} alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
