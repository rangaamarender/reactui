import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from "axios";
// import { InputText } from 'primereact/inputtext';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import ReusableInputField from '../../../components/ReusableInputField';
import RequiredLabel from '../../../components/RequiredLabel';
import { InputText } from 'primereact/inputtext';
import AddSidebarRight from '../../../components/reusable/AddSidebarRight';


const validationSchema = Yup.object().shape({
  client: Yup.string().required('Client is required'),
  addressLine1: Yup.string().required('Address is required'),
  addressLine2: Yup.string(),
  // country: Yup.string().required('Country is required'),
  // city: Yup.string().required('City is required'),
  // state: Yup.string().required('State is required'),
  // zipcode: Yup.string().required('Zipcode is required')
});

function ClientDetails({ onPrevious, onNext }) {
   const[options,setOptions] = useState()

  const formik = useFormik({
    initialValues: {
      client: "",
      addressLine1: '',
      addressLine2: '',
      country: '',
      city: '',
      state: '',
      zipcode: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext(1, values);
      console.log("client Details", values)
    }
  });

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

  return (
    <>

      <form onSubmit={formik.handleSubmit}>
        <h5>Client</h5>
        <div className='flex flex-wrap gap-3 p-fluid'>
          <div className="g-2 mt-3">
          <RequiredLabel label="Client" required />
            <Dropdown
              name="client"
              value={formik.values.client}
              options={options}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Select a Client"
              className={formik.errors.client && formik.touched.client ? 'p-invalid' : ''}
            />
            {formik.errors.client && formik.touched.client && (
              <small className="p-error">{formik.errors.client}</small>
            )}
            <AddSidebarRight sidebarToBeRender={"addCompany"} />
          </div>
          <h6 className='mt-4' >Contract Location</h6>
          <div className='mt-2'>
            <ReusableInputField label="Address line 1" required name="addressLine1"
              value={formik.values.addressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Address line 1"
              className={formik.errors.addressLine1 && formik.touched.addressLine1 ? 'p-invalid' : ''}
            />
            {formik.errors.addressLine1 && formik.touched.addressLine1 && (
              <small className="p-error">{formik.errors.addressLine1}</small>
            )}
          </div>
          <div className='mt-3'>
            <ReusableInputField label="Address line 2" required name="addressLine1"
              value={formik.values.addressLine2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Address line 2"
              className={formik.errors.addressLine2 && formik.touched.addressLine2 ? 'p-invalid' : ''}
            />
            {formik.errors.addressLine2 && formik.touched.addressLine2 && (
              <small className="p-error">{formik.errors.addressLine2}</small>
            )}
          </div>
          <div className=' mt-2'>
            <div className='row mb-2'>
              <div className="flex-auto col-md-3">
                <RequiredLabel label="Country" required />
                <Dropdown
                  id="country"
                  name="country"
                  value={formik.values.country}
                  options={options}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.country && formik.touched.country ? 'p-invalid' : ''
                  }
                />
                {formik.errors.country && formik.touched.country && (
                  <small className="p-error">{formik.errors.country}</small>
                )}
              </div>
              <div className="flex-auto col-md-3">
                <RequiredLabel label="State" required />
                <Dropdown
                  id="state"
                  name="state"
                  value={formik.values.state}
                  options={[
                    { label: 'State 1', value: 'state1' },
                    { label: 'State 2', value: 'State2' },
                    { label: 'State 3', value: 'State3' },
                  ]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.state && formik.touched.state ? 'p-invalid' : ''
                  }
                />
                {formik.errors.state && formik.touched.state && (
                  <small className="p-error">{formik.errors.state}</small>
                )}
              </div>
              <div className="flex-auto col-md-3">
                {/* <Form.Group> 
        <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
            />
            </Form.Group> */}
                <RequiredLabel label="City" required />
                <Dropdown
                  id="city"
                  name="city"
                  value={formik.values.city}
                  options={[
                    { label: 'City 1', value: 'city1' },
                    { label: 'City 2', value: 'city2' },
                    { label: 'City 3', value: 'city3' },
                  ]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.city && formik.touched.city ? 'p-invalid' : ''
                  }
                  placeholder="Select City"
                />
                {formik.errors.city && formik.touched.city && (
                  <small className="p-error">{formik.errors.city}</small>
                )}
              </div>
              <div className="flex-auto col-md-3">
                <RequiredLabel label="Zipcode" required />
                <InputText name="zipcode" type="text"
                  value={formik.values.zipcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Zipcode"
                  className={formik.errors.zipcode && formik.touched.zipcode ? 'p-invalid' : ''}
                />
                {formik.errors.zipcode && formik.touched.zipcode && (
                  <small className="p-error">{formik.errors.zipcode}</small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='p-mt-4 form-btns' >
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious(1)} />
          <Button label='Next' className=' company-primary-btn' type='submit' />
        </div>

      </form>


    </>
  )
}

export default ClientDetails
