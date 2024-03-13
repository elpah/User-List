import React, { FormEvent, ChangeEvent, useState } from "react";
import styles from "./employeeForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { Employee } from "../../employeeType";
import Button from "../Button/Button";
type Props = {
  onAddEmployee: (data: Employee) => void;
  handleFormClose: () => void;
};
function AddEmployeeForm({ onAddEmployee, handleFormClose }: Props) {
  const [employeeNumber, setEmployeeNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddEmployee({
      employeeId: uuidv4(),
      employeeImg:
        "https://tse3.mm.bing.net/th?id=OIP.ax-2aejGhCAKkgOxiSAeXAHaHa&pid=Api&P=0",
      employeeNumber: employeeNumber,
      employeeFirstName: firstName,
      employeeLastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
    resetForm();
  };

  function resetForm() {
    setEmployeeNumber("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  }

  return (
    <>
      <div className={styles.add_employee__modal}>
        <form className={styles.add_employee__form} onSubmit={handleSubmit}>
        
          <h3 className={styles.add_employee_form_header}>Add New Employee</h3>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Employee Number:</label>
            <input
              placeholder="Employee Number"
              required
              className={styles.input__field}
              type="text"
              value={employeeNumber}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployeeNumber(event.target.value)
              }
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>First Name:</label>
            <input
              placeholder="Employee First Name"
              required
              className={styles.input__field}
              type="text"
              value={firstName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFirstName(event.target.value)
              }
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Last Name:</label>
            <input
              required
              placeholder="Employee Last Name"
              className={styles.input__field}
              type="text"
              value={lastName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLastName(event.target.value)
              }
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Email Address:</label>
            <input
              required
              placeholder="email@email.com"
              className={styles.input__field}
              type="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className={styles.input__div}>
            <label className={styles.input__label}>Phone Number:</label>
            <input
              required
              className={styles.input__field}
              pattern="^\+[0-9]{2,3}[0-9]{9,10}$"
              type="text"
              placeholder="+233XXXXXXXXX"
              value={phoneNumber}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPhoneNumber(event.target.value)
              }
            />
          </div>
          <div className={styles.button_container}>
          <button             onClick={handleFormClose}
 className={styles.form__button_close}>Close</button>
          <button className={styles.form__button_submit} type="submit">Submit</button>
          </div>
        
        </form>
      </div>
    </>
  );
}

export default AddEmployeeForm;
