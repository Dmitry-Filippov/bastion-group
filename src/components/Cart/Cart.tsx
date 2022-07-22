const Cart = () => {
  return (
    <main className="cart">
      <h2 className="__cart__title">Корзина</h2>
      <div className="cart__grid">
        <div className="cart__left">
          <p className="cart__warning">
            Извините, но указанное ранее количество товара недоступно.
            Установлено ближайшее доступное значение.
            <div className="cart__warning-icon"></div>
          </p>
          <ul className="cart__items-list">
            
          </ul>
        </div>
        <div className="cart__right"></div>
      </div>
    </main>
  );
};

export default Cart;
