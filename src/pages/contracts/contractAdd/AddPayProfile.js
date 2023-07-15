import React, {useState,useEffect} from 'react'
import axios from 'axios';
import ReusableInputField from '../../../components/ReusableInputField'
import { Dropdown } from 'primereact/dropdown'
import RequiredLabel from '../../../components/RequiredLabel'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';


const validationSchema = Yup.object().shape({
  poRate: Yup.string().required('PO Rate is required'),
  // poRateType: Yup.string().required('PO Rate Type is required'),
  // poType: Yup.string().required('PO Type is required'),
  // poRateDiscount: Yup.string().required('PO Rate Discount Type is required'),
  // poRateDiscountType: Yup.number().required('Po Rate Discount Type is required'),
  // netPORate: Yup.number().required('Net PO Rate is required'),
  // startDate: Yup.date().required('Please Enter Valid Date'),
  // endDate: Yup.date()
  //   .required('End Date is required')
  //   .min(
  //     Yup.ref('startDate'),
  //     'End Date must be greater than or equal to Start Date'
  //   ),
});

function AddPayProfile({onPrevious,onNext}) {
  const[options,setOptions] = useState();

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
      poRate: "",
      poRateType: "",
      poType: "",
      poRateDiscount: "",
      poRateDiscountType: "",
      netPORate: "",
      startDate: null,
      endDate: null,
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Add PayProfile",values);
      onNext(5, values);
    }
  });
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
        <h5>WO Rate (Bill Rate)</h5>
        <div className='flex flex-wrap gap-3 p-fluid'>
        <div className='row mt-2'>
          <div className="flex-auto col-md-3">
            <ReusableInputField label="PO Rate" required
            name="poRate"
            value={formik.values.poRate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.poRate && formik.touched.poRate ? 'p-invalid' : ''}
          />
          {formik.errors.poRate && formik.touched.poRate && (
            <small className="p-error">{formik.errors.poRate}</small>
          )}
          </div>
          <div className="flex-auto col-md-3">
            <RequiredLabel label='PO Rate Type'/>
            <Dropdown 
            name="poRateType"
            value={formik.values.poRateType}
            options={options}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.poRateType && formik.touched.poRateType ? 'p-invalid' : ''}
          />
          {formik.errors.poRateType && formik.touched.poRateType && (
            <small className="p-error">{formik.errors.poRateType}</small>
          )}
          </div>
          <div className="flex-auto col-md-6">
          <RequiredLabel label='PO Type'/>
            <Dropdown 
            name="poType"
            value={formik.values.poType}
            options={options}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.poType && formik.touched.poType ? 'p-invalid' : ''}
          />
          {formik.errors.poType && formik.touched.poType && (
            <small className="p-error">{formik.errors.poType}</small>
          )}
          </div>
        </div>

        <div className='row mt-3'>
          <div className="flex-auto col-md-3">
            <ReusableInputField label="PO Rate Discount" required  placeholder='--'
             name="poRateDiscount"
             value={formik.values.poRateDiscount}
              />
          </div>
          <div className="flex-auto col-md-3">
            <RequiredLabel label='Discount Type'/>
            <Dropdown
             name="poRateDiscountType"
             value={formik.values.poRateDiscountType}
             options={options}
            />
          </div>
          <div className="flex-auto col-md-6">
          <ReusableInputField label="Net WO Rate" required 
           name="netPORate"
           value={formik.values.netPORate}
          placeholder='--' />
          </div>
        </div>

        <div className="g-2 mt-3">
          <div className='l-color-orange l-fw-500 bg-white pt-2 pb-2  border border-1 rounded' >
            <span className='pe-2'>  + ADD NEW PO RATE TYPE</span>
             </div>
        </div>

<div className='row mt-2 gap'>
            <div className='col-md-6'>
              <label htmlFor='startDate'>Start Date <span className='text-danger'> *</span></label>
              <Calendar
                id="startDate"
                name="startDate"
                value={formik.values.startDate}
                onChange={(e) => formik.setFieldValue('startDate', e.value)}
                onBlur={formik.handleBlur}
                placeholder="mm/dd/yy"
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
                placeholder="mm/dd/yy"
                dateFormat="mm/dd/yy"
                showIcon
                className={`date-pick-icon ${formik.errors.endDate && formik.touched.endDate ? 'p-invalid' : ''}`}
              />
              {formik.errors.endDate && formik.touched.endDate && (
                <small className="p-error">{formik.errors.endDate}</small>
              )}
            </div>
          </div>

        </div>
        <div className='p-mt-4 form-btns' >
          <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious(5)} />
          <Button label='Next' className=' company-primary-btn' type='submit' />
        </div>
        </form>
    </>
  )
}

export default AddPayProfile