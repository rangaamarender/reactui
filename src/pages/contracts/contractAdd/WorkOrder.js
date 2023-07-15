import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReusableInputField from '../../../components/ReusableInputField'
import { Dropdown } from 'primereact/dropdown'
import RequiredLabel from '../../../components/RequiredLabel'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { MultiSelect } from 'primereact/multiselect';


const validationSchema = Yup.object().shape({
  resource: Yup.string().required('Resource is required'),
  // woRate: Yup.string().required('WO Rate is required'),
  // woRateType: Yup.string().required('WO Rate Type is required'),
  // woType: Yup.string().required('WO Type is required'),
  // role:Yup.string().required('Role is required'),
  // startDate: Yup.date().required('Please Enter Valid Date'),
  // endDate: Yup.date()
  //   .required('End Date is required')
  //   .min(
  //     Yup.ref('startDate'),
  //     'End Date must be greater than or equal to Start Date'
  //   ),
});

function WorkOrder({ onPrevious, onNext }) {
  const [dropdownoptions, setDropdownOptions] = useState();

  useEffect(() => {
    // Fetch options from API using axios
    axios.get('http://localhost:4000/dropdownOptions')
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

  const formik = useFormik({
    initialValues: {
      resource: "",
      role: "",
      startDate: null,
      endDate: null,
      woRate: "",
      woRateType: "",
      woType: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("WO Rate Details", values);
      onNext("supervaisor", values);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='text-center mb-4'>
          <h4>Work Order</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div className='flex flex-wrap  p-fluid'>
          <div className='flex-auto  mb-3'>
            <FileUpload name="demo[]" url={'/api/upload'}
              multiple accept="image/*"
              maxFileSize={1000000}
              emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
          </div>
        </div>
        <div className='flex flex-wrap p-fluid'>
          <div className='flex-auto  mb-3'>
            <RequiredLabel label="Resource" required />
            <Dropdown
              name="resource"
              value={formik.values.resource}
              options={dropdownoptions}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="MSA Name"
              className={
                formik.errors.resource && formik.touched.resource
                  ? 'p-invalid'
                  : ''
              }
            />
            {formik.errors.resource && formik.touched.resource && (
              <small className="p-error">{formik.errors.resource}</small>
            )}
          </div>
        </div>

        <div className='flex flex-wrap row p-fluid mb-3 '>

          {/* <div className="col-md-4">
              <RequiredLabel label="Role" required />
              <Dropdown
                name="role"
                value={formik.values.role}
                options={dropdownoptions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="---"
                className={
                  formik.errors.role && formik.touched.role
                    ? 'p-invalid'
                    : ''
                }
              />
              {formik.errors.role && formik.touched.role && (
                <small className="p-error">{formik.errors.role}</small>
              )}
            </div> */}
          <div className='col-md-6'>
            <label htmlFor='startDate'>Start Date <span className='text-danger'> *</span></label>
            <Calendar
              id="startDate"
              name="startDate"
              value={formik.values.startDate}
              onChange={(e) => formik.setFieldValue('startDate', e.value)}
              onBlur={formik.handleBlur}
              placeholder="Start Date"
              dateFormat='mm/dd/yy'
              showIcon
              className={`date-pick-icon ${formik.errors.startDate && formik.touched.startDate ? 'p-invalid' : ''}`}
            />
            {formik.errors.startDate && formik.touched.startDate && (
              <small className="p-error">{formik.errors.startDate}</small>
            )}
          </div>
          <div className='col-md-6'>
            <label htmlFor='endDate'>End Date <span className='text-danger'> *</span></label>
            <Calendar
              id='endDate'
              name="endDate"
              value={formik.values.endDate}
              onChange={(e) => formik.setFieldValue('endDate', e.value)}
              onBlur={formik.handleBlur}
              dateFormat="mm/dd/yy"
              showIcon
              className={`date-pick-icon ${formik.errors.endDate && formik.touched.endDate ? 'p-invalid' : ''}`}
            />
            {formik.errors.endDate && formik.touched.endDate && (
              <small className="p-error">{formik.errors.endDate}</small>
            )}
          </div>
        </div>

        <div className='flex flex-wrap  p-fluid row mb-3'>
          <div className="flex-auto col-md-4">
            <ReusableInputField label="WO Rate" required
              name="woRate"
              value={formik.values.woRate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Select a Client"
              className={formik.errors.woRate && formik.touched.woRate ? 'p-invalid' : ''}
            />
            {formik.errors.woRate && formik.touched.woRate && (
              <small className="p-error">{formik.errors.woRate}</small>
            )}
          </div>
          <div className="flex-auto col-md-4">
            <RequiredLabel label='WO Rate Type' required />
            <MultiSelect
              id="documents"
              name="woRateType"
              placeholder="---"
              value={formik.values.woRateType}
              options={dropdownoptions}
              onChange={(e) => formik.setFieldValue('woRateType', e.value)}
              onBlur={formik.handleBlur}
              filter
              filterPlaceholder="Search options"
              multiple
              display="chip"
            />
            {formik.errors.woRateType && formik.touched.woRateType && (
              <small className="p-error">{formik.errors.woRateType}</small>
            )}
          </div>
          <div className="flex-auto col-md-4">
            <RequiredLabel label='WO Type' required />
             <MultiSelect
              name="woType"
              placeholder="---"
              value={formik.values.woType}
              options={dropdownoptions}
              onChange={(e) => formik.setFieldValue('woType', e.value)}
              onBlur={formik.handleBlur}
              filter
              filterPlaceholder="Search options"
              multiple
              display="chip"
            />
            {formik.errors.client && formik.touched.woType && (
              <small className="p-error">{formik.errors.woType}</small>
            )}
          </div>
        </div>


        {/* <div className="g-2 mt-3">
            <div className='l-color-orange l-fw-500 bg-white pt-2 pb-2  border border-1 rounded' >
              <span className='pe-2'>  + ADD NEW WO RATE TYPE</span>
            </div> */}

        <div className='p-mt-4 form-btns' >
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("woRateOptions")} />
          <Button label='Next' className=' company-primary-btn' type='submit' />
        </div>
      </form>

    </>
  )
}

export default WorkOrder
