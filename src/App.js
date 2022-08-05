import logo from './logo.svg';
import './App.css';
 import Table from './components/Table/index'
 import SignUp from './components/SignUp/signup';
 import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <div className='container'>
        <Table/>
      </div>
     <SignUp/>
    </div>
  );
}

export default App;
