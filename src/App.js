import React from 'react';
import Login from './Components/Signin';
import SignUp from './Components/Client/SignUp';
import ClientIn from './Components/Client/ClientIn';
import Lostpassword from './Components/Client/Lostpassword';
import ManagerIn from './Components/ManagerIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mlogin from './Components/Mlogin';
import EmployeeSignup from './Components/Employee/EmployeeSignup';
import EmployeeIn from './Components/Employee/EmployeeIn'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/ClientIn" element={<ClientIn />} />
        <Route path="/Lostpassword" element={<Lostpassword />} /> 
        <Route path="/ManagerIn" element={<ManagerIn />} /> 
        <Route path="/Mlogin" element={<Mlogin />} /> 
        <Route path="/EmployeeSignup" element={<EmployeeSignup />} />
        <Route path="/EmployeeIn" element={<EmployeeIn />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
