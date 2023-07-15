import React, { useEffect, useState } from 'react'
import RequiredLabel from '../../RequiredLabel'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import ReusableInputField from '../../ReusableInputField'
import { ErrorMessage, useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { Button } from 'primereact/button'
import plusIcon from './../../../assets/plusIcon.svg'

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Client is required'),
  // phone: Yup.string().required('Address is required'),
  // fax: Yup.string()
  //   .matches(/^\d{10}$/, 'Invalid fax number')
  //   .required('Fax is required'),
  // webAddress: Yup.string()
  //   .matches(
  //     /^(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/,
  //     'Invalid web address'
  //   )
  //   .required('Web address is required'),
  // taxClassification: Yup.string().required('Tax Classification is required'),
  // stateIfIncorpration: Yup.string().required('State is required'),
  // ein: Yup.string()
  //   .matches(/^\d{2}-\d{7}$/, 'Invalid EIN format (e.g., XX-XXXXXXX)')
  //   .required('EIN is required'),
});

function CompanyProfile({ onNext, view }) {
  const [options, setOptions] = useState()
  useEffect(() => {
    // Fetch options from API using axios
    axios.get('http://localhost:4000/dropdownOptions')
      .then((response) => {
        const getData = response.data.map((user) => ({
          value: user.value,
          label: user.lable,
        }));
        setOptions(getData);
      })
      .catch((error) => {
        console.log('Error fetching options:', error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      companyName: "",
      phone: '',
      fax: '',
      webAddress: '',
      taxClassification: '',
      stateIfIncorpration: '',
      ein: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext("contactDetails", values);
      console.log("Company Profile", values)
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
       <div className="text-center">
            <h4>Client Profile</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
      <div className=' flex flex-wrap gap-3 p-fluid'>
        <div className="g-2 mb-3">
          {/* <RequiredLabel label="Company Name" required />
          <Dropdown
            name="companyName"
            value={formik.values.companyName}
            options={options}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.companyName && formik.touched.companyName ? 'p-invalid' : ''}
          /> */}
          <ReusableInputField label="Company Name" required
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.companyName && formik.touched.companyName ? 'p-invalid' : ''}
            />
          {formik.errors.companyName && formik.touched.companyName && (
            <small className="p-error">{formik.errors.companyName}</small>
          )}
        </div>
        <div className='row mb-3'>
          <div className="flex-auto col-md-6">
            <RequiredLabel label="Phone" />
            <InputMask
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mask='(999) 999-9999'
              className={formik.errors.phone && formik.touched.phone ? 'p-invalid' : ''}
            />
            {formik.errors.phone && formik.touched.phone && (
              <small className="p-error">{formik.errors.phone}</small>
            )}
          </div>
          <div className="flex-auto col-md-6">
            <ReusableInputField label="Fax"
              name="fax"
              value={formik.values.fax}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.fax && formik.touched.fax ? 'p-invalid' : ''}
            />
            {formik.errors.fax && formik.touched.fax && (
              <small className="p-error">{formik.errors.fax}</small>
            )}
            {/* <ErrorMessage name="fax" component="div" /> */}
          </div>
        </div>

        <div className='row mb-3'>
          <div className="flex-auto col-md-6">
            <RequiredLabel label="Tax Classification" required />
            <Dropdown
              name="taxClassification"
              value={formik.values.taxClassification}
              options={options}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.taxClassification && formik.touched.taxClassification ? 'p-invalid' : ''}
            />
            {formik.errors.taxClassification && formik.touched.taxClassification && (
              <small className="p-error">{formik.errors.taxClassification}</small>
            )}
          </div>
          <div className="flex-auto col-md-3">
            <ReusableInputField label="State if Incorparation"
              name="stateIfIncorpration"
              value={formik.values.stateIfIncorpration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.stateIfIncorpration && formik.touched.stateIfIncorpration ? 'p-invalid' : ''}
            />
            {formik.errors.stateIfIncorpration && formik.touched.stateIfIncorpration && (
              <small className="p-error">{formik.errors.stateIfIncorpration}</small>
            )}
          </div>
          <div className="flex-auto col-md-3">
            <ReusableInputField label="EIN"
              required
              name="ein"
              value={formik.values.ein}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.ein && formik.touched.ein ? 'p-invalid' : ''}
            />
            {formik.errors.ein && formik.touched.ein && (
              <small className="p-error">{formik.errors.ein}</small>
            )}
          </div>
        </div>

        <div className='row mb-3'>
          <div className="flex-auto col-md-11">
            <ReusableInputField label="Web Address(for whitelisting domine)" required
              name="webAddress"
              value={formik.values.webAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.webAddress && formik.touched.webAddress ? 'p-invalid' : ''}
            />

            {formik.errors.webAddress && formik.touched.webAddress && (
              <small className="p-error">{formik.errors.webAddress}</small>
            )}
          </div>
          <div className="flex-auto col-md-1">
            <img src={plusIcon} className='pt-4' />
          </div>
        </div>

      </div>
      <div className='p-mt-4 form-btns' >
        <Button label='Next' className=' company-primary-btn' type='submit' />
      </div>
    </form>
  )
}

export default CompanyProfile