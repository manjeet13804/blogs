import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard';
import Login from './components/Login';
import Create from './components/create';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
         <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={ <Dashboard/>} />
          <Route path='/create' element={ <Create/>} />
        </Routes>
      </BrowserRouter>
    
  </>
  );
}

export default App;
