import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSplice";
import { RootState } from "../../redux/store/store";
import CartItem from "../CartItem/CartItem";
import UserForm from "../UserForm/UserForm";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((action: RootState) => action.cart);
  const dispatch = useDispatch();

  return (
    <main className="cart">
      <h2 className="cart__title">Корзина</h2>
      <div className="cart__grid">
        <div className="cart__left">
          <p className="cart__warning">
            Извините, но указанное ранее количество товара недоступно.
            Установлено ближайшее доступное значение.
            <span className="cart__warning-icon"></span>
          </p>
          <ul className="cart__items-list">
            {cartItems.map((item) => {
              return (
                <CartItem
                  name={item.name}
                  price={item.price}
                  gost={item.gost}
                  howMany={item.howMany}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </ul>
          <button
            className="cart__clear-all"
            onClick={() => dispatch(clearCart())}
          >
            <div className="cart__del-icon"></div>
            <p className="cart__clear">Очистить корзину</p>
          </button>
        </div>
        <div className="cart__right">
          <h3>Заказ</h3>
          < UserForm />
        </div>
      </div>
    </main>
  );
};

export default Cart;
