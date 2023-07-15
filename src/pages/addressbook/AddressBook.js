import React from 'react'
import CalenderValidation1 from '../contracts/contractAdd/CalenderValidation1'
import CalenderValidation3 from '../contracts/contractAdd/CalenderValidations3'
import CalenderValidations4 from '../contracts/contractAdd/CalenderValidations4'
import { useEffect } from 'react'

function AddressBook({setTitle}) {

  useEffect(()=>{
    setTitle("AddressBook")
  },[])

  return (
    <div>
<CalenderValidation1/>

<CalenderValidation3/>

<CalenderValidations4/>

    </div>
  )
}

export default AddressBook