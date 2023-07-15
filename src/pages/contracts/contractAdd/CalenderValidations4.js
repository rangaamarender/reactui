import React, { useState } from 'react';

function DateInput() {

  const [date, setDate] = useState('');
  const [isValidFormat, setIsValidFormat] = useState(true);

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/

    if (pattern.test(inputDate)) {
      setIsValidFormat(true);
      setDate(inputDate);
    } else {
      setIsValidFormat(false);
    }
  };

  return (
    <div>
    <input type="date" value={date} onChange={handleDateChange} />
    <button onClick={() => setIsValidFormat(true)}>Check Date Format</button>
    {!isValidFormat && <p>Please enter a valid date format (YYYY-MM-DD).</p>}
  </div>
  );
}

export default DateInput;
