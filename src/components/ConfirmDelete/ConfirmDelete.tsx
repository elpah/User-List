import React from "react";
import Button from "../Button/Button";
import styles from  "./confirmDelete.module.css";
import { Employee } from "../../employeeType";
interface Props {
  employee: Employee;
  confirmDelete: (employeeId: string | undefined) => void;
  cancelDelete: () => void;
}
export default function ConfirmDelete({
  confirmDelete,
  cancelDelete,
  employee,
}: Props) {
  return (
    <div className={styles.delete__modal}>
      <div className={styles.delete__box}>
        <h1 className={styles.delete__header}>Confirm Delete!</h1>
        <p className={styles.delete__paragraph}>Do you want to delete employee?</p>
        <div className={styles.button__div_container}>
          <button
            className={`${styles.button__div} ${styles.button__div_confirm}`}
            onClick={() => confirmDelete(employee.employeeId)}
            >confirm</button>
          <button
            className={`${styles.button__div} ${styles.button__div_cancel}`}
            onClick={cancelDelete}
          >cancel</button>
        </div>
      </div>
    </div>
  );
}
