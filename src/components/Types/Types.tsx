import "./Types.css";

const Types = () => {
  return (
    <main className="types">
      <h2 className="types__title">Добавить тип продукта</h2>
      <form className="types__form">
        <input
          className="types__input"
          type="number"
          placeholder="ID"
          required
        />
        <input
          className="types__input types__input_name"
          type="text"
          placeholder="Название"
          required
        />
        <button className="types__submit" type="submit">
          Добавить
        </button>
      </form>
    </main>
  );
};

export default Types;
