import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  //console.log(character);
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <h1>Detail</h1>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>Origin | {character.origin?.name}</h3>
      <h3>Specie | {character.species}</h3>
      <h3>Gender | {character.gender}</h3>
      <h3>Location | {character.location?.name}</h3>
    </div>
  );
}
