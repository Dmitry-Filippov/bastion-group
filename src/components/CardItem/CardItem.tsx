import { useState } from "react";
import { useDispatch } from "react-redux";
import img from "../../imgs/заглушка.png";
import { addItemToCart } from "../../redux/features/cart/cartSplice";

type props = {
  name: string;
  gost: string;
  price: string;
  id: string;
  isHit: boolean;
  isAction: boolean;
};

const CardItem = ({ name, gost, isHit, isAction, price, id }: props) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch();

  function handleAddToCartClick() {
    dispatch(addItemToCart({ name, gost, id, price, howMany:count }));
  }

  return (
    <li className="cards__card-item">
      <ul className="cards__actions">
        {isHit ? (
          <li className="cards__action cards__action_type_hit">Хит</li>
        ) : (
          <div></div>
        )}
        {isAction ? (
          <li className="cards__action cards__action_type_action">Акция</li>
        ) : (
          <li></li>
        )}
      </ul>
      <img src={img} alt="фото товара" className="cards__card-img" />
      <p className="cards__card-item-gost">ГОСТ {gost}</p>
      <h3 className="cards__card-item-name">{name}</h3>
      <div className="cards__hover-wrapper">
        <p className="cards__card-item-price">{price} руб. </p>
        <div className="cards__card-item-num">
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>{count}</p>
          <button onClick={() => (count > 1 ? setCount(count - 1) : 0)}>
            -
          </button>
        </div>
      </div>
      <button className="cards__to-cart-btn" onClick={handleAddToCartClick}>
        <div></div> <p>В корзину</p>
      </button>
      <button className="cards__about-btn">Подробнее</button>
    </li>
  );
};

export default CardItem;
