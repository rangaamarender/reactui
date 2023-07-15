import React, { useState } from "react";
import DateInputField from "./DateInputField";

function MyForm() {
    const [date, setDate] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submit logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <DateInputField
                label="Date of Birth"
                value={date}
                onChange={(value) => setDate(value)}
                name="dob"
                placeholder="dd/mm/yyyy"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;
