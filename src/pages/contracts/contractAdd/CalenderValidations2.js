import React from 'react';
import { InputMask } from 'primereact/inputmask';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';

function CalenderValidation1({ onNext }) {
  const formik = useFormik({
    initialValues: {
      contractStartDate: '',
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
      errors.contractStartDate = 'Contract Start Date is required';
    }

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!dateRegex.test(values.contractStartDate)) {
      errors.contractStartDate = 'Invalid Contract Start Date. Use MM/DD/YYYY format.';
    }

    return errors;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='col-md-6'>
        <label htmlFor='startDate'>Contract Start Date <span className='text-danger'> *</span></label>
        <InputMask
          id='startDate'
          name='contractStartDate'
          mask='99/99/9999'
          value={formik.values.contractStartDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.contractStartDate && formik.touched.contractStartDate ? 'p-invalid' : ''}
        />
        {formik.errors.contractStartDate && formik.touched.contractStartDate && (
          <small className="p-error">{formik.errors.contractStartDate}</small>
        )}
      </div>
      <Button label="Next" className='company-primary-btn' type="submit" />
    </form>
  );
}

export default CalenderValidation1;
