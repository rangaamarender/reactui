import React from 'react';
import { useState } from 'react';
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


function ContractDetails1({ onNext }) {
  // const [resources, setResources] = useState('');
  // const [invoiceType, setInvoiceType] = useState("")

  const formik = useFormik({
    initialValues: {
      wbsCode: "",
      title: "",
      description: "",
      contractType: "",
      contractCatagory: "",
      projectCategory: "",
      hoursEstimated: "",
      budgetEstimated: "",
      contractStartDate: null,
      contractEndDate: null,
      projectStartDate: null,
      projectEndDate: null,
      resourceType: "",
      invoiceType: ""
    },
    validate: validateForm,

    onSubmit: (values) => {
      // Create a new object to hold only the selected fields
      const selectedValues = {
        wbsCode: values.wbsCode,
        title: values.title,
        description: values.description,
        contractType: values.contractType,
        hoursEstimated: values.hoursEstimated,
        budgetEstimated: values.budgetEstimated,
        resourceType: values.resourceType,
        invoiceType: values.invoiceType,
      };

      // Conditionally add the relevant fields based on the selected options
      if (values.resourceType === 'single' || values.invoiceType === 'multiple' || values.invoiceType === 'single') {
        selectedValues.contractCatagory = values.contractCatagory
        selectedValues.contractStartDate = values.contractStartDate;
        selectedValues.contractEndDate = values.contractEndDate;
      }

      if (
        values.resourceType === 'multiple' &&
        (values.invoiceType === 'blended' || values.invoiceType === 'separate')
      ) {
        selectedValues.projectCategory = values.projectCategory
        selectedValues.projectStartDate = values.projectStartDate;
        selectedValues.projectEndDate = values.projectEndDate;
      }

      // Handle form submission with selected values
      console.log(selectedValues);
      onNext(0, selectedValues);
    },
  });


  function validateForm(values) {
    let errors = {};
    if (!values.wbsCode) {
      errors.wbsCode = 'WBS Code is required';
    }

    // if (!values.title) {
    //   errors.title = 'Title is required';
    // }

    // if (!values.contractType) {
    //   errors.contractType = 'Contract Type is required';
    // }

    if (!values.contractCatagory &&
      (values.resourceType === 'single' || (values.resourceType === 'multiple' && values.invoiceType === 'single'))
    ) {
      errors.contractCatagory = 'Contract Category is required';
    }

    if (
      !values.projectCategory &&
      values.resourceType === 'multiple' &&
      (values.invoiceType === 'blended' || values.invoiceType === 'separate')
    ) {
      errors.projectCategory = 'Project Category is required';
    }

    if (!values.hoursEstimated) {
      errors.hoursEstimated = 'Estimated Hours is required';
    } else if (isNaN(values.hoursEstimated)) {
      errors.hoursEstimated = 'Estimated Hours must be a number';
    } else if (parseFloat(values.hoursEstimated) <= 0) {
      errors.hoursEstimated = 'Estimated Hours must be greater than 0';
    }

    if (!values.budgetEstimated) {
      errors.budgetEstimated = 'Estimated Budget is required';
    } else if (isNaN(values.budgetEstimated)) {
      errors.budgetEstimated = 'Estimated Budget must be a number';
    } else if (parseFloat(values.budgetEstimated) <= 0) {
      errors.budgetEstimated = 'Estimated Budget must be greater than 0';
    }

    if (
      !values.contractStartDate &&
      (values.resourceType === 'single' || (values.resourceType === 'multiple' && values.invoiceType === 'single'))
    ) {
      errors.contractStartDate = 'Contract Start Date is required Format Ex:MM/DD/YYYY';
    }

    if (
      !values.contractEndDate &&
      (values.resourceType === 'single' || (values.resourceType === 'multiple' && values.invoiceType === 'single'))
    ) {
      errors.contractEndDate = 'Contract End Date is required';
    } else if (values.contractEndDate < values.contractStartDate) {
      errors.contractEndDate = 'Contract End Date cannot be before the Contract Start Date';
    }

    if (
      !values.projectStartDate &&
      values.resourceType === 'multiple' &&
      (values.invoiceType === 'blended' || values.invoiceType === 'separate')
    ) {
      errors.projectStartDate = 'Project Start Date is required';
    }

    if (
      !values.projectEndDate &&
      values.resourceType === 'multiple' &&
      (values.invoiceType === 'blended' || values.invoiceType === 'separate')
    ) {
      errors.projectEndDate = 'Project End Date is required';
    } else if (values.projectEndDate < values.projectStartDate) {
      errors.projectEndDate = 'Project End Date cannot be before the Contract Start Date';
    }


    if (!values.resourceType) {
      errors.resourceType = 'Resource Type is required';
    }

    if (!values.invoiceType && values.resourceType === 'multiple') {
      errors.invoiceType = 'Invoice Type is required';
    }

    return errors;
  }

  const handleResourceTypeChange = async (e) => {
    await formik.handleChange(e);

    // Reset project and contract fields when changing resource type
    formik.setFieldValue('projectStartDate', null);
    formik.setFieldValue('projectEndDate', null);
    formik.setFieldValue('contractStartDate', null);
    formik.setFieldValue('contractEndDate', null);
    formik.setFieldValue('contractCatagory', null);
    formik.setFieldValue('projectCategory', null);

    if (e.target.value === "single") {
      formik.setFieldValue('invoiceType', "");
    }
  };

  const handleInvoiceTypeChange = async (e) => {
    await formik.handleChange(e);

    // Reset project fields when changing invoice type
    formik.setFieldValue('projectStartDate', null);
    formik.setFieldValue('projectEndDate', null);
    formik.setFieldValue('projectCategory', null);
  };

  const showContractFields =
    formik.values.resourceType === 'single' ||
    formik.values.invoiceType === 'multiple' ||
    formik.values.invoiceType === "single" ||
    formik.values.invoiceType === ""


  const showProjectFields =
    formik.values.resourceType === 'multiple' &&
    (formik.values.invoiceType === 'blended' || formik.values.invoiceType === 'separate');


  const renderContractType = (formik) => {
    return (
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
    )

  }

  const renderTotalHoursEstimated = (formik) => {
    return (
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
    )
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


        {showContractFields && <>  <div className='row mt-3'>
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
          {renderContractType(formik)}


        </div>
          <div className='row mt-3'>
            {renderTotalHoursEstimated(formik)}
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
                <label htmlFor='startDate'>Contract Start Date <span className='text-danger'> *</span></label>
                <Calendar
                  id='startDate'
                  name="contractStartDate"
                  value={formik.values.contractStartDate}
                  onChange={(e) => formik.setFieldValue('contractStartDate', e.value)}
                  onBlur={formik.handleBlur}
                  dateFormat="mm/dd/yy"
                  placeholder="MM/DD/YYYY"
                  showIcon
                  className={`date-pick-icon ${formik.errors.contractStartDate && formik.touched.contractStartDate ? 'p-invalid' : ''}`}
                />
                {formik.errors.contractStartDate && formik.touched.contractStartDate && (
                  <small className="p-error">{formik.errors.contractStartDate}</small>
                )}
              </div>

              <div className='col-md-6'>
                <label htmlFor='endDate'>Contract End Date <span className='text-danger'> *</span></label>
                <Calendar
                  id='endDate'
                  name="contractEndDate"
                  value={formik.values.contractEndDate}
                  onChange={(e) => formik.setFieldValue('contractEndDate', e.value)}
                  onBlur={formik.handleBlur}
                  dateFormat="mm/dd/yy"
                  placeholder="MM/DD/YYYY"
                  showIcon
                  className={`date-pick-icon ${formik.errors.contractEndDate && formik.touched.contractEndDate ? 'p-invalid' : ''}`}
                />
                {formik.errors.contractEndDate && formik.touched.contractEndDate && (
                  <small className="p-error">{formik.errors.contractEndDate}</small>
                )}
              </div>
            </div>
          </div> </>}


        {showProjectFields && (<>

          <div className='row mt-3'>
            <div className='flex-auto col-md-6'>
              <label htmlFor='contractCatagory' > Project Catagory <span className='text-danger'> *</span></label>
              <Dropdown
                id="contractCatagory"
                name="projectCategory"
                options={[
                  { label: 'Type Name 1', value: 'type1' },
                  { label: 'Type Name 2', value: 'type2' },
                  { label: 'Type Name 3', value: 'type3' },
                ]}
                value={formik.values.projectCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Select Role"
                className={formik.errors.projectCategory && formik.touched.projectCategory ? 'p-invalid' : ''}
              />
              {formik.errors.projectCategory && formik.touched.projectCategory && (
                <small className="p-error">{formik.errors.projectCategory}</small>
              )}
            </div>
            {renderContractType(formik)}
          </div>
          <div className='row mt-3'>
            {renderTotalHoursEstimated(formik)}
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
                  name="projectStartDate"
                  value={formik.values.projectStartDate}
                  onChange={(e) => formik.setFieldValue('projectStartDate', e.value)}
                  onBlur={formik.handleBlur}
                  dateFormat='mm/dd/yy'
                  placeholder="MM/DD/YY"
                  showIcon
                  className={`date-pick-icon ${formik.errors.projectStartDate && formik.touched.projectStartDate ? 'p-invalid' : ''}`}
                />
                {formik.errors.projectStartDate && formik.touched.projectStartDate && (
                  <small className="p-error">{formik.errors.projectStartDate}</small>
                )}
              </div>
              <div className='col-md-6'>
                <label htmlFor='endDate'>Project End Date <span className='text-danger'> *</span></label>
                <Calendar
                  id='endDate'
                  name="projectEndDate"
                  value={formik.values.projectEndDate}
                  onChange={(e) => formik.setFieldValue('projectEndDate', e.value)}
                  onBlur={formik.handleBlur}
                  dateFormat="mm/dd/yy"
                  placeholder="MM/DD/YY"
                  showIcon
                  className={`date-pick-icon ${formik.errors.projectEndDate && formik.touched.projectEndDate ? 'p-invalid' : ''}`}
                />
                {formik.errors.projectEndDate && formik.touched.projectEndDate && (
                  <small className="p-error">{formik.errors.projectEndDate}</small>
                )}
              </div>
            </div>
          </div>
        </>)}


        <div className='row mt-3'>
          <div className='flex-auto col-md-6'>
            <label>No. of Resources</label>
            <div className="flex justify-content-center gap-3">
              <div className="row">
                <div className="flex-auto col-md-6">
                  <RadioButton
                    id="single"
                    name="resourceType"
                    value="single"
                    onChange={handleResourceTypeChange}
                    checked={formik.values.resourceType === 'single'}
                  />
                  <label htmlFor="single">Single</label>
                </div>
                <div className="flex-auto col-md-6">
                  <RadioButton
                    id="multiple"
                    name="resourceType"
                    value="multiple"
                    onChange={handleResourceTypeChange}
                    checked={formik.values.resourceType === 'multiple'}
                  />
                  <label htmlFor="multiple">Multiple</label>
                </div>
              </div>
              {formik.touched.resourceType && formik.errors.resourceType && (
                <small className="p-error">{formik.errors.resourceType}</small>
              )}
            </div>
          </div>
          {formik.values.resourceType === 'multiple' &&
            <div className='flex-auto col-md-6'>
              <label>Invoice Type</label>
              <div className="flex justify-content-center gap-3">
                <div className="row">
                  <div className="flex-auto col-md-4">
                    <RadioButton
                      id="single"
                      name="invoiceType"
                      value="single"
                      onChange={handleInvoiceTypeChange}
                      checked={formik.values.invoiceType === 'single'}
                    />
                    <label htmlFor="single">Single</label>
                  </div>
                  <div className="flex-auto col-md-4">
                    <RadioButton
                      id="blended"
                      name="invoiceType"
                      value="blended"
                      onChange={handleInvoiceTypeChange}
                      checked={formik.values.invoiceType === 'blended'}
                    />
                    <label htmlFor="blended">Blended</label>
                  </div>
                  <div className="flex-auto col-md-4">
                    <RadioButton
                      id="separate"
                      name="invoiceType"
                      value="separate"
                      onChange={handleInvoiceTypeChange}
                      checked={formik.values.invoiceType === 'separate'}
                    />
                    <label htmlFor="separate">Separate</label>
                  </div>
                </div>
                {formik.touched.invoiceType && formik.errors.invoiceType && (
                  <small className="p-error">{formik.errors.invoiceType}</small>
                )}
              </div>
            </div>
          }
        </div>
      </div>
      <div className="p-mt-4 form-btns">
        <Button label="Next" className=' company-primary-btn' type="submit" />
      </div>
    </form >
  )
}

export default ContractDetails1
