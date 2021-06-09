import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const styleResult = `${styles.card}  ${props.className}`;

  return <div className={styleResult}>{props.children}</div>;
};

export default Card;
