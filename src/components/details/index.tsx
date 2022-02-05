
import Burger from "../../assets/img/burger/Burger.png"

const ExtraProduct = (props: any) => {

  const { detail } = props;

  return (
    <div className="detail-wrapper">
      <span className="detail-icon">
        <img src={Burger} alt={detail} />
      </span>
      <span className="detail-content">
        {detail}
      </span>
    </div>
  );
};

export default ExtraProduct;
