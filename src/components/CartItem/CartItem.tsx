import { useState } from "react";
import { useDispatch } from "react-redux";
import img from "../../imgs/заглушка.png";
import {
  decreseCount,
  increaseCount,
  removeItemFromCart,
} from "../../redux/features/cart/cartSplice";
import "./CartItem.scss";

type props = {
  name: string;
  gost: string;
  price: string;
  howMany: number;
  id: string;
};

const CartItem = ({ name, gost, price, howMany, id }: props) => {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <img src={img} alt="фото товара" className="cart-item__img" />
      <div className="cart-item__block">
        <p className="cart-item__gost">ГОСТ {gost}</p>
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__price">{price} руб.</p>
      </div>
      <div className="cart-item__count-btns">
        <button onClick={() => dispatch(increaseCount(id))}>+</button>
        <p>{howMany}</p>
        <button
          onClick={() => {
            if (howMany > 1) {
              dispatch(decreseCount(id));
            }
          }}
        >
          -
        </button>
      </div>
      <p className="cart-item__total-price">{+price * howMany} руб.</p>
      <button
        className="cart-item__del-btn"
        onClick={() => dispatch(removeItemFromCart(id))}
      ></button>
    </li>
  );
};

export default CartItem;
