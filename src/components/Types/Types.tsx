import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Types.css";
import { addType } from "../../redux/features/types/typesSlice";

const Types = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(addType({ id, name }));
    setId("");
    setName("");
  }
  return (
    <main className="types">
      <h2 className="types__title">Добавить тип продукта</h2>
      <form className="types__form" onSubmit={handleFormSubmit}>
        <input
          className="types__input"
          type="number"
          placeholder="ID"
          required
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          className="types__input types__input_name"
          type="text"
          placeholder="Название"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="types__submit" type="submit">
          Добавить
        </button>
      </form>
    </main>
  );
};

export default Types;
