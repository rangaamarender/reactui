import React, { useState } from 'react'
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'

function MultiSelectField(props) {
    const [value, setValue] = useState('')
    const handleOnchange = val => {
        setValue(val)
    }
    const options = [
        { label: 'Document 1', value: 'option_1' },
        { label: 'Document 2', value: 'option_2' },
        { label: 'Document 3', value: 'option_3' },
        { label: 'Document 4', value: 'option_4' },
        { label: 'Document 5', value: 'option_5' },
        { label: 'Document 6', value: 'option_6' },
    ]
    return (
        <>
            <div className=''>
                <MultiSelect
                    className=" l-width-100 l-bg-white"
                    onChange={handleOnchange}
                    options={options}
                />
            </div>
        </>
    )
}

export default MultiSelectField