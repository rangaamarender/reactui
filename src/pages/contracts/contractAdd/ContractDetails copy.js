import React from 'react';
import { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
// import { Dropdown } from 'primereact/dropdown';
// import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Editor } from "primereact/editor";
import RequiredLabel from '../../../components/RequiredLabel';
import ReusableInputField from '../../../components/ReusableInputField';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from "primereact/radiobutton";

const validationSchema = Yup.object().shape({
  wbsCode: Yup.string().required('WBS Code is required'),
  // title: Yup.string().required('Title is required'),
  // description: Yup.string(),
  // contractCatagory: Yup.string().required('Contract Category is required'),
  // contractType: Yup.string().required('Contract Type is required'),
  // hoursEstimated: Yup.number().required('Total Hours is required'),
  // budgetEstimated: Yup.number().required('Estimated Budget is required'),
  // startDate: Yup.date().required('Please Enter Valid Date'),
  // endDate: Yup.date()
  //   .required('End Date is required')
  //   .min(
  //     Yup.ref('startDate'),
  //     'End Date must be greater than or equal to Start Date'
  //   ),
  noOFResources: Yup.string().required('Select one option'),
  // invoiceType: Yup.string().when('noOFResources', {
  //   is: 'Multiple',
  //   then: Yup.string().required('InvoiveType is required when NoOf resources '),
  //   otherwise: ()=>Yup.string(),
  // }),

});


function ContractDetails({ onNext }) {
  const [resources, setResources] = useState('');
  const [invoiceType, setInvoiceType] = useState("")

  // const handleSubmit = (values) => {
  //   onNext(1, values);
  // };

  const formik = useFormik({
    initialValues: {
      wbsCode: "",
      title: "",
      description: "",
      contractType: "",
      contractCatagory: "",
      hoursEstimated: "",
      budgetEstimated: "",
      startDate: null,
      endDate: null,
      noOFResources: "",
      invoiceType: ""
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Contract Details", values);
      onNext(0, values);
    }
  });

  const onHandleResourceChange = (e) => {
    setResources(e.value)
    formik.handleChange(e)
    if (e.value === "Single") {
      setInvoiceType("");
    }
  }

  const onHandleInvoiceChange = (e) => {
    setInvoiceType(e.value);
    formik.handleChange(e)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Contract</h2>
      <div className='flex flex-wrap gap-3 p-fluid'>
        <div className='row mb-2'>
          <div className="flex-auto col-md-6">
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
          <div className="flex-auto col-md-6">
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

        <div>
          <label htmlFor='description'>Description</label>
          <Editor
            id='description'
            style={{ height: '80px' }}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>


        {
          invoiceType === "" || invoiceType === "Single" ?
            <>
              <div className='row mt-3'>
                <div className='flex-auto col-md-6'>
                  <label htmlFor='contractCatagory' > Contract Catagory <span className='text-danger'> *</span></label>
                  <Dropdown
                    id="contractCatagory"
                    name="contractCatagory"
                    options={[
                      { label: 'Type Name 1', value: 'type1' },
                      { label: 'Type Name 2', value: 'type2' },
                      { label: 'Type Name 3', value: 'type3' },
                    ]}
                    value={formik.values.contractCatagory}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Select Role"
                    className={formik.errors.contractCatagory && formik.touched.contractCatagory ? 'p-invalid' : ''}
                  />
                  {formik.errors.contractCatagory && formik.touched.contractCatagory && (
                    <small className="p-error">{formik.errors.contractCatagory}</small>
                  )}

                </div>
                <div className='flex-auto col-md-6'>
                  <label htmlFor='contractType'> Contract Type <span className='text-danger'> *</span></label>
                  <Dropdown
                    id='contractType'
                    name="contractType"
                    value={formik.values.contractType}
                    options={[
                      { label: 'Type Name 1', value: 'type1' },
                      { label: 'Type Name 2', value: 'type2' },
                      { label: 'Type Name 3', value: 'type3' },
                    ]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=" Select Contract Type"
                    className={formik.errors.contractType && formik.touched.contractType ? 'p-invalid' : ''}
                  />
                  {formik.errors.contractType && formik.touched.contractType && (
                    <small className="p-error">{formik.errors.contractType}</small>
                  )}
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-md-6'>
                  <label>Total Hours Estimated</label>
                  <InputText name="hoursEstimated" type="text"

                    value={formik.values.hoursEstimated}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Total Hours Estimated"
                    className={formik.errors.hoursEstimated && formik.touched.hoursEstimated ? 'p-invalid' : ''}
                  />
                  {formik.errors.hoursEstimated && formik.touched.hoursEstimated && (
                    <small className="p-error">{formik.errors.hoursEstimated}</small>
                  )}
                </div>
                <div className='col-md-6'>
                  <label htmlFor=''>Estimated Budget</label>
                  <InputText name="budgetEstimated" type="text"
                    value={formik.values.budgetEstimated}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Estimated Budget"
                    className={formik.errors.budgetEstimated && formik.touched.budgetEstimated ? 'p-invalid' : ''}
                  />
                  {formik.errors.budgetEstimated && formik.touched.budgetEstimated && (
                    <small className="p-error">{formik.errors.budgetEstimated}</small>
                  )}
                </div>
                <div className='row mt-3 gap'>
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
              </div>

              <div className='row mt-3'>
                <div className='flex-auto col-md-6'>
                  <label>No. of Resources</label>
                  <div className="flex justify-content-center gap-3">
                    <div className="row">
                      <div className="flex-auto col-md-6">
                        <RadioButton inputId="ingredient1"
                          name="noOFResources" value="Single"
                          checked={formik.values.noOFResources === 'Single'}
                          onChange={(e) => {

                            onHandleResourceChange(e);

                          }
                          }
                        />
                        <label htmlFor="ingredient1" className="ml-2">Single</label>
                      </div>
                      <div className="flex-auto col-md-6">
                        <RadioButton inputId="ingredient2" name="noOFResources" value="Multiple"
                          // onChange={(e) => onHandleResourceChange(e)}
                          // checked={resources === 'Multiple'}
                          checked={formik.values.noOFResources === 'Multiple'}
                          onChange={(e) => { onHandleResourceChange(e); }}
                        />
                        <label htmlFor="ingredient2" className="ml-2">Multiple</label>
                      </div>
                    </div>
                    {formik.errors.noOFResources && formik.touched.noOFResources && (
                      <small className="p-error">{formik.errors.noOFResources}</small>
                    )}
                  </div>
                </div>
                {resources === "Multiple" &&
                  <div className='flex-auto col-md-6'>
                    <label>Invoice Type</label>
                    <div className="flex justify-content-center gap-3">
                      <div className="row">
                        <div className="flex-auto col-md-4">
                          <RadioButton inputId="singleInvoice"
                            name="invoiceType" value="Single"
                            // onChange={(e) => onHandleInvoiceChange(e)}
                            // checked={invoiceType === 'Single'}
                            checked={formik.values.invoiceType === 'Single'}
                            onChange={(e) => { onHandleInvoiceChange(e); }}
                          />
                          <label htmlFor="singleInvoice" className="ml-2">Single</label>
                        </div>
                        <div className="flex-auto col-md-4">
                          <RadioButton inputId="ingredient2" name="invoiceType" value="Blended"
                            // onChange={(e) => onHandleInvoiceChange(e)}
                            // checked={invoiceType === 'Blended'} 
                            checked={formik.values.invoiceType === 'Blended'}
                            onChange={(e) => { onHandleInvoiceChange(e); }}
                          />
                          <label htmlFor="ingredient2" className="ml-2">Blended</label>
                        </div>
                        <div className="flex-auto col-md-4">
                          <RadioButton inputId="ingredient2" name="invoiceType" value="Seperete"
                            // onChange={(e) => onHandleInvoiceChange(e)}
                            // checked={invoiceType === 'Seperete'} 
                            checked={formik.values.invoiceType === 'Seperete'}
                            onChange={(e) => { onHandleInvoiceChange(e); }}
                          />
                          <label htmlFor="ingredient2" className="ml-2">Seperete</label>
                        </div>
                      </div>
                      {formik.errors.invoiceType && formik.touched.invoiceType && (
                        <small className="p-error">{formik.errors.invoiceType}</small>
                      )}
                    </div>
                  </div>
                }
              </div>

            </> :
            <>
              <div className='row mt-3'>
                <div className='flex-auto col-md-6'>
                  <label htmlFor='contractCatagory' > Project Catagory <span className='text-danger'> *</span></label>
                  <Dropdown
                    id="contractCatagory"
                    name="contractCatagory"
                    options={[
                      { label: 'Type Name 1', value: 'type1' },
                      { label: 'Type Name 2', value: 'type2' },
                      { label: 'Type Name 3', value: 'type3' },
                    ]}
                    value={formik.values.contractCatagory}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Select Role"
                    className={formik.errors.contractCatagory && formik.touched.contractCatagory ? 'p-invalid' : ''}
                  />
                  {formik.errors.contractCatagory && formik.touched.contractCatagory && (
                    <small className="p-error">{formik.errors.contractCatagory}</small>
                  )}


                </div>
                <div className='flex-auto col-md-6'>
                  <label htmlFor='contractType'> Contract Type <span className='text-danger'> *</span></label>
                  <Dropdown
                    id='contractType'
                    name="contractType"
                    value={formik.values.contractType}
                    options={[
                      { label: 'Type Name 1', value: 'type1' },
                      { label: 'Type Name 2', value: 'type2' },
                      { label: 'Type Name 3', value: 'type3' },
                    ]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=" Select Contract Type"
                    className={formik.errors.contractType && formik.touched.contractType ? 'p-invalid' : ''}
                  />
                  {formik.errors.contractType && formik.touched.contractType && (
                    <small className="p-error">{formik.errors.contractType}</small>
                  )}
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-md-6'>
                  <label>Total Hours Estimated</label>
                  <InputText name="hoursEstimated" type="text"

                    value={formik.values.hoursEstimated}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Total Hours Estimated"
                    className={formik.errors.hoursEstimated && formik.touched.hoursEstimated ? 'p-invalid' : ''}
                  />
                  {formik.errors.hoursEstimated && formik.touched.hoursEstimated && (
                    <small className="p-error">{formik.errors.hoursEstimated}</small>
                  )}
                </div>
                <div className='col-md-6'>
                  <label htmlFor=''>Budget</label>
                  <InputText name="budgetEstimated" type="text"
                    value={formik.values.budgetEstimated}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Estimated Budget"
                    className={formik.errors.budgetEstimated && formik.touched.budgetEstimated ? 'p-invalid' : ''}
                  />
                  {formik.errors.budgetEstimated && formik.touched.budgetEstimated && (
                    <small className="p-error">{formik.errors.budgetEstimated}</small>
                  )}
                </div>
                <div className='row mt-3 gap'>
                  <div className='col-md-6'>
                    <label htmlFor='startDate'>Project Start Date <span className='text-danger'> *</span></label>
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
                    <label htmlFor='endDate'>Project End Date <span className='text-danger'> *</span></label>
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
              </div>

              <div className='row mt-3'>
                <div className='flex-auto col-md-6'>
                  <label>No. of Resources</label>
                  <div className="flex justify-content-center gap-3">
                    <div className="row">
                      <div className="flex-auto col-md-6">
                        <RadioButton 
                          name="noOFResources" value="Single"
                          // onChange={(e) => onHandleResourceChange(e)}
                          // checked={resources === 'Single'} 

                          checked={formik.values.noOFResources === 'Single'}
                          onChange={(e) => { onHandleResourceChange(e); }}
                        />

                        <label className="ml-2">Single</label>
                      </div>
                      <div className="flex-auto col-md-6">
                        <RadioButton  name="noOFResources" value="Multiple"
                          // onChange={(e) => onHandleResourceChange(e)}
                          // checked={resources === 'Multiple'}
                          checked={formik.values.noOFResources === 'Multiple'}
                          onChange={(e) => { onHandleResourceChange(e); }}
                        />
                        <label htmlFor="ingredient2" className="ml-2">Multiple</label>
                      </div>
                    </div>
                    {formik.errors.noOFResources && formik.touched.noOFResources && (
                      <small className="p-error">{formik.errors.noOFResources}</small>
                    )}
                  </div>
                </div>
                {resources === "Multiple" &&
                  <div className='flex-auto col-md-6'>
                    <label>Invoice Type</label>
                    <div className="flex justify-content-center gap-3">
                      <div className="row">
                        <div className="flex-auto col-md-4">
                          <RadioButton inputId="singleInvoice" name="invoiceType" value="Single"
                            // onChange={(e) => onHandleInvoiceChange(e)}
                            // checked={invoiceType === 'Single'}
                            checked={formik.values.noOFResources === 'Single'}
                            onChange={(e) => { onHandleInvoiceChange(e); }}
                          />
                          <label  className="ml-2">Single</label>
                        </div>
                        <div className="flex-auto col-md-4">
                          <RadioButton  name="invoiceType" value="Blended"
                            // onChange={(e) => onHandleInvoiceChange(e)}
                            // checked={invoiceType === 'Blended'}
                            checked={formik.values.noOFResources === 'Blended'}
                            onChange={(e) => { onHandleInvoiceChange(e); }}
                          />
                          <label htmlFor="ingredient2" className="ml-2">Blended</label>
                        </div>
                        <div className="flex-auto col-md-4">
                          <RadioButton name="invoiceType" value="Seperete"
                            // onChange={(e) => onHandleInvoiceChange(e)}
                            // checked={invoiceType === 'Seperete'} 
                            checked={formik.values.noOFResources === 'Seperete'}
                            onChange={(e) => { onHandleInvoiceChange(e); }}
                          />
                          <label className="ml-2">Seperete</label>
                        </div>
                      </div>
                      {formik.errors.invoiceType && formik.touched.invoiceType && (
                        <small className="p-error">{formik.errors.invoiceType}</small>
                      )}
                    </div>
                  </div>
                }
              </div>

            </>
        }

        <div className="p-mt-4 form-btns">
          <Button label="Next" className=' company-primary-btn' type="submit" />
        </div>
      </div>

    </form >
  )
}

export default ContractDetails
