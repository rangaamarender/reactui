import React from 'react';
import { FcLock } from "react-icons/fc";
import {MdEdit} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {TbLogout} from 'react-icons/tb';

function DropDownHeaderProfile() {
  return (
    <div className='flex flex-col DropDownProfile'>
      <ul className='flex flex-col gap-4'>
        <li> <CgProfile  style={{color:"skyblue"}}/> My Profile</li>
        <li> <MdEdit  style={{color:"purple"}}/> Edit Profile</li>
        <li> <FcLock/> Change Passeord</li>
        <li> <TbLogout style={{color:"orange"}}/> LogOut</li>
      </ul>
    </div>
   
  )
}

export default DropDownHeaderProfile
