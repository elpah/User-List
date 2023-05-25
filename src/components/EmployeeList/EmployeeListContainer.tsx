import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../employeeType";
import "./employeeList.css";
interface Props {
  employees: Employee[];
  onDeleteEmployee: (employeeId: string | undefined) => void;
  onEditEmployee: (employeeId: string | undefined) => void;
}
export default function EmployeeListContainer({
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
