	export function add_employee(id, name,salary) {
	  return {
		type: "ADD_EMPLOYEE",
        payload:{id, name,salary}
	  };
	}
	export function delete_employee(id) {

		console.log("In delete action")
	  return {
		type: "DELETE_EMPLOYEE",
		payload:{id}
	  };
	}
	
	