import React from "react";
import { Employee } from "../employeeType";
import "./employeeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

interface Props {
  employee: Employee;
  onDeleteEmployee: (employeeId: any) => void;
  onEditEmployee: (employeeId: any) => void;
}
export default function EmployeeCard({
  employee,
  onDeleteEmployee,
  onEditEmployee,
}: Props) {
  return (
    <>
      <div className="employee__card">
        <h2 className="employee__initials">{`${employee.employeeFirstName.charAt(
          0
        )}.${employee.employeeLastName.charAt(0)}`}</h2>
        <div className="img__name-number">
          <img
            className="employee__img"
            src={employee.employeeImg}
            alt="no Image found"
          />
          <div className="name__number">
            <p className="employee__fullname">{`${employee.employeeFirstName} ${employee.employeeLastName}`}</p>
            <p className="employee__number">{employee.employeeNumber}</p>
          </div>
        </div>
        <div className="email__phone">
          <p className="employee__email">
            <FontAwesomeIcon
              className="email-icon"
              style={{ color: "#4e4a4a", marginRight: 10 }}
              icon={faEnvelope}
            />
            {employee.email}
          </p>
          <p className="employee__phone">
            <FontAwesomeIcon
              className="phone-icon"
              style={{ color: "#4e4a4a", marginRight: 10 }}
              icon={faPhone}
            />
            {employee.phoneNumber}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onDeleteEmployee(employee.employeeId)}
        >
          delete
        </button>
        <button
          type="button"
          onClick={() => onEditEmployee(employee.employeeId)}
        >
          edit
        </button>
      </div>
    </>
  );
}
