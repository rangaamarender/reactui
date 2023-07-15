import { Col, Container, Row, Form } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RequiredLabel from '../../../components/RequiredLabel';
import AddSidebarRight from '../../../components/reusable/AddSidebarRight';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';
import axios from "axios";
// import { InputText } from 'primereact/inputtext';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import ReusableInputField from '../../../components/ReusableInputField';

const validationSchema = Yup.object().shape({
  resource: Yup.string().required('Resource is required'),
  // role: Yup.string().required('Role is required'),
  // workEmail: Yup.string().email('Invalid email').required('Email is required'),
  // workPhone: Yup.string().required('Phone Number is required'),
});

function ResourceDetails({ onPrevious, onNext }) {
  const [options, setOptions] = useState();

  useEffect(() => {
    // Fetch options from API using axios
    axios.get('http://localhost:4000/dropdownOptions')
      .then((response) => {
        const empRole = response.data.map((user) => ({
          value: user.value,
          label: user.lable,
        }));
        setOptions(empRole);
      })
      .catch((error) => {
        console.log('Error fetching options:', error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      resource: "",
      role: '',
      workEmail: '',
      workPhone: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext(4, values);
      console.log("Resource Details", values)
    }
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h5>Resource</h5>
        <div className='flex flex-wrap gap-3 p-fluid'>
          <div className="g-2 mt-3">
            <RequiredLabel label="Resource" required />
            <Dropdown
              name="resource"
              value={formik.values.resource}
              options={options}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.resource && formik.touched.resource ? 'p-invalid' : ''}
            />
            {formik.errors.resource && formik.touched.resource && (
              <small className="p-error">{formik.errors.resource}</small>
            )}
            <AddSidebarRight sidebarToBeRender={"addResource"} />
          </div>
          <div className='row mt-2'>
            <div className="flex-auto col-md-4">
              <RequiredLabel label='Role' />
              <Dropdown
                name="role"
                value={formik.values.role}
                options={options}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="---"
                className={formik.errors.role && formik.touched.role ? 'p-invalid' : ''}
              />
              {formik.errors.role && formik.touched.role && (
                <small className="p-error">{formik.errors.role}</small>
              )}
            </div>
            <div className="flex-auto col-md-4">
              <ReusableInputField label="Work Email" required name="addressLine1"
                value={formik.values.workEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
                className={formik.errors.workEmail && formik.touched.workEmail ? 'p-invalid' : ''}
              />
              {formik.errors.workEmail && formik.touched.workEmail && (
                <small className="p-error">{formik.errors.workEmail}</small>
              )}
            </div>
            <div className="flex-auto col-md-4">
              <ReusableInputField label="Work Phone" required name="addressLine1"
                value={formik.values.workPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
                className={formik.errors.workPhone && formik.touched.workPhone ? 'p-invalid' : ''}
              />
              {formik.errors.workPhone && formik.touched.workPhone && (
                <small className="p-error">{formik.errors.workPhone}</small>
              )}
            </div>
          </div>
        </div>
        {/* <Row className="g-2 mt-3">
          <Form.Label>Resource</Form.Label>
          <Col className='l-color-orange l-fw-500 bg-white pt-2 pb-2 text-end border border-1 rounded' >
            <Link to="/createResource"><span className='pe-2 l-color-orange ' >  + ADD RESOURCE</span></Link>  
          </Col>
        </Row>
        <Row className='g-2 mt-3'>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">W2 Employee</option>
                <option value="2">C2C Employee</option>
                <option value="3">1099 Employee</option>
                <option value="4">Manager</option>
                <option value="5">Recruiter</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Work Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="--"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Work Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="--"
              />
            </Form.Group>
          </Col>
        </Row> */}
        <div className='p-mt-4 form-btns' >
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious(4)} />
          <Button label='Next' className=' company-primary-btn' type='submit' />
        </div>
      </form>


    </>
  )
}

export default ResourceDetails