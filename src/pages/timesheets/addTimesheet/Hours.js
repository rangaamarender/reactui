import React from 'react'
import Widget from '../../../components/reusable/Widget'
import { Button } from 'primereact/button'

function Hours({onNext, onPrevious}) {
  return (
    <div>
      <h2>Hours</h2>
      <hr/>
      <div className= " row mb-2">
              <div className='col' ><Widget title="Total Days" value={"18"} graphData="" /></div>
              <div className='col'><Widget title="Total RT" value={89} graphData="" /></div>
              <div className='col'><Widget title="Total OT" value={19} graphData="" /></div>
              <div className='col'><Widget title="Total PV" value={9} graphData="" /></div>
              <div className='col'><Widget title="Total UV" value={10} graphData="" /></div>
              <div className='col'><Widget title="Total Hours" value={127} graphData="" /></div>
            </div>
            <div className='p-mt-4 form-btns' >
                    <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("timesheet")} />
                    <Button label='Submit' className=' company-primary-btn' type='submit' onClick={() => onPrevious("expenses")} />
                </div>
    </div>
  )
}

export default Hours