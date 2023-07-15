import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Editor } from "primereact/editor";
import RequiredLabel from '../../../components/RequiredLabel';
import ReusableInputField from '../../../components/ReusableInputField';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
import AddEndClient from './AddEndClient';
import { ScrollPanel } from 'primereact/scrollpanel';

const validationSchema = Yup.object().shape({
  wbsCode: Yup.string().required('WBS Code is required'),
  // title: Yup.string().required('Title is required'),
  // description: Yup.string(),
  // startDate: Yup.date().required('Please Enter Valid Date'),
  // endDate: Yup.date()
  //   .required('End Date is required')
  //   .min(
  //     Yup.ref('startDate'),
  //     'End Date must be greater than or equal to Start Date'
  //   ),
  // fee: Yup.string().required('Fee is required'),
  // discount: Yup.string().required('Discount is required'),
  // invoiceCycle: Yup.string().required('Invoice Cycle is required'),
  // paymentTerms: Yup.string().required('Payment terms is required'),
});


function ContractDetails({ onNext, onPrevious, setProgress }) {

  const [options, setOptions] = useState();
  const [componentToBeRendered, setComponentToBeRendered] = useState(null);
  const [visible, setVisible] = useState(false);

  // const footerContent = (
  //     <div>
  //         <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
  //     </div>
  // );



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
      wbsCode: "",
      title: "",
      description: "",
      startDate: null,
      endDate: null,
      fee: "",
      discount: "",
      invoiceCycle: "",
      paymentTerms: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Contract Details", values);
      onNext("endClient")
    }
  });

  //   const handleNextClick =()=>{
  // // if(errors.length)
  //     // setVisible(true)
  //     setComponentToBeRendered("endClient")
  //   }

  // const handleclose =()=>{
  //   // setVisible(false)
  //   // setComponentToBeRendered("endClient")
  // }


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='text-center'>
          <h4>MSA-Contract Details</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div className='flex flex-wrap gap-3 p-fluid'>
          <div className='flex-auto  mb-3'>
            <FileUpload name="demo[]" url={'/api/upload'}
              multiple accept="image/*"
              maxFileSize={1000000}
              emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
          </div>
          <div className='flex-auto row mb-2'>
            <div className=" col-md-6">
              <label htmlFor='wbsCode' className="">WBs Code <span className='text-danger'> *</span></label>
              <InputText
                id='wbsCode'
                name="wbsCode"
                value={formik.values.wbsCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="WBs Code"
                className={formik.errors.wbsCode && formik.touched.wbsCode ? 'p-invalid' : ''}
              />
              {formik.errors.wbsCode && formik.touched.wbsCode && (
                <small className="p-error">{formik.errors.wbsCode}</small>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor='title'>Title <span className='text-danger'> *</span></label>
              <InputText
                id='title'
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Title"
                className={formik.errors.title && formik.touched.title ? 'p-invalid' : ''}
              />
              {formik.errors.title && formik.touched.title && (
                <small className="p-error">{formik.errors.title}</small>
              )}
            </div>
          </div>

          <div className='flex-auto'>
            <label htmlFor='description'>Description</label>
            <Editor
              id='description'
              style={{ height: '80px' }}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className='flex-auto row mt-3 gap'>
            <div className='col-md-6'>
              <label htmlFor='startDate'>Contract Start Date <span className='text-danger'> *</span></label>
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
              <label htmlFor='endDate'>Contract End Date <span className='text-danger'> *</span></label>
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

          <div className='flex-auto row mt-3'>
            <div className=" col-md-3">
              <RequiredLabel label='Fee' />
              <Dropdown
                placeholder='%'
                name="fee"
                value={formik.values.fee}
                options={options}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.fee && formik.touched.fee ? 'p-invalid' : ''}
              />
              {formik.errors.fee && formik.touched.fee && (
                <small className="p-error">{formik.errors.fee}</small>
              )}
            </div>
            <div className="flex-auto col-md-3">
              <label></label>
              <ReusableInputField placeholder='--'
                name=""
              //  value={formik.values.poRateDiscount}
              />
            </div>
            <div className="flex-auto col-md-3">
              <RequiredLabel label='Discounts' />
              <Dropdown
                placeholder='Flat'
                name="discount"
                value={formik.values.discount}
                options={options}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.discount && formik.touched.discount ? 'p-invalid' : ''}
              />
              {formik.errors.discount && formik.touched.discount && (
                <small className="p-error">{formik.errors.discount}</small>
              )}
            </div>
            <div className="flex-auto col-md-3">
              <label></label>
              <ReusableInputField placeholder='--'
                name=""
              //  value={formik.values.netPORate}
              />
            </div>
          </div>
          <div className='flex-auto row mb-2'>
            <div className=" col-md-6">
              <RequiredLabel label='Invoice Cycle' required />
              <Dropdown
                name="invoiceCycle"
                value={formik.values.invoiceCycle}
                options={options}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.invoiceCycle && formik.touched.invoiceCycle ? 'p-invalid' : ''}
              />
              {formik.errors.invoiceCycle && formik.touched.invoiceCycle && (
                <small className="p-error">{formik.errors.invoiceCycle}</small>
              )}
            </div>
            <div className="col-md-6">
              <RequiredLabel label='Payment Terms' required />
              <Dropdown
                name="paymentTerms"
                value={formik.values.paymentTerms}
                options={options}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.paymentTerms && formik.touched.paymentTerms ? 'p-invalid' : ''}
              />
              {formik.errors.paymentTerms && formik.touched.paymentTerms && (
                <small className="p-error">{formik.errors.paymentTerms}</small>
              )}
            </div>
          </div>
        </div>

        <div className="p-mt-5 form-btns">
          <Button label='Previous' className='mr-2 company-secondary-btn'
            onClick={() => {
              onPrevious("step1");
              setProgress(10)
            }}
          />
          <Button label="Add" className=' company-primary-btn' type="submit" />
        </div>
      </form >


      {/* <Dialog header="" visible={visible} 
    //  style={{ width: '10vw', height: "20vh" }} 
     onHide={() => setVisible(false)}
      // footer={footerContent}
      >
         <h4 className="m-0">
               MSA successfully created    
                </h4>
                <Button label="Ok" icon="pi pi-check" onClick={handleclose} autoFocus />
      </Dialog> */}
    </>
  )
}

export default ContractDetails
