type props = {
  name: string;
  gost: string;
  price: string;
};

const CartItem = ({ name, gost, price }: props) => {
  return (
    <li className="cart-item">
      <img src="#" alt="фото товара" className="cart-item__img" />
      <div className="cart-item__block">
        <p className="cart-item__gost">{gost}</p>
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__price">{price}</p>
      </div>
    </li>
  );
};

export default CartItem;
