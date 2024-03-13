import React, { FormEvent, ChangeEvent } from "react";
import styles from "./editForm.module.css";
import Button from "../Button/Button";
import { Employee } from "../../employeeType";

type Props = {
  handleEditFormVisibility: () => void;
  onAddNewInformation: (data: Employee) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  employeeId: any;
  employeeNumber: string;
  employeeFirstName: string;
  employeeLastName: string;
  email: string;
  phoneNumber: string;
};

function EditForm({
  handleEditFormVisibility,
  onAddNewInformation,
  onInputChange,
  employeeNumber,
  employeeFirstName,
  employeeLastName,
  email,
  phoneNumber,
  employeeId,
}: Props) {
  function handleEditSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddNewInformation({
      employeeId,
      employeeNumber,
      employeeFirstName,
      employeeLastName,
      email,
      phoneNumber,
    });
  }
  return (
    <>
      <div className={styles.edit_employee__modal}>
        <form className={styles.edit_employee__form} onSubmit={handleEditSubmit}>
         
          <h3 className={styles.form__header}>Edit Employee Data</h3>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Employee Number:</label>
            <input
              placeholder="Employee Number"
              className={styles.input__field}
              type="text"
              value={employeeNumber}
              onChange={onInputChange}
              name="newEmployeeNumber"
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>First Name:</label>
            <input
              className={styles.input__field}
              placeholder="First Name"
              type="text"
              value={employeeFirstName}
              onChange={onInputChange}
              name="newEmployeeFirstName"
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Last Name:</label>
            <input
              placeholder="Last Name"
              className={styles.input__field}
              type="text"
              value={employeeLastName}
              onChange={onInputChange}
              name="newEmployeeLastName"
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Email Address:</label>
            <input
              className={styles.input__field}
              type="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              placeholder="email@email.com"
              required
              value={email}
              onChange={onInputChange}
              name="newEmployeeEmail"
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Phone Number:</label>
            <input
              placeholder="+000-XXXXXXXXX"
              pattern="^\+[0-9]{2,3}[0-9]{9,10}$"
              className={styles["input__field"]}
              type="text"
              value={phoneNumber}
              onChange={onInputChange}
              name="newPhoneNumber"
            />
          </div>
          <div className={styles.button_container}>
          <Button
            buttonType="submit"
            buttonName="Save"
            className={styles.form__button_submit}
          />
           <Button
            buttonName="Cancel"
            buttonType="button"
            className={styles.form__button_close}
            onClick={handleEditFormVisibility}
          />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
