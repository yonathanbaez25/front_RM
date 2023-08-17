import React from "react";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";

export default function About(props) {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <h3>Autor | Yonathan Acevedo</h3>
      <p>
        Hola Soy Yonathan Acevedo, actualmente soy estudiante de la carrera Full
        Stack Developer y me apasiona descubrir nuevas tecnologías para crear
        experiencias innovadoras en el desarrollo web. También cuento con una
        gran experiencia en manejo de servidores y redes de datos, me he
        certificado con empresas como Infusionsoft y ActiveCampaig en temas de
        Marketing Digital, donde también cuento con certificados de Udemy.
      </p>

      <h3>Mis principales intereses:</h3>
      <ol>
        <li>
          Aprender nuevos lenguajes de programación y mejorar los que ya tengo
          incorporados.
        </li>
        <li>Mejorar mi nivel inglés.</li>
        <li>Superarme como profesional cada día.</li>
      </ol>

      <p>
        Si tienes alguna pregunta o necesitas ayuda en algo, no dudes en
        preguntarme. Estoy aquí para ayudarte en lo que pueda. Contáctame:
        ​Email: yacevedo170@gmail.com
      </p>

      <NavLink to="https://www.linkedin.com/in/yonathan-acevedo-baez-26a453b4">
        <button className={styles.linkedin}>Visitar linkedin</button>
      </NavLink>
    </div>
  );
}
