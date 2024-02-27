// Card.js

import Styles from "./Card.module.css";
import React from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen, title, description, demoLink, githubLink }) {
  const [hovered, setHovered] = React.useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: hovered ? "scale(1.03)" : "scale(1)",
    boxShadow: hovered
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p className={Styles.description}>{description}</p>
      <div className={Styles.btnn}>
        <Button text="Demo" link={demoLink} />
        <Button text="GitHub" link={githubLink} />
      </div>
    </animated.div>
  );
}

export default Card;
