import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/nav/NavBar";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  async function login(userData) {
    const { email, password } = userData;
    //const URL = "/rickandmorty/login/";
    console.log(email, password);

    try {
      const { data } = await axios.get(
        `https://back-rm-production.up.railway.app/rickandmorty/login/?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      window.alert("Usuario o contrasena incorrecta");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `https://back-rm-production.up.railway.app/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((caracter) => caracter.id !== Number(id)));
  };

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}

      <hr />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
