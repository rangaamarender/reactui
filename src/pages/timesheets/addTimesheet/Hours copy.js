import React from 'react'
import Widget from '../../../components/reusable/Widget'

function Hours() {
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

    </div>
  )
}

export default Hours