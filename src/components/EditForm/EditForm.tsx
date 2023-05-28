import React, { FormEvent, ChangeEvent } from "react";
import "./editForm.css";
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
      employeeImg:
        "https://tse3.mm.bing.net/th?id=OIP.ax-2aejGhCAKkgOxiSAeXAHaHa&pid=Api&P=0",
    });
  }
  return (
    <>
      <div className="edit-employee__modal">
        <form className="edit-employee__form" onSubmit={handleEditSubmit}>
          <Button
            buttonName="X"
            buttonType="button"
            className="CloseButton"
            onClick={handleEditFormVisibility}
          />
          <h3 className="form__header">Edit Employee Data</h3>
          <div className="input__div">
            <label className="input__label">Employee Number:</label>
            <input
              className="input__field"
              type="text"
              value={employeeNumber}
              onChange={onInputChange}
              name="newEmployeeNumber"
            />
          </div>
          <div className="input__div">
            <label className="input__label ">First Name:</label>
            <input
              className="input__field"
              placeholder="FirstName"
              type="text"
              value={employeeFirstName}
              onChange={onInputChange}
              name="newEmployeeFirstName"
            />
          </div>
          <div className="input__div">
            <label className="input__label ">Last Name:</label>
            <input
              placeholder="Last Name"
              className="input__field"
              type="text"
              value={employeeLastName}
              onChange={onInputChange}
              name="newEmployeeLastName"
            />
          </div>
          <div className="input__div">
            <label className="input__label">Email Address:</label>
            <input
              className="input__field"
              type="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              placeholder="email@email.com"
              required
              value={email}
              onChange={onInputChange}
              name="newEmployeeEmail"
            />
          </div>
          <div className="input__div">
            <label className="input__label">Phone Number:</label>
            <input
              placeholder="+000-XXXXXXXXX"
              pattern="^\+[0-9]{2,3}[0-9]{9,10}$"
              className="input__field"
              type="text"
              value={phoneNumber}
              onChange={onInputChange}
              name="newPhoneNumber"
            />
          </div>
          <Button
            buttonType="submit"
            buttonName="Save"
            className="form__button"
          />
        </form>
      </div>
    </>
  );
}

export default EditForm;
