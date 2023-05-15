import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import "./employeeForm.css";
import { v4 as uuidv4 } from "uuid";
type Props = {
  onAddEmployee: (data: Employee) => void;
};

type Employee = {
  employeeId?: string;
  employeeNumber: string;
  employeeImg?: string;
  employeeFirstName: string;
  employeeLastName: string;
  email: string;
  phoneNumber: string;
};

function AddEmployeeForm({ onAddEmployee }: Props) {
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
  const [buttonName, setButtonName] = useState<string>("Add New Employee");
  const [employeeNumber, setEmployeeNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    //resetForm();
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
        <button
          className="AddEmployee"
          onClick={() =>
            !formIsVisible ? setFormIsVisible(true) : setFormIsVisible(false)
          }
        >
          Add New Employee
        </button>
      )}
      {formIsVisible && (
        <div className="addEmployeeModal">
          <form className="addEmployeeForm" onSubmit={handleSubmit}>
            <button
              className="CloseButton"
              onClick={() => setFormIsVisible(false)}
            >
              X
            </button>
            <h3 className="form__header">Add New Employee</h3>
            <div className="input__div">
              <label className="input__label">Employee Number:</label>
              <input
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
                className="input__field"
                type="email"
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                required
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
              />
            </div>
            <div className="input__div">
              <label className="input__label">Phone Number:</label>
              <input
                className="input__field"
                type="text"
                value={phoneNumber}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(event.target.value)
                }
              />
            </div>
            <button className="Form__button" type="submit">
              Add Employee
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddEmployeeForm;
