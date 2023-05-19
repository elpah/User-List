import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import "./App.css";
import EmployeeListContainer from "./components/EmployeeListContainer";
import { Employee } from "./employeeType";
import AddEmployeeForm from "./components/EmployeeForm";
import DeleteSuccess from "./components/DeleteSuccess";
import EditForm from "./components/EditForm";

function App() {
  const [employee, setEmployee] = useState<Employee[]>([]);
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const [newOldId, setnewOldId] = useState<string | undefined>("");

  const [newEmployeeNumber, setNewEmployeeNumber] = useState<string>("");
  const [newEmployeeFirstName, setNewEmployeeFirstName] = useState<string>("");
  const [newEmployeeLastName, setNewEmployeeLastName] = useState<string>("");
  const [newEmployeeEmail, setNewEmployeeEmail] = useState<string>("");
  const [newPhoneNumber, setNewPhoneNumber] = useState<string>("");

  const handleSaveEmployee = (employeeData: Employee) => {
    const employee = employeeData;
    if (employee) {
      setEmployee((prevState) => {
        return [employee, ...prevState];
      });
    }
  };

  function handleDeleteEmployee(employeeId: string) {
    setTimeout(() => {
      setEmployee((prevState) =>
        prevState.filter((item) => item.employeeId !== employeeId)
      );
      setDeleteConfirm(true);
    }, 200);
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // name === "newEmployeeNumber"
    //   ? setNewEmployeeNumber(value)
    //   : name === "newEmployeeFirstName"
    //   ? setNewEmployeeFirstName(value)
    //   : name === "newEmployeeLastName"
    //   ? setNewEmployeeLastName(value)
    //   : name === "newEmployeeEmail"
    //   ? setNewEmployeeEmail(value)
    //   : name === "newPhoneNumber"
    //   ? setNewPhoneNumber(value)
    //   : "";
  };

  function handleEditEmployee(employeeId: string) {
    setEditProfile(true);
    let editEmployee = employee.find(
      (specifiEmployee) => specifiEmployee.employeeId === employeeId
    );
    if (editEmployee) {
      setnewOldId(editEmployee.employeeId);
    }
  }
  const handleEditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let editEmployee = employee.find(
      (specifiEmployee) => specifiEmployee.employeeId === newOldId
    );
    if (editEmployee) {
      editEmployee.employeeId = editEmployee.employeeId;
      editEmployee.employeeNumber = newEmployeeNumber;
      editEmployee.employeeFirstName = newEmployeeFirstName;
      editEmployee.employeeLastName = newEmployeeLastName;
      editEmployee.email = newEmployeeEmail;
      editEmployee.phoneNumber = newPhoneNumber;
      setEditProfile(false);
    }
  };
  return (
    <>
      {deleteConfirm && (
        <DeleteSuccess onClick={() => setDeleteConfirm(false)} />
      )}
      {editProfile && (
        <EditForm
          newEmployeeNumber={newEmployeeNumber}
          newEmployeeFirstName={newEmployeeFirstName}
          newEmployeeLastName={newEmployeeLastName}
          newEmployeeEmail={newEmployeeEmail}
          newPhoneNumber={newPhoneNumber}
          onInputChange={handleInputChange}
          onEditSubmit={handleEditSubmit}
        />
      )}
      <AddEmployeeForm onAddEmployee={handleSaveEmployee} />
      <div className="App">
        <EmployeeListContainer
          employees={employee}
          onDeleteEmployee={handleDeleteEmployee}
          onEditEmployee={handleEditEmployee}
        />
      </div>
    </>
  );
}

export default App;
