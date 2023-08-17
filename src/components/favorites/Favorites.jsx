import React from "react";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, removeFav, reset } from "../../redux/actions";

export default function Favorites({ onClose }) {
  const cardsContainer = {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-evenly",
  };

  const { myFavorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeFav = (id) => {
    onClose(id);
    dispatch(removeFav(id));
  };

  //Male, Female, Genderless y unknown.
  const handleOrder = (e) => {
    e.preventDefault();
    //const { value } = e.taget;
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(filterCards(value));
  };

  const resetBtton = () => {
    dispatch(reset());
  };

  return (
    <div>
      <select name="order" defaultValue={"DEFAULT"} onChange={handleOrder}>
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select name="filter" defaultValue={"DEFAULT"} onChange={handleFilter}>
        <option value="DEFAULT" disabled>
          Select Filter
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={resetBtton}>Reset</button>
      <h1>Favorites</h1>
      <div style={cardsContainer}>
        {myFavorites.map((characters) => (
          <Card
            key={characters.id}
            id={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin?.name}
            image={characters.image}
            onClose={() => closeFav(characters.id)}
          />
        ))}
      </div>
    </div>
  );
}

// function mapState(st) {
//   return {
//     myFavorites: st.myFavorites,
//   };
// }

// function mapDispatch(d) {
//   return {
//     removeFav: (id) => d(removeFav(id)),
//   };
// }

// export default connect(mapState, mapDispatch)(Favorites);
