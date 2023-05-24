import React, { FormEvent, ChangeEvent } from "react";
import "./editForm.css";
import Button from "./Button";

type Props = {
  handleEditFormVisibility: () => void;
  onAddNewInformation: (data: any) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  employeeId: any;
  newEmployeeNumber: string;
  newEmployeeFirstName: string;
  newEmployeeLastName: string;
  newEmployeeEmail: string;
  newPhoneNumber: string;
};

function EditForm({
  handleEditFormVisibility,
  onAddNewInformation,
  onInputChange,
  newEmployeeNumber,
  newEmployeeFirstName,
  newEmployeeLastName,
  newEmployeeEmail,
  newPhoneNumber,
  employeeId,
}: Props) {
  function handleEditSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddNewInformation({
      employeeId,
      newEmployeeNumber,
      newEmployeeFirstName,
      newEmployeeLastName,
      newEmployeeEmail,
      newPhoneNumber,
      newEmployeeImg:
        "https://tse3.mm.bing.net/th?id=OIP.ax-2aejGhCAKkgOxiSAeXAHaHa&pid=Api&P=0",
    });
    //resetForm()
  }
  return (
    <>
      <div className="editEmployeeModal">
        <form className="editEmployeeForm" onSubmit={handleEditSubmit}>
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
              value={newEmployeeNumber}
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
              value={newEmployeeFirstName}
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
              value={newEmployeeLastName}
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
              value={newEmployeeEmail}
              onChange={onInputChange}
              name="newEmployeeEmail"
            />
          </div>
          <div className="input__div">
            <label className="input__label">Phone Number:</label>
            <input
              placeholder="phoneNumber"
              className="input__field"
              type="text"
              value={newPhoneNumber}
              onChange={onInputChange}
              name="newPhoneNumber"
            />
          </div>
          <Button
            buttonType="submit"
            buttonName="Save"
            className="Form__button"
          />
        </form>
      </div>
    </>
  );
}

export default EditForm;
