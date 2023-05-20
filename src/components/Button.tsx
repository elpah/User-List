import React from "react";
interface Props {
  buttonType: "button" | "reset";
  onClick: (argument?: any) => void;
  buttonName: string;
}
export default function Button({ buttonType, onClick, buttonName }: Props) {
  return (
    <button type={buttonType} onClick={onClick}>
      {buttonName}
    </button>
  );
}
