import React, { useState } from 'react';
import '../styles/Sidebar.css';
import '../styles/Header.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from './header/Header';
import Resources from '../pages/resources/Resources';
import Contracts from '../pages/contracts/Contracts';
import TimeSheets from '../pages/timesheets/TimeSheets';
import Companies from '../pages/companies/Companies';
import Dashboard from '../pages/dashboard/Dashboard';
import AddressBook from '../pages/addressbook/AddressBook';
import Signup from './loginSignup/Signup';
import Login from './loginSignup/Login';
import ForgotPassword from './loginSignup/ForgotPassword';

function Layout() {
  const [title, setTitle] = useState('');
 
  const isLoggedIn =  !!localStorage.getItem("token");

  console.log(isLoggedIn)
 
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className='company-color-bg'>
      <>
        <Sidebar>
          <Header title={title} />
          <Routes>
            <Route index path="/" element={<Dashboard setTitle={setTitle} />}></Route>
            <Route path="/addressbook" element={<AddressBook setTitle={setTitle} />}></Route>
            <Route path="/resources" element={<Resources setTitle={setTitle} />}></Route>
            <Route path="/contracts" element={<Contracts setTitle={setTitle} />}></Route>
            <Route path="/timesheets" element={<TimeSheets setTitle={setTitle} />}></Route>
            <Route path="/companies" element={<Companies setTitle={setTitle} />}></Route>
            {/* <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route> */}
          </Routes>
        </Sidebar>
      </>
    </div>
  )
}
export default Layout