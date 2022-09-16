import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_EMPLOYEE, delete_employee } from "../actions/actions";

export default function Employeelist() {
  const employees = useSelector((state) => state.employees);

  console.log(employees);
  const dispatch = useDispatch();

  const deleteMyEmp = (id) => {
    console.log("before delete");

    const actionObj = delete_employee(id);

    dispatch(actionObj);
    console.log("ID",id);
    console.log("after delete");
  };
  return (
    <div>
      <h1>Employeelist</h1>
      <table className=" table table-bordered table-striped">
        <thead>
          <tr>
            <th> id</th>
            <th> name</th>
            <th> salary</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, key) => {
            return (
              <tr key={emp.id}>
                <td> {emp.id}</td>
                <td> {emp.name}</td>
                <td> {emp.salary}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteMyEmp(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
