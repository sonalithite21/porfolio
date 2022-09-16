import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {add_employee } from "../actions/actions";

export default function AddEmployee() {
  const employees = useSelector((state) => state.employees);
  const nameRef=useRef();
  const salaryRef=useRef();
  const dispatch = useDispatch();
  const addEmp= () => {
    const name= nameRef.current.value;
    const salary = salaryRef.current.value;
    console.log('nameRef', nameRef);
    console.log('salaryRef', salaryRef);
    
    const actionObj = add_employee(employees.length+1,name, salary);

    dispatch(actionObj);
    //setEmployee({'name':name, 'salary':salary});
  };

  //console.log('employee', employee);

  return (

    <div className='container'>
     <div>AddEmployee</div>
     <label for="name">Name</label>
     <input  id="name" name='Name' ref={nameRef}/><br/><br/>
     <label for="salary">salary</label>
     <input  id="salary"name='salary' ref={salaryRef}/><br/><br/>
      <button className='btn btn-primary' onClick={addEmp}> AddEmployee</button>
    </div>

  )
}
