
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

//  import Header from '../../Header/Header';


function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
        <Outlet></Outlet>
      
    </div>
  );
}

export default App;
