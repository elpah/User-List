import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { Employee } from "../../employeeType";
import styles from "./employeeListContainer.module.css";
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
    <div className={styles.employee__list_container}>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr className={styles.table_headers}>
            <th>Employee Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.employeeId}
              employee={employee}
              onDeleteEmployee={onDeleteEmployee}
              onEditEmployee={onEditEmployee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
