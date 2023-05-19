import React, { FormEvent, ChangeEvent } from "react";
import "./editForm.css";

type Props = {
  onEditSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  newEmployeeNumber: string;
  newInitials?: string;
  newEmployeeImg?: string;
  newEmployeeFirstName: string;
  newEmployeeLastName: string;
  newEmployeeEmail: string;
  newPhoneNumber: string;
};

function EditForm({
  onEditSubmit,
  onInputChange,
  newEmployeeNumber,
  newEmployeeFirstName,
  newEmployeeLastName,
  newEmployeeEmail,
  newPhoneNumber,
}: Props) {
  return (
    <>
      <div className="editEmployeeModal">
        <form className="editEmployeeForm" onSubmit={onEditSubmit}>
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
          <button className="Form__button" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default EditForm;
