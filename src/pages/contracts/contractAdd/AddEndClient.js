import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react';
import RequiredLabel from '../../../components/RequiredLabel';
import axios from 'axios';
import AddClient from './AddClient';
import AddOrganisation from './AddMSA';
import ContractDetails from './ContractDetails';

function AddEndClient({ onNext, onPrevious, setValue, currentStep }) {
  const [dropdownoptions, setDropdownOptions] = useState();
  const [showContractDetails, setShowContractDetails] = useState(false);


  const handleNextClick = (selectedOption) => {
    // setNext(selectedOption);
    // setlocalstorage(flow,selectedOption)
    // getlocalstorage(flow)
    if (selectedOption === "no") {
      onNext("woRateOptions")
    } else {
      onNext("addClient")
    }

    console.log('Selected Option:', selectedOption);

  };

  const formik = useFormik({
    initialValues: {
      selectMSA: '',
      endClientOptions: '',
    },
    validationSchema: Yup.object().shape({
      selectMSA: Yup.string().required('Required'),
      endClientOptions: Yup.string().required('Select one option'),
    }),
    onSubmit: (values) => {
      handleNextClick(values.endClientOptions);
    },
  });

  useEffect(() => {
    // Fetch options from API using axios
    axios
      .get('http://localhost:4000/dropdownOptions')
      .then((response) => {
        const empRole = response.data.map((user) => ({
          value: user.value,
          label: user.lable,
        }));
        setDropdownOptions(empRole);
      })
      .catch((error) => {
        console.log('Error fetching options:', error);
      });
  }, []);

  const handleChange = (e) => {
    formik.handleChange(e)
    setValue(e.target.value);
    localStorage.setItem("selectedEndClientOption", e.target.value)
    console.log(e.target.value);
  }

  const handleAdd =()=>{
    onNext("contractDetails")
  }
  // const handleClickAddMSA = ()=>{
    
  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center">
          <h4>MSA</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div className="flex gap-3 p-fluid">
          <div className="flex-auto  mb-4">
            <RequiredLabel label="Select MSA" required />
            <Dropdown
              name="selectMSA"
              value={formik.values.selectMSA}
              options={dropdownoptions}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="MSA Name"
              className={
                formik.errors.selectMSA && formik.touched.selectMSA
                  ? 'p-invalid'
                  : ''
              }
            />
            {formik.errors.selectMSA && formik.touched.selectMSA && (
              <small className="p-error">{formik.errors.selectMSA}</small>
            )}
            <h6 className='text-end company-primary-text pe-5 mt-2'  onClick={handleAdd}>+ ADD </h6>
          </div>
        </div>
        
        <div className="radio-group text-center mt-3">
          <h4>Do you want to add End Client?</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <div className="radio-item mt-5">
            <label className="radioButtonLable p-2">
              <span className='float-start'>Yes</span>
              <RadioButton
                className='float-end'
                name="endClientOptions"
                value="yes"
                onChange={handleChange}
                checked={formik.values.endClientOptions === 'yes'}
              />
            </label>
          </div>
          <div className="radio-item  mt-3">
            <label className="radioButtonLable  p-2">
              <span className='float-start'>NO</span>
              <RadioButton
                className='float-end'
                name="endClientOptions"
                value="no"
                onChange={handleChange}
                checked={formik.values.endClientOptions === 'no'}
              />
            </label>
          </div>
          {formik.errors.endClientOptions && formik.touched.endClientOptions && (
            <small className="p-error">{formik.errors.endClientOptions}</small>
          )}
        </div>
        <div className="p-mt-4 form-btns">
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("contractDetails")} />
          <Button
            label="Next"
            className="company-primary-btn"
            //   disabled={!formik.isValid || formik.isSubmitting}
            type="submit"
          />
        </div>
      </form>
    </>
  );
}

export default AddEndClient;
