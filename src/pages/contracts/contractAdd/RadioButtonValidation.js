import { useFormik } from 'formik';
import { RadioButton } from 'primereact/radiobutton';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';

const MyForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      wbsCode: '',
      resourceType: 'single',
      invoiceType: '',
      projectStartDate: null,
      projectEndDate: null,
      contractStartDate: null,
      contractEndDate: null,
    },
    validate: (values) => {
      const errors = {};

      if (!values.wbsCode) {
        errors.wbsCode = 'WBS Code is required';
      }

      if (!values.resourceType) {
        errors.resourceType = 'Resource Type is required';
      }

      if (!values.invoiceType && values.resourceType === 'multiple') {
        errors.invoiceType = 'Invoice Type is required';
      }

      if (
        !values.projectStartDate &&
        (values.resourceType === 'single' || values.invoiceType === 'multiple')
      ) {
        errors.projectStartDate = 'Project Start Date is required';
      }

      if (
        !values.projectEndDate &&
        (values.resourceType === 'single' || values.invoiceType === 'multiple')
      ) {
        errors.projectEndDate = 'Project End Date is required';
      }

      if (
        !values.contractStartDate &&
        values.resourceType === 'multiple' &&
        (values.invoiceType === 'blended' || values.invoiceType === 'separate')
      ) {
        errors.contractStartDate = 'Contract Start Date is required';
      }

      if (
        !values.contractEndDate &&
        values.resourceType === 'multiple' &&
        (values.invoiceType === 'blended' || values.invoiceType === 'separate')
      ) {
        errors.contractEndDate = 'Contract End Date is required';
      }

      return errors;
    },
    onSubmit: (values) => {
      // Create a new object to hold only the selected fields
      const selectedValues = {
        wbsCode: values.wbsCode,
        resourceType: values.resourceType,
        invoiceType: values.invoiceType,
      };

      // Conditionally add the relevant fields based on the selected options
      if (values.resourceType === 'single' || values.invoiceType === 'multiple' || values.invoiceType === 'single' ) {
        selectedValues.projectStartDate = values.projectStartDate;
        selectedValues.projectEndDate = values.projectEndDate;
      }

      if (
        values.resourceType === 'multiple' &&
        (values.invoiceType === 'blended' || values.invoiceType === 'separate')
      ) {
        selectedValues.contractStartDate = values.contractStartDate;
        selectedValues.contractEndDate = values.contractEndDate;
      }

      // Handle form submission with selected values
      console.log(selectedValues);
      onNext(0, selectedValues);
    },
  });

  const handleResourceTypeChange = (e) => {
    formik.handleChange(e);

    // Reset project and contract fields when changing resource type
    formik.setFieldValue('projectStartDate', null);
    formik.setFieldValue('projectEndDate', null);
    formik.setFieldValue('contractStartDate', null);
    formik.setFieldValue('contractEndDate', null);
    if(e.target.value === "single"){
      formik.setFieldValue('invoiceType', null);
    }
  };

  const handleInvoiceTypeChange = (e) => {
    formik.handleChange(e);

    // Reset contract fields when changing invoice type
    formik.setFieldValue('contractStartDate', null);
    formik.setFieldValue('contractEndDate', null);
  };

  const showProjectFields =
    formik.values.resourceType === 'single' ||
    formik.values.invoiceType === 'multiple' ||
    formik.values.invoiceType === "single" ||
    formik.values.invoiceType === ""


  const showContractFields =
    formik.values.resourceType === 'multiple' &&
    (formik.values.invoiceType === 'blended' || formik.values.invoiceType === 'separate');

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-field">
        <label htmlFor="wbsCode">WBS Code</label>
        <InputText
          id="wbsCode"
          name="wbsCode"
          value={formik.values.wbsCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.wbsCode && formik.errors.wbsCode && (
          <small className="p-error">{formik.errors.wbsCode}</small>
        )}
      </div>

      {showProjectFields && (
        <>
          <div className="p-field">
            <label htmlFor="projectStartDate">Project Start Date</label>
            <Calendar
              id="projectStartDate"
              name="projectStartDate"
              value={formik.values.projectStartDate}
              onChange={(e) => formik.setFieldValue('projectStartDate', e.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.projectStartDate && formik.errors.projectStartDate && (
              <small className="p-error">{formik.errors.projectStartDate}</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="projectEndDate">Project End Date</label>
            <Calendar
              id="projectEndDate"
              name="projectEndDate"
              value={formik.values.projectEndDate}
              onChange={(e) => formik.setFieldValue('projectEndDate', e.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.projectEndDate && formik.errors.projectEndDate && (
              <small className="p-error">{formik.errors.projectEndDate}</small>
            )}
          </div>
        </>
      )}

      {showContractFields && (
        <>
          <div className="p-field">
            <label htmlFor="contractStartDate">Contract Start Date</label>
            <Calendar
              id="contractStartDate"
              name="contractStartDate"
              value={formik.values.contractStartDate}
              onChange={(e) => formik.setFieldValue('contractStartDate', e.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contractStartDate && formik.errors.contractStartDate && (
              <small className="p-error">{formik.errors.contractStartDate}</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="contractEndDate">Contract End Date</label>
            <Calendar
              id="contractEndDate"
              name="contractEndDate"
              value={formik.values.contractEndDate}
              onChange={(e) => formik.setFieldValue('contractEndDate', e.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contractEndDate && formik.errors.contractEndDate && (
              <small className="p-error">{formik.errors.contractEndDate}</small>
            )}
          </div>
        </>
      )}

      <div className="p-field">
        <label>Resource Type</label>
        <div className="p-formgroup-inline">
          <div className="p-field-radiobutton">
            <RadioButton
              id="single"
              name="resourceType"
              value="single"
              onChange={handleResourceTypeChange}
              checked={formik.values.resourceType === 'single'}
            />
            <label htmlFor="single">Single</label>
          </div>
          <div className="p-field-radiobutton">
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

      {formik.values.resourceType === 'multiple' && (
        <div className="p-field">
          <label>Invoice Type</label>
          <div className="p-formgroup-inline">
            <div className="p-field-radiobutton">
              <RadioButton
                id="single"
                name="invoiceType"
                value="single"
                onChange={handleInvoiceTypeChange}
                checked={formik.values.invoiceType === 'single'}
              />
              <label htmlFor="single">Single</label>
            </div>
            <div className="p-field-radiobutton">
              <RadioButton
                id="blended"
                name="invoiceType"
                value="blended"
                onChange={handleInvoiceTypeChange}
                checked={formik.values.invoiceType === 'blended'}
              />
              <label htmlFor="blended">Blended</label>
            </div>
            <div className="p-field-radiobutton">
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
      )}

     

      <Button type="submit" label="Next" className="p-mt-2" />
    </form>
  );
};

export default MyForm;
