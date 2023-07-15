// withLayout.jsx
import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';



const withLayout = (WrappedComponent) => {

  const WithLayout = (props) => {
    return (
        <div className="layout">
        <Sidebar>
           <Header/>
           <WrappedComponent {...props} />
         </Sidebar>
       </div>
     
    );
  };

  return WithLayout;
};

export default withLayout;