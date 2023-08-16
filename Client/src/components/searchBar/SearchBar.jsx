import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    //console.log(value);
    setId(value);
  };

  return (
    <div className={style.container}>
      <input type="search" placeholder="Ingrese ID" onChange={handleChange} />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}
