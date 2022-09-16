import { configureStore } from '@reduxjs/toolkit';
import EmployeeReducer from '../reducers/reducers';


	export default configureStore({
	  reducer: {
		employees: EmployeeReducer,
	  },
	});