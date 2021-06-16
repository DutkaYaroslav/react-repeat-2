import React from "react";
import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="submit" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;