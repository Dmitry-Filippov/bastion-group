import { useState } from "react";
import "./Products.css";

const Products = () => {
  const [selectValue, setSelectValue] = useState<string>("");

  function handleSelectChange(e: any) {
    setSelectValue(e.target.value);
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    console.log(selectValue);
  }

  return (
    <main className="products">
      <h2 className="products__title">Добавить продукт</h2>
      <form className="products__form" onSubmit={handleFormSubmit}>
        <input type="number" className="products__input" placeholder="ID" />
        <input type="text" className="products__input" placeholder="Название" />
        <select className="products__select" onChange={handleSelectChange}>
          <option value="Барсетки">Барсетки</option>
          <option value="Куклы">Куклы</option>
          <option value="Бинокли">Бинокли</option>
        </select>
        <input type="number" className="products__input" placeholder="Цена" />
        <input type="text" className="products__input" placeholder="ГОСТ" />
        <button type="submit" className="products__submit">
          Добавить
        </button>
      </form>
    </main>
  );
};

export default Products;
