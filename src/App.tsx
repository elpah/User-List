import React, { useState, useEffect, useRef, ChangeEvent } from "react";

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
  const [editIndex, setEditIndex] = useState<number>(-1);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("employee", JSON.stringify(employee));
    } else {
      isMounted.current = true;
      const storedEmployeeData = localStorage.getItem("employee");
      if (storedEmployeeData) {
        const parsedEmployeeData: Employee[] = JSON.parse(storedEmployeeData);
        setEmployee(parsedEmployeeData);
      }
    }
  }, [employee]);

  const handleSaveEmployee = (employeeData: Employee) => {
    if (employeeData) {
      setEmployee((prevState) => {
        return [employeeData, ...prevState];
      });
    }
  };

  const handleDeleteEmployee = (employeeId: string) => {
    setTimeout(() => {
      setEmployee((prevState) =>
        prevState.filter((item) => item.employeeId !== employeeId)
      );
      setDeleteConfirm(true);
    }, 200);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "newEmployeeNumber") {
      setNewEmployeeNumber(value);
    } else if (name === "newEmployeeFirstName") {
      setNewEmployeeFirstName(value);
    } else if (name === "newEmployeeLastName") {
      setNewEmployeeLastName(value);
    } else if (name === "newEmployeeEmail") {
      setNewEmployeeEmail(value);
    } else if (name === "newPhoneNumber") {
      setNewPhoneNumber(value);
    }
  };

  const handleEditEmployee = (employeeId: string) => {
    setEditProfile(true);
    const editEmployeeIndex = employee.findIndex(
      (specificEmployee) => specificEmployee.employeeId === employeeId
    );
    if (editEmployeeIndex >= 0) {
      setEditIndex(editEmployeeIndex);
    }
    const editEmployee = employee.find(
      (specificEmployee) => specificEmployee.employeeId === employeeId
    );
    if (editEmployee) {
      setnewOldId(editEmployee.employeeId);
    }
  };
  const handleAddNewInformation = (data: Employee) => {
    data = {
      employeeId: newOldId,
      employeeNumber: newEmployeeNumber,
      employeeFirstName: newEmployeeFirstName,
      employeeLastName: newEmployeeLastName,
      email: newEmployeeEmail,
      phoneNumber: newPhoneNumber,
      employeeImg:
        "https://tse3.mm.bing.net/th?id=OIP.ax-2aejGhCAKkgOxiSAeXAHaHa&pid=Api&P=0",
    };
    setEmployee((prevState) => {
      const updatedEmployee = [...prevState];
      updatedEmployee[editIndex] = data;
      return updatedEmployee;
    });
    setEditProfile(false);
  };
  return (
    <>
      {deleteConfirm && (
        <DeleteSuccess onClick={() => setDeleteConfirm(false)} />
      )}
      {editProfile && (
        <EditForm
          employeeId={newOldId}
          newEmployeeNumber={newEmployeeNumber}
          newEmployeeFirstName={newEmployeeFirstName}
          newEmployeeLastName={newEmployeeLastName}
          newEmployeeEmail={newEmployeeEmail}
          newPhoneNumber={newPhoneNumber}
          onInputChange={handleInputChange}
          onAddNewInformation={handleAddNewInformation}
          handleEditFormVisibility={() => setEditProfile(false)}
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
