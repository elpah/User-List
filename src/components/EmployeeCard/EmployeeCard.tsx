import React, { useState } from "react";
import { Employee } from "../../employeeType";
import "./employeeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faEllipsisV,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

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
  const [showCard, setShowCard] = useState<boolean>(false);

  return (
    <>
      <div className="employee__card">
        <div className="initials__div-container">
          <h2 className="employee__initials">
            {`${employee.employeeFirstName
              .charAt(0)
              .toUpperCase()}.${employee.employeeLastName
              .charAt(0)
              .toUpperCase()}`}
          </h2>

          <button
            className="dropdown__icon"
            onClick={() => {
              !showCard ? setShowCard(true) : setShowCard(false);
            }}
          >
            {showCard ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faEllipsisV} />
            )}
          </button>

          {showCard && (
            <div className="dropdown__card">
              <button
                type="button"
                onClick={() => {
                  setShowCard(false);
                  setDeleteConfirm(true);
                }}
              >
                delete
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCard(false);
                  onEditEmployee(employee.employeeId);
                }}
              >
                edit
              </button>
            </div>
          )}
        </div>

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
