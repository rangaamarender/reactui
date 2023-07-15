import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

function DatePickerField() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </>
    );
};
export default DatePickerField