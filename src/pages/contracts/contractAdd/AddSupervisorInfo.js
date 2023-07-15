import React from 'react'
import ReusableInputField from '../../../components/ReusableInputField'
import { Dropdown } from 'primereact/dropdown'
import RequiredLabel from '../../../components/RequiredLabel'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';

const validationSchema = Yup.object().shape({
  supervisor: Yup.string().required('Supervisor is required'),
  // supervisorTitle: Yup.string().required('Supervisor Title is required'),
  // supervisoremail: Yup.string().email('Invalid email').required('Email is required'),
    // supervisorphoneNumber: Yup.string().required('Phone Number is required'),
});

function AddSupervisorInfo({onPrevious, onNext}) {

  const formik = useFormik({
    initialValues: {
      supervisor: "",
      supervisorTitle: "",
      supervisoremail: "",
      supervisorphoneNumber: ""
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Supervisor Info",values);
      onNext("document", values);
    }
  });
  return (
    <>
    <form onSubmit={formik.handleSubmit}>

    <div className="text-center">
            <h4>Supervisor Info (Client)</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>

      <div className='flex flex-wrap gap-3 p-fluid'>
      <div className='flex-auto row mb-2'>
          <div className=" col-md-6">
          <ReusableInputField label="Supervisor" required
            name="supervisor"
            value={formik.values.supervisor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.supervisor && formik.touched.supervisor ? 'p-invalid' : ''}
          />
          {formik.errors.supervisor && formik.touched.supervisor && (
            <small className="p-error">{formik.errors.supervisor}</small>
          )}
            </div>
            <div className="flex-auto col-md-6">
            <ReusableInputField label="Supervisor Title" required
            name="supervisorTitle"
            value={formik.values.supervisorTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.supervisorTitle && formik.touched.supervisorTitle ? 'p-invalid' : ''}
          />
          {formik.errors.supervisorTitle && formik.touched.supervisorTitle && (
            <small className="p-error">{formik.errors.supervisorTitle}</small>
          )}
            </div>
            
            </div>
            <div className='flex-auto row mb-2'>
          <div className=" col-md-6">
          <ReusableInputField label="Supervisor Email" required
            name="supervisoremail"
            value={formik.values.supervisoremail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.supervisoremail && formik.touched.supervisoremail ? 'p-invalid' : ''}
          />
          {formik.errors.supervisoremail && formik.touched.supervisoremail && (
            <small className="p-error">{formik.errors.supervisoremail}</small>
          )}
            </div>
            <div className="flex-auto col-md-6">
              <RequiredLabel label="Supervisor Phone" required/>
            <InputMask 
            name="supervisorphoneNumber"
            value={formik.values.supervisorphoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mask="(999) 999-9999"
            className={formik.errors.supervisorphoneNumber && formik.touched.supervisorphoneNumber ? 'p-invalid' : ''}
          />
          {formik.errors.poRate && formik.touched.supervisorphoneNumber && (
            <small className="p-error">{formik.errors.supervisorphoneNumber}</small>
          )}
            </div>
            
            </div>    
      </div>
      <div className='p-mt-4 form-btns' >
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("woRate")} />
          <Button label='Next' className=' company-primary-btn' type='submit' />
        </div>
    </form>


    </>
  )
}

export default AddSupervisorInfo