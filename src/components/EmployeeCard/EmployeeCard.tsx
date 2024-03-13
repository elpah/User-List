import React, { useState } from "react";
import { Employee } from "../../employeeType";
import styles from "./employeeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

interface Props {
  employee: Employee;
  onDeleteEmployee: (employeeId: string | undefined) => void;
  onEditEmployee: (employeeId: string | undefined) => void;
}
export default function EmployeeCard({
  employee,
  onDeleteEmployee,
  onEditEmployee,
}: Props) {
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);

  return (
    <>
      <tr className={styles.data_row}>
        <td className={styles.data}>{employee.employeeNumber}</td>
        <td className={styles.data}>{`${employee.employeeFirstName} ${employee.employeeLastName}`}</td>
        <td className={styles.data}>{employee.email.toLowerCase()}</td>
        <td className={styles.data}>{employee.phoneNumber}</td>
        <td>
          <button className={styles.edit_button}
            type="button"
            onClick={() => {
              setShowCard(false);
              onEditEmployee(employee.employeeId);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
           className={styles.delete_button}
            type="button"
            onClick={() => {
              setShowCard(false);
              setDeleteConfirm(true);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
      {deleteConfirm && (
        <ConfirmDelete
          confirmDelete={() => onDeleteEmployee(employee.employeeId)}
          cancelDelete={() => setDeleteConfirm(false)}
          employee={employee}
        />
      )}
    </>
  );
}
