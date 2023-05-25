import React from "react";
import "./deleteSuccess.css";
import Button from "../Button/Button";
interface Props {
  onClick: () => void;
}
export default function DeleteSuccess({ onClick }: Props) {
  return (
    <div className="delete__modal">
      <div className="delete__box">
        <Button
          buttonType="button"
          onClick={onClick}
          buttonName="X"
          className="closeButton"
        />
        <h1 className="delete__header">Delete Confirmation</h1>
        <p className="delete__paragraph">Employee Deleted Successfully</p>
        <img
          className="delete__confirm-img"
          src="https://tse1.mm.bing.net/th?id=OIP.TzAqU0K1_Sw6u4ULkeC5uAHaHa&pid=Api&P=0&h=180"
          alt=""
        />
      </div>
    </div>
  );
}
