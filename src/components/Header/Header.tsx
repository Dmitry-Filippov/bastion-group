import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import "./Header.css";

const Header = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const cartItems = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    let count: number = 0;
    cartItems.forEach((item) => {
      count += item.howMany;
    });
    setCartCount(count);
  }, [cartItems]);

  return (
    <header className="header">
      <div className="header__upperline">
        <div className="header__content">
          <nav className="header__nav">
            <Link to="/" className="header__link">
              Главная
            </Link>
            <Link to="/types" className="header__link">
              Типы продуктов
            </Link>
            <Link to="/products" className="header__link">
              Продукты
            </Link>
          </nav>
          <ul className="header__contacts">
            <li className="header__phone">
              <div className="header__icon header__icon_type_phone"></div>
              <p className="header__phone-num">+7 (499) 380-78-90</p>
            </li>
            <li className="header__location">
              <div className="header__icon header__icon_type_location"></div>
              <select name="location" id="location">
                <option value="Москва">Москва</option>
              </select>
              <div className="header__select-dropdown"></div>
            </li>
            <li className="header__mail">
              <div className="header__icon header__icon_type_mail"></div>
              <span className="header__mail-text">info@bastion.pro</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__centerline">
        <div className="header__content">
          <div className="header__main-icon"></div>
          <h1 className="header__title">
            Производитель металлических изделий №1
          </h1>
          <button className="header__catalog-button">
            <div className="header__catalog-icon"></div>
            <span className="header__catalog-button-text">Каталог</span>
          </button>
          <form className="header__form">
            <div className="header__search-icon"></div>
            <input
              type="text"
              className="header__input"
              placeholder="Поиск по названию..."
            />
            <button className="header__search-btn" type="submit"></button>
          </form>
          <ul className="header__icons-list">
            <li>
              <div className="header__star-icon"></div>
              <p className="header__icon-text">Избранное</p>
            </li>
            <li>
              <Link className="header__shop-icon" to="/cart">
                <p className="header__shop-count">{cartCount}</p>
              </Link>
              <p className="header__icon-text">Корзина</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__underline">
        <div className="header__content">
          <nav className="header__under-nav">
            <p className="header__nav-text">Главная</p>
            <div className="header__breaker"></div>
            <p className="header__nav-text">Интернет-магазин</p>
            <div className="header__breaker"></div>
            <p className="header__nav-text">Опоры трубопроводов</p>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
