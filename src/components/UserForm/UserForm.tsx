import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import "./UserForm.css";

const UserForm = () => {
  const cartItems = useSelector((action: RootState) => action.cart);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [inn, setInn] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price * item.howMany;
    });
    setTotalPrice(sum);
  }, [cartItems]);

  function handleFormSubmit(e: any) {
    e.preventDefault();
    cartItems.forEach((item) => {
      console.log(item.name, item.howMany, item.price);
    });
    console.log(`
      Покупатель: ${name}
      Контактный телефон: ${phone}
      Email: ${email}
      Организация / ИНН: ${inn}

      Общая сумма покупки: ${totalPrice} рублей
    `)
  }

  return (
    <div className="user-form">
      <p className="user-form__contact">Контактная информация</p>
      <form className="user-form__form" onSubmit={handleFormSubmit}>
        <div className="user-form__input-wrapper">
          <div className="user-form__input-icon name"></div>
          <input
            type="text"
            className="user-form__input"
            placeholder="ФИО"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="user-form__input-wrapper">
          <div className="user-form__input-icon phone"></div>
          <input
            type="phone"
            className="user-form__input"
            placeholder="Контактный телефон"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="user-form__input-wrapper">
          <div className="user-form__input-icon email"></div>
          <input
            type="email"
            className="user-form__input"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="user-form__input-wrapper">
          <div className="user-form__input-icon inn"></div>
          <input
            type="text"
            className="user-form__input"
            placeholder="Организация / ИНН"
            required
            onChange={(e) => setInn(e.target.value)}
          />
        </div>
        <div className="user-form__total">
          <p>Итого</p>
          <p className="user-form__total-price">{totalPrice} руб.</p>
        </div>
        <button type="submit" className="user-form__submit">
          <div className="user-form__submit-icon"></div>
          <p className="user-form__submit-text">Оформить заказ</p>
        </button>
        <button className="user-form__suggestion">
          <div className="user-form__sugestion-icon"></div>
          <p className="user-form__sugestion-text">
            Коммерческое <br />
            предложение
          </p>
        </button>
      </form>
    </div>
  );
};

export default UserForm;
