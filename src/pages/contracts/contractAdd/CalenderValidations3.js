import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
// import { mask } from './UtilityComponent'; 
import { mask } from '../../../utility/UtilityComponent';

function CalenderValidation3({ onNext }) {
  const formik = useFormik({
    initialValues: {
      contractStartDate: '',
    },
    validate: validateForm,
    onSubmit: (values) => {
      // Check if the entered date is valid before proceeding
      if (isValidDate(values.contractStartDate)) {
        console.log(values);
        onNext(0,values.contractStartDate);
      }
    },
  });

  function validateForm(values) {
    let errors = {};
    if (!values.contractStartDate) {
      errors.contractStartDate = 'Contract Start Date is required format ex: MM/DD/YYYY';
    } else if (!isValidDate(values.contractStartDate)) {
      errors.contractStartDate = 'Please enter a valid date in the format MM/DD/YYYY';
    }
    return errors;
  }

  function isValidDate(dateString) {
    const dateParts = dateString.split('/');
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    const isValidMonth = month >= 1 && month <= 12;
    const isValidDay = day >= 1 && day <= 31;
    const isValidYear = year >= 1900 && year <= 9999;

    // Check for valid leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    // Validate day for February
    if (month === 2) {
      if (isLeapYear && day > 29) {
        return false;
      } else if (!isLeapYear && day > 28) {
        return false;
      }
    }

    return isValidMonth && isValidDay && isValidYear;
  }

  const handleDateChange = (e) => {
    const { value } = e.target;
    const maskedValue = mask(value, '##/##/####');
    formik.setFieldValue('contractStartDate', maskedValue);
  };


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="startDate">
          Contract Start Date <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          id="startDate"
          name="contractStartDate"
          value={formik.values.contractStartDate}
          onChange={handleDateChange}
          onBlur={formik.handleBlur}
          className={`form-control ${formik.errors.contractStartDate && formik.touched.contractStartDate ? 'is-invalid' : ''}`}
        />
        {formik.errors.contractStartDate && formik.touched.contractStartDate && (
          <small className="invalid-feedback">{formik.errors.contractStartDate}</small>
        )}
      </div>
      <Button label="Next" className="company-primary-btn" type="submit" />
    </form>
  );
}

export default CalenderValidation3;
