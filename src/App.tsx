import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeeListContainer from "./components/EmployeeListContainer";
import { Employee } from "./employeeType";
import AddEmployeeForm from "./components/AddEmployeeForm";
import DeleteSuccess from "./components/DeleteSuccess";

function App() {
  const [employee, setEmployee] = useState<Employee[]>([]);
  // useEffect(() => {
  //   setEmployee(employee);
  // }, [employee]);

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
    }, 500);
  }

  return (
    <>
      <DeleteSuccess />
      <AddEmployeeForm onAddEmployee={handleSaveEmployee} />
      <div className="App">
        <EmployeeListContainer
          onEditEmployee={(employeeId) => console.log(employeeId)}
          employees={employee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </div>
    </>
  );
}

export default App;
