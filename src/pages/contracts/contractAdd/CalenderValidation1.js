import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';

function CalenderValidation1({ onNext }) {
  const formik = useFormik({
    initialValues: {
      contractStartDate: null,
    },
    validate: validateForm,

    onSubmit: (values) => {
      // Handle form submission with selected values
      console.log(values);
      onNext(0, values);
    },
  });


  function validateForm(values) {
    let errors = {};
    if (!values.contractStartDate) {
      errors.contractStartDate = 'Contract Start Date is required format ex: MM/DD/YYYY';
    }
    return errors;
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='col-md-6'>
        <label htmlFor='startDate'>Contract Start Date <span className='text-danger'> *</span></label>
        <Calendar
          id='startDate'
          name="contractStartDate"
          value={formik.values.contractStartDate}
          onChange={(e) => formik.setFieldValue('contractStartDate', e.value)}
          onBlur={formik.handleBlur}
          dateFormat="mm/dd/yy"
          placeholder="MM/DD/YYYY"
          showIcon
          className={`date-pick-icon ${formik.errors.contractStartDate && formik.touched.contractStartDate ? 'p-invalid' : ''}`}
        />
        {formik.errors.contractStartDate && formik.touched.contractStartDate && (
          <small className="p-error">{formik.errors.contractStartDate}</small>
        )}
      </div>
      <Button label="Next" className=' company-primary-btn' type="submit" />
    </form>

  );
}

export default CalenderValidation1;



