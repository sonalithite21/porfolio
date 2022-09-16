const initialState = [
  { id: 1, name: "aaaaa", salary: 300000 },
  { id: 2, name: "bbbbb", salary: 40000 },
];
function EmployeeReducer(state = initialState, action) {
	debugger;
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.payload];
    case "DELETE_EMPLOYEE":
      return state.filter((employee) => employee.id !== action.payload.id);
    default:
      return state;
  }
}

export default EmployeeReducer;
