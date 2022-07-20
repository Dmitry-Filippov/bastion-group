import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { addProduct } from "../../redux/features/products/productsSplice";
import "./Products.css";

const Products = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [gost, setGost] = useState<string>("");
  const typesState = useSelector((state: RootState) => state.types);
  const dispatch = useDispatch();

  function handleSelectChange(e: any) {
    setSelectValue(e.target.value);
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(addProduct({ id, name, selectValue, price, gost }));
    setId("");
    setName("");
    setPrice("");
    setGost("");
  }

  return (
    <main className="products">
      <h2 className="products__title">Добавить продукт</h2>
      <form className="products__form" onSubmit={handleFormSubmit}>
        <input
          type="number"
          className="products__input"
          placeholder="ID"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          className="products__input"
          placeholder="Название"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select className="products__select" onChange={handleSelectChange}>
          {typesState.length > 0 ? (
            typesState.map((type) => {
              return (
                <option value={type.name} key={type.id}>
                  {type.name}
                </option>
              );
            })
          ) : (
            <option value="нет типов">нет типов</option>
          )}
        </select>
        <input
          type="number"
          className="products__input"
          placeholder="Цена"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          className="products__input"
          placeholder="ГОСТ"
          required
          value={gost}
          onChange={(e) => setGost(e.target.value)}
        />
        <button type="submit" className="products__submit">
          Добавить
        </button>
      </form>
    </main>
  );
};

export default Products;
