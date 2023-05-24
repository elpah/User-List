import React, { useState } from "react";
import { Employee } from "../employeeType";
import "./employeeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ConfirmDelete from "./ConfirmDelete";

interface Props {
  employee: Employee;
  onDeleteEmployee: (employeeId: string | undefined) => void;
  onEditEmployee: (employeeId: string | undefined) => void;
}
export default function EmployeeCard({
  employee,
  onDeleteEmployee,
  onEditEmployee,
}: Props) {
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);

  return (
    <>
      <div className="employee__card">
        <h2 className="employee__initials">
          {`${employee.employeeFirstName
            .charAt(0)
            .toUpperCase()}.${employee.employeeLastName
            .charAt(0)
            .toUpperCase()}`}
        </h2>
        <div className="img__name-number">
          <img
            className="employee__img"
            src={employee.employeeImg}
            alt="employee Profile Img"
          />
          <div className="name__number">
            <p className="employee__fullname">{`${employee.employeeFirstName.toUpperCase()} ${employee.employeeLastName.toUpperCase()}`}</p>
            <p className="employee__number">{employee.employeeNumber}</p>
          </div>
        </div>
        <div className="email__phone">
          <p className="employee__email">
            <FontAwesomeIcon
              className="email-icon"
              style={{ color: "#4e4a4a", marginRight: 10 }}
              icon={faEnvelope}
            />
            <a href={`mailto:${employee.email}`}>
              {employee.email.toLowerCase()}
            </a>
          </p>
          <p className="employee__phone">
            <FontAwesomeIcon
              className="phone-icon"
              style={{ color: "#4e4a4a", marginRight: 10 }}
              icon={faPhone}
            />
            <a href={`tel:${employee.phoneNumber}`}>{employee.phoneNumber}</a>
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setDeleteConfirm(true);
          }}
        >
          delete
        </button>
        <button
          type="button"
          onClick={() => onEditEmployee(employee.employeeId)}
        >
          edit
        </button>
      </div>
      {deleteConfirm && (
        <ConfirmDelete
          confirmDelete={() => onDeleteEmployee(employee.employeeId)}
          cancelDelete={() => setDeleteConfirm(false)}
          employee={employee}
        />
      )}
    </>
  );
}
