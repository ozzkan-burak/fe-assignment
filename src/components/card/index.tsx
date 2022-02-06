import { useDispatch, useSelector } from 'react-redux';
//icons
import bitmap from '../../assets/img/bitmap/Bitmap@2x.png';
import add from '../../assets/img/add/36px@2x.png';
// componenta
import Details from "../details";
//interfaces
import { IDetail } from '../../interfaces/detail';
import { ICart } from '../../interfaces/cart';
import { ICartTotal } from '../../interfaces/header';
// actions
import { addToCartAction, removeFromCartAction } from "../../redux/actions";


const Card = (data: any) => {

  const cartTotal: any = useSelector<ICartTotal>(state => state.cartTotal);
  const dispatch = useDispatch();


  const { label, price, discountLabel, firstPrice, details } = data.item;
  
  const addToCart = () => {

    if (cartTotal.length > 0) {

      const isExist = cartTotal.find((item: { id: number; }) => item.id === data.item.id);

      if (isExist) {
        dispatch(removeFromCartAction(data.item.id));
      } else {
        dispatch(addToCartAction(data.item));
      }
    } else {
      dispatch(addToCartAction(data.item));
    }
  } 


  return (
    <div className="card">
      <div className='card-container'>
        <div className='card-header'>
          {label}
        </div>
        <div className='card-body'>
          <img src={bitmap} alt={label} />
        </div>
        <div className='card-details'>
          {
            details !== null && details !== undefined ? details.map((item: IDetail, i: number) => (
              <Details key={i} detail={item} />
            ))
              : ''
          }
        </div>
        <div className="card-footer">
          <div className="card-price">
            <span className="card-footer__price-wrapper">
              {
                discountLabel !== null && discountLabel !== undefined ?
                  <span className="price-wrapper-first">{firstPrice} TL</span>
                  : ''
              }
              <span className="price-wrapper-price">{price} TL</span>
            </span>
            {
              discountLabel !== null && discountLabel !== undefined ?
                <span className="discount">
                  {discountLabel}
                </span>
                : ''
            }
          </div>
          <div className="card-button">
            <button className="card-button__button" onClick={()=> addToCart()}>
              <img src={add} alt="add" />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;
