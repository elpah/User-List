import React, { useState } from "react";
import "./App.css";
import EmployeeListContainer from "./components/EmployeeListContainer";
import { Employee } from "./employeeType";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  const [employee, setEmployee] = useState<Employee[]>([]);
  const handleSaveEmployee = (employeeData: Employee) => {
    const employee = employeeData;
    if (employee) {
      setEmployee((prevState) => {
        return [employee, ...prevState];
      });
    }
  };
  return (
    <>
      <AddEmployeeForm onAddEmployee={handleSaveEmployee} />
      <div className="App">
        <EmployeeListContainer
          onEditEmployee={(employeeId) => console.log(employeeId)}
          employees={employee}
          onDeleteEmployee={(employeeId) => console.log(employeeId)}
        />
      </div>
    </>
  );
}

export default App;
