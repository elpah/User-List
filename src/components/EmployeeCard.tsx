import React from "react";
import { Employee } from "../employeeType";
import "./employeeCard.css";

interface Props {
  employee: Employee;
  onDeleteEmployee: (employeeId: string) => void;
  onEditEmployee: (employeeId: string) => void;
}

export default function EmployeeCard({
  employee,
  onDeleteEmployee,
  onEditEmployee,
}: Props) {
  return (
    <>
      <div className="employee__card">
        <h1 className="employee__initials">{`${employee.employeeFirstName.charAt(
          0
        )}.${employee.employeeLastName.charAt(0)}`}</h1>
        <img className="employee__img" src={employee.employeeImg} alt="" />
        <p className="employee__fullname">{`${employee.employeeFirstName} ${employee.employeeLastName}`}</p>
        <p className="employee__email">{employee.email}</p>
        <p className="employee__phone">{employee.phoneNumber}</p>
      </div>
    </>
  );
}
