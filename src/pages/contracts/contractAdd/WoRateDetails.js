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
  woRate: Yup.string().required('WO Rate is required'),
  // woRateType: Yup.string().required('WO Rate Type is required'),
  // woType: Yup.string().required('WO Type is required'),
  // woRateDiscount: Yup.string().required('WO Rate Discount Type is required'),
  // woRateDiscountType: Yup.number().required('wo Rate Discount Type is required'),
  // netWORate: Yup.number().required('Net WO Rate is required'),
  // startDate: Yup.date().required('Please Enter Valid Date'),
  // endDate: Yup.date()
  //   .required('End Date is required')
  //   .min(
  //     Yup.ref('startDate'),
  //     'End Date must be greater than or equal to Start Date'
  //   ),
  // paymentTerms: Yup.string().required('Payment Terms is required'),
  // invoiceCycle: Yup.number().required('Invoice Cycle Type is required'),
});

function WoRateDetails({onPrevious,onNext}) {
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
      woRate: "",
      woRateType: "",
      woType: "",
      woRateDiscount: "",
      woRateDiscountType: "",
      netWORate: "",
      startDate: null,
      endDate: null,
      paymentTerms: "",
      invoiceCycle: ""
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("WO Rate Details",values);
      onNext("supervaisor", values);
    }
  });

  return (
    <>
        <form onSubmit={formik.handleSubmit}>
        <h5>WO Rate (Bill Rate)</h5>
        <div className='flex flex-wrap gap-3 p-fluid'>
        <div className='row mt-2'>
          <div className="flex-auto col-md-3">
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
          <div className="flex-auto col-md-3">
            <RequiredLabel label='WO Rate Type'/>
            <Dropdown 
            name="woRateType"
            value={formik.values.woRateType}
            options={options}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.woRateType && formik.touched.woRateType ? 'p-invalid' : ''}
          />
          {formik.errors.woRateType && formik.touched.woRateType && (
            <small className="p-error">{formik.errors.woRateType}</small>
          )}
          </div>
          <div className="flex-auto col-md-6">
          <RequiredLabel label='WO Type'/>
            <Dropdown 
            name="woType"
            value={formik.values.woType}
            options={options}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.woType && formik.touched.woType ? 'p-invalid' : ''}
          />
          {formik.errors.client && formik.touched.woType && (
            <small className="p-error">{formik.errors.woType}</small>
          )}
          </div>
        </div>

        <div className='row mt-3'>
          <div className="flex-auto col-md-3">
            <ReusableInputField label="WO Rate Discount" required  placeholder='--'
             name="woRateDiscount"
             value={formik.values.woRateDiscount}
              />
          </div>
          <div className="flex-auto col-md-3">
            <RequiredLabel label='Discount Type'/>
            <Dropdown
             name="woRateDiscountType"
             value={formik.values.woRateDiscountType}
             options={options}
            />
          </div>
          <div className="flex-auto col-md-6">
          <ReusableInputField label="Net WO Rate" required 
           name="netWORate"
           value={formik.values.netWORate}
          placeholder='--' />
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
        <div className="g-2 mt-3">
          <div className='l-color-orange l-fw-500 bg-white pt-2 pb-2  border border-1 rounded' >
            <span className='pe-2'>  + ADD NEW WO RATE TYPE</span>
             </div>
        </div>
        <div className='row mt-2 gap'>
            <div className='col-md-6'>
            <RequiredLabel label='Payment Terms'/>
            <Dropdown
             name="paymentTerms"
             value={formik.values.paymentTerms}
             options={options}
            />
            </div>
            <div className='col-md-6'>
            <RequiredLabel label='Invoice Cycle'/>
            <Dropdown
             name="invoiceCycle"
             value={formik.values.invoiceCycle}
             options={options}
            />
            </div>
          </div>

        </div>
        <div className='p-mt-4 form-btns' >
          {/* <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious(3)} /> */}
          <Button label='Next' className=' company-primary-btn' type='submit' />
        </div>
        </form>
      
    </>
  )
}

export default WoRateDetails
