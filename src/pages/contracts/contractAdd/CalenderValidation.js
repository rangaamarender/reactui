import React from 'react';
import { useFormik } from 'formik';

function MyComponent() {
  const validate = (values) => {
    const errors = {};

    if (!values.inputDate) {
      errors.inputDate = 'Please enter a date.';
    } else {
      const isValidDate = formatDate(values.inputDate) !== null;
      if (!isValidDate) {
        errors.inputDate = 'Please enter a valid date in the format dd/mm/yyyy.';
      }
    }

    return errors;
  };

  const handleSubmit = (values) => {
    const formattedDate = formatDate(values.inputDate);
    // Do something with the formattedDate
  };

  const formatDate = (input) => {
    const dateParts = input.split('/');
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];

    if (month && day && year) {
      const formattedDay = day.padStart(2, '0');
      const formattedMonth = month.padStart(2, '0');
      const formattedYear = year.padStart(4, '0');
      return `${formattedDay}/${formattedMonth}/${formattedYear}`;
    }

    return null;
  };

  const formik = useFormik({
    initialValues: {
      inputDate: '',
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="date"
          id="inputDate"
          name="inputDate"
          value={formik.values.inputDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.inputDate && formik.touched.inputDate && (
          <div>{formik.errors.inputDate}</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyComponent;
