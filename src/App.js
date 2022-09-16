
import './App.css';
import Employeelist from './components/Employeelist';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <h1 className='text-center bg-primary text-white'> Employee CRUD Using REDUX</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <Employeelist/>
          </div>
          <div className='col-sm-4'>
            <AddEmployee/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
