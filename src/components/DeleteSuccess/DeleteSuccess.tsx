import React from "react";
import styles from "./deleteSuccess.module.css";
import Button from "../Button/Button";

interface Props {
  onClick: () => void;
}

export default function DeleteSuccess({ onClick }: Props) {
  return (
    <div className={styles.delete__modal}>
      <div className={styles.delete__box}>
        <Button
          buttonType="button"
          onClick={onClick}
          buttonName="X"
          className={styles.closeButton}
        />
        <h1 className={styles.delete__header}>Delete Confirmation</h1>
        <p className={styles.delete__paragraph}>Employee Deleted Successfully</p>
        <img
          className={styles.delete__confirm_img}
          src="https://tse1.mm.bing.net/th?id=OIP.TzAqU0K1_Sw6u4ULkeC5uAHaHa&pid=Api&P=0&h=180"
          alt=""
        />
      </div>
    </div>
  );
}
