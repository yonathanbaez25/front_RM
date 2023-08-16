import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const { myFavorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const allClose = () => {
    props.onClose(props.id);
    dispatch(removeFav(props.id));
  };
  //console.log(props.id);

  return (
    <div className={style.container} key={props.id}>
      <div className={style.favContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className={style.buttonContainer}>
        <button onClick={allClose}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="" />
        <div className={style.dataContainer}>
          <h2>{props.name}</h2>
          <h4>{props.status}</h4>
          <h4>{props.species}</h4>
          <h4>{props.gender}</h4>
          <h4>{props.origin}</h4>
        </div>
      </Link>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addFav: (character) => dispatch(addFav(character)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
