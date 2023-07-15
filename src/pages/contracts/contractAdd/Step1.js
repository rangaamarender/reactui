import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react';
import ContractDetails from './ContractDetails';
import ContractDetails1 from './ContractDetails1';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import WoRateDetails from './WoRateDetails';


const validationSchema = Yup.object().shape({
  MSAoption: Yup.string().required('Please select an option'),
});

function Step1({ onNext, setValue }) {

  const handleNextClick = (selectedOption) => {
    if (selectedOption === "existing") {
      onNext("woRateOptions")
    } else {
      onNext("contractDetails")

    }
    console.log('Selected Option:', selectedOption);
  };

  const formik = useFormik({
    initialValues: {
      MSAoption: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleNextClick(values.MSAoption);

    },
  });

  // useEffect(() => {
  //   const selectedOption =  localStorage.getItem("selectedOption")
  //   formik.setValues({
  //     ...formik.values,
  //     MSAoption: selectedOption,
  //   });
  
  // }, [])

  const handleOptionChange = (e) => {
    formik.handleChange(e)
    setValue(e.target.value);
    localStorage.setItem("selectedOption", e.target.value)
    console.log(e.target.value);
  }
  // const handleOptionChange = (e) => {
  //   setSelectedOption(e.value);
  // };

  // const handleNextClick =()=>{
  //   setNext(selectedOption)
  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='row mt-2'>
          <div className='text-center'>
            <h4>Do you want to add New contract or WO for existing MSA?</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>

            <div className='radio-group'>
              <div className='radio-item mt-5'>
                <label className='radioButtonLable p-2'>
                  <span className='float-start'> New Contract(MSA)</span>
                  <RadioButton
                    className='float-end'
                    name="MSAoption"
                    value="newContract"
                    onChange={handleOptionChange}
                    checked={formik.values.MSAoption === 'newContract'}
                  />
                </label>
              </div>
              <div className='radio-item  mt-3'>
                <label className='radioButtonLable  p-2'>
                  <span className='float-start'>Add Work order to Existing (MSA)</span>
                  <RadioButton
                    className='float-end'
                    name="MSAoption"
                    value="existing"
                    onChange={handleOptionChange}
                    checked={formik.values.MSAoption === 'existing'} />
                </label>
              </div>
              {formik.errors.MSAoption && formik.touched.MSAoption && (
                <small className="error">{formik.errors.MSAoption}</small>
              )}
            </div>
            <div className="p-mt-4 form-btns">
              <Button label="Next" className=' company-primary-btn'
                disabled={!formik.isValid || formik.isSubmitting}
                type="submit" />
            </div>
          </div>
        </div>
      </form>
      {/* {next === 'newContract' && <ContractDetails />}
      {next === 'existing' && <WoRateDetails />} */}
      {/* {
        next === "newContract" &&
        <div>
           <ContractDetails/> 
        </div>

      }
      {
        next === "existing" &&
        <div>
          wo rate
        </div>} */}

    </>
  );
}

export default Step1;
