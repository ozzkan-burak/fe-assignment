import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//icons
import Arrow from "../../assets/img/arrow_right/16px.png"

//interface
import { IData } from '@/interfaces/data';


const BreadCrumb = () => {

  const data:any = useSelector<IData>(state => state.data);  

  const currentLocation = data[0]?.label;

  return (
    <div className="bread-crumb">
      <span>
        {
          currentLocation === 'Popüler Ürünler' ? '': <Link to="/">Anasayfa</Link> 
        } 
      </span>
      <span>
        <span className='bread-crumb__right-arrow'>
        {
          currentLocation === 'Popüler Ürünler' ? '':  <img src={Arrow} alt="right arrow" />
        }
        </span>

        {currentLocation}
      </span>
    </div>
  );
};

export default BreadCrumb;
