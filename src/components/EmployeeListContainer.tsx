import React from "react";
import EmployeeCard from "./EmployeeCard";
import { Employee } from "../employeeType";
import "./employeeList.css";
interface Props {
  employees: Employee[];
  onDeleteEmployee: (employeeId: string) => void;
  onEditEmployee: (employeeId: string) => void;
}
export default function ({
  employees,
  onDeleteEmployee,
  onEditEmployee,
}: Props) {
  return (
    <div className="employee__list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.employeeId}
          employee={employee}
          onDeleteEmployee={onDeleteEmployee}
          onEditEmployee={onEditEmployee}
        />
      ))}
    </div>
  );
}
