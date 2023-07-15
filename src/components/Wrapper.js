import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';



const Wrapper = ({ children }) => {
  return (
    <div className="layout">
     <Sidebar>
        <Header/>
        {children}
      </Sidebar>
    </div>
  );
};

export default Wrapper;