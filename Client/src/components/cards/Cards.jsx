import Card from "../card/Card.jsx";

export default function Cards({ characters, onClose }) {
  const cardsContainer = {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-evenly",
  };
  return (
    <div style={cardsContainer}>
      {characters.map((characters) => (
        <Card
          key={characters.id}
          id={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          gender={characters.gender}
          origin={characters.origin?.name}
          image={characters.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
