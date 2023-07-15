import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import RequiredLabel from '../../../components/RequiredLabel'
import { FileUpload } from 'primereact/fileupload';

const validationSchema = Yup.object().shape({
    contract: Yup.string().required('Contract is required'),
    // employee: Yup.string().required('Employee is required'),
    // startDate: Yup.date().required('Please Enter Valid Date'),
    // endDate: Yup.date()
    //   .required('End Date is required')
    //   .min(
    //     Yup.ref('startDate'),
    //     'End Date must be greater than or equal to Start Date'
    //   ),
    // hours: Yup.number().required("required") ,
    // OT: Yup.number().required()
})

function Timesheet({onNext}) {
    const[options,setOptions] = useState()

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
          contract: "",
          employee: "",
          startDate: null,
          endDate: null,
          hours: "",
          OT:"",
          uploadFile:[]
        },
        validationSchema: validationSchema,
    
        onSubmit: (values) => {
          console.log("Timesheet Details", values);
          onNext("hours", values);
        }
      });


  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Timesheet</h2>
      <div className='flex flex-wrap gap-3 p-fluid'>
              <div className='row mb-3'>
                <div className='flex-auto col-md-6'>
                    <RequiredLabel label='Contract' required/>
                    <Dropdown
              name="contract"
              value={formik.values.contract}
              options={options}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.contract && formik.touched.contract ? 'p-invalid' : ''}
            />
            {formik.errors.contract && formik.touched.contract && (
              <small className="p-error">{formik.errors.contract}</small>
            )}

                </div>
                <div className='flex-auto col-md-6'>
                <RequiredLabel label='Employee' required/>               
                <Dropdown
              name="employee"
              value={formik.values.employee}
              options={options}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.employee && formik.touched.employee ? 'p-invalid' : ''}
            />
            {formik.errors.employee && formik.touched.employee && (
              <small className="p-error">{formik.errors.employee}</small>
            )}
                </div>
              </div>

              <div className='row mb-3 gap'>
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


              <div className='row mb-3'>
                <div className='col-md-6'>
                <RequiredLabel label='Hours' required/> 
                  <InputText name="hours" type="text"

                    value={formik.values.hours}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="---"
                    className={formik.errors.hours && formik.touched.hours ? 'p-invalid' : ''}
                  />
                  {formik.errors.hours && formik.touched.hours && (
                    <small className="p-error">{formik.errors.hours}</small>
                  )}
                </div>
                <div className='col-md-6'>
                <RequiredLabel label='OT' required/> 
                  <InputText name="OT" type="text"
                    value={formik.values.OT}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="---"
                    className={formik.errors.OT && formik.touched.OT ? 'p-invalid' : ''}
                  />
                   {formik.errors.OT && formik.touched.OT && (
                    <small className="p-error">{formik.errors.OT}</small>
                  )}
                </div>
              </div>
              <div className='row mb-3'>
                        <div className="">
                            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                        </div>
                    </div>

        <div className="p-mt-4 form-btns">
          <Button label="Next" className=' company-primary-btn' type="submit" />
        </div>
      </div>

    </form >
  )
}

export default Timesheet