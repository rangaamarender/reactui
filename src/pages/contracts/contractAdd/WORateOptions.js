import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react'
import RequiredLabel from '../../../components/RequiredLabel';
import axios from 'axios';

function WORateOptions({ onNext, setProgress, onPrevious }) {
  const [dropdownoptions, setDropdownOptions] = useState();

  const formik = useFormik({
    initialValues: {
      resourceType: "",
      selectRate: ""
    },
    validate: validateForm,

    onSubmit: (values) => {
      console.log(values);
      onNext("woRate", values);
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


  function validateForm(values) {
    let errors = {};
    if (!values.resourceType) {
      errors.resourceType = 'Resource Type is required';
    }

    if (!values.selectRate && values.resourceType === 'multiple') {
      errors.selectRate = 'Select one option';
    }

    return errors;
  }

  const handleResourceTypeChange = async (e) => {
    await formik.handleChange(e);


    if (e.target.value === "single") {
      formik.setFieldValue('selectRate', "");
    }
  };


  const selectedOption = localStorage.getItem("selectedOption")

  const handlePrevious = () => {
    const selectedEndClientOption = localStorage.getItem("selectedEndClientOption");
    if (selectedEndClientOption === "yes" && selectedOption === "newContract") {
      onPrevious("addMSA");
    } else if (selectedEndClientOption === "no"  && selectedOption === "newContract") {
      onPrevious("endClient");
    } else if (selectedOption === "existing") {
      onPrevious("step1");
      setProgress(10)
      
    }
  }


  // const handlePrevious = () => {



  //   if (currentStep === "addMSA") {
  //     onPrevious("addMSA");
  //   } else if (currentStep === "endClient") {
  //     onPrevious("endClient");
  //   } else {
  //     onPrevious("step1");
  //   }
  // }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {selectedOption === "existing" && <> <div className="text-center">
          <h4>MSA</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
          <div className="flex gap-3 p-fluid">
            <div className="flex-auto  mb-4">
              <RequiredLabel label="MSA" required />
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
            </div>
          </div>
        </>
        }

        <div className="radio-group text-center mt-3">
          <h4>WO Rate (Bill Rate)</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <div className="radio-item mt-5">
            <label className="radioButtonLable p-2">
              <span style={{ float: 'left' }}>Single Resource</span>
              <RadioButton style={{ float: "right" }}
                name="resourceType"
                value="single"
                onChange={handleResourceTypeChange}
                checked={formik.values.resourceType === 'single'}
              />
            </label>
          </div>
          <div className='radio-item  mt-3'>
            <label className='radioButtonLable  p-2'>
              <span style={{ float: "left" }}>Multiple Resource</span>
              <RadioButton style={{ float: "right" }}
                name="resourceType"
                value="multiple"
                onChange={handleResourceTypeChange}
                checked={formik.values.resourceType === 'multiple'} />
            </label>
          </div>
          {formik.errors.resourceType && formik.touched.resourceType && (
            <small className="error">{formik.errors.resourceType}</small>
          )}
        </div>

        {formik.values.resourceType === 'multiple' &&

          <div className="radio-group text-center mt-3">
            <h4>Select Rates</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className="radio-item mt-5">
              <label className="radioButtonLable p-2">
                <span style={{ float: 'left' }}>Individual Rate</span>
                <RadioButton style={{ float: "right" }}
                  name="selectRate"
                  value="individualRate"
                  onChange={formik.handleChange}
                  checked={formik.values.selectRate === 'individualRate'}
                />
              </label>
            </div>
            <div className='radio-item  mt-3'>
              <label className='radioButtonLable  p-2'>
                <span style={{ float: "left" }}>Blended Rate</span>
                <RadioButton style={{ float: "right" }}
                  name="selectRate"
                  value="blendedRate"
                  onChange={formik.handleChange}
                  checked={formik.values.selectRate === 'blendedRate'} />
              </label>
            </div>
            {formik.errors.selectRate && formik.touched.selectRate && (
              <small className="error">{formik.errors.selectRate}</small>
            )}
          </div>


        }

        <div className="p-mt-4 form-btns">
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => handlePrevious()} />
          <Button
            label="Next"
            className="company-primary-btn"
            //   disabled={!formik.isValid || formik.isSubmitting}
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}

export default WORateOptions