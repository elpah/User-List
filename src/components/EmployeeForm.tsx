import React, { FormEvent, ChangeEvent, useState } from "react";
import "./employeeForm.css";
import { v4 as uuidv4 } from "uuid";
import { Employee } from "../employeeType";
import Button from "./Button";
type Props = {
  onAddEmployee: (data: Employee) => void;
};
function AddEmployeeForm({ onAddEmployee }: Props) {
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
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
      {!formIsVisible && (
        <Button
          onClick={() =>
            !formIsVisible ? setFormIsVisible(true) : setFormIsVisible(false)
          }
          className="addEmployeeButton"
          buttonType="button"
          buttonName="Add New Employee"
        />
      )}
      {formIsVisible && (
        <div className="addEmployeeModal">
          <form className="addEmployeeForm" onSubmit={handleSubmit}>
            <Button
              buttonName="X"
              buttonType="button"
              className="CloseButton"
              onClick={() => setFormIsVisible(false)}
            />
            <h3 className="form__header">Add New Employee</h3>
            <div className="input__div">
              <label className="input__label">Employee Number:</label>
              <input
                placeholder="Employee Number"
                required
                className="input__field"
                type="text"
                value={employeeNumber}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmployeeNumber(event.target.value)
                }
              />
            </div>
            <div className="input__div">
              <label className="input__label ">First Name:</label>
              <input
                placeholder="Enter First Name"
                required
                className="input__field"
                type="text"
                value={firstName}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setFirstName(event.target.value)
                }
              />
            </div>
            <div className="input__div">
              <label className="input__label ">Last Name:</label>
              <input
                required
                placeholder="Enter Last Name"
                className="input__field"
                type="text"
                value={lastName}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setLastName(event.target.value)
                }
              />
            </div>
            <div className="input__div">
              <label className="input__label">Email Address:</label>
              <input
                required
                placeholder="email@email.com"
                className="input__field"
                type="email"
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
              />
            </div>
            <div className="input__div">
              <label className="input__label">Phone Number:</label>
              <input
                required
                className="input__field"
                type="text"
                value={phoneNumber}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(event.target.value)
                }
              />
            </div>
            <Button
              className="Form__button"
              buttonName="Add Employee"
              buttonType="submit"
            />
          </form>
        </div>
      )}
    </>
  );
}

export default AddEmployeeForm;
