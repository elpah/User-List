import React from "react";
interface Props {
  buttonType: "button" | "submit";
  onClick?: (argument?: any) => void;
  buttonName: string;
  className: string;
}
export default function Button({
  buttonType,
  onClick,
  buttonName,
  className,
}: Props) {
  return (
    <button className={className} type={buttonType} onClick={onClick}>
      {buttonName}
    </button>
  );
}
