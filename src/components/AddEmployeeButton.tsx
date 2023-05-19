import React from "react";
import "./addEmployeebutton.css";
interface Props {
  buttonName: string;
  onClick?: () => void;
}
export default function AddEmployeeButton({ buttonName, onClick }: Props) {
  return (
    <button className="addEmployeeButton" onClick={onClick}>
      {buttonName}
    </button>
  );
}
