import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import "./Main.scss";
import CardItem from "../CardItem/CardItem";

const Main = () => {
  const productsState = useSelector((state: RootState) => state.products);

  return (
    <main className="main">
      <section className="cards">
        <div className="cards__upperline">
          <div>
            <button className="cards__back-btn"></button>
            <h2 className="cards__title">Опоры трубопроводов</h2>
          </div>
          <div>
            <p className="cards__sort">Сначала популярные</p>
            <button className="cards__sort-btn"></button>
            <button className="cards__icon-all"></button>
            <button className="cards__icon-list"></button>
          </div>
        </div>
        <div className="cards__grid">
          <div className="cards__grid-filters">1</div>
          <div className="cards__grid-main">
            <ul className="cards__gost-list">
              <li className="cards__gost-item cards__gost-item_active">
                ГОСТ 14911-82
              </li>
              <li className="cards__gost-item ">ГОСТ 14911-82</li>
              <li className="cards__gost-item ">ГОСТ 14911-82</li>
              <li className="cards__gost-item ">ГОСТ 14911-82</li>
            </ul>
            <ul className="cards__cards-list">
              {productsState.map((item) => {
                return (
                  <CardItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    gost={item.gost}
                    price={item.price}
                    isHit={item.isHit}
                    isAction={item.isAction}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
