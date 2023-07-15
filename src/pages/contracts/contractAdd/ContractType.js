import React from 'react';
import { useFormik } from 'formik';
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';

function ContractType({onNext}) {

    const formik = useFormik({
        initialValues: {
          resourceType: "",
          invoiceType: ""
        },
        validate: validateForm,
    
        onSubmit: (values) => {
          console.log(values);
          onNext(0, values);
        },
      });
    
    
      function validateForm(values) {
        let errors = {};

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
    
        if (e.target.value === "single") {
          formik.setFieldValue('invoiceType', "");
        }
      };
    
      const handleInvoiceTypeChange = async (e) => {
        await formik.handleChange(e);
      };



  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-wrap gap-3 p-fluid'>
        <h4>Contract Type</h4>
      <div className='row mt-3'>
            <label>No. of Resources</label>
            <div className="flex justify-content-center gap-3">
              <div className="row">
                <div className="flex-auto col-md-3">
                  <RadioButton
                    id="single"
                    name="resourceType"
                    value="single"
                    onChange={handleResourceTypeChange}
                    checked={formik.values.resourceType === 'single'}
                  />
                  <label htmlFor="single">Single</label>
                </div>
                <div className="flex-auto col-md-3">
                  <RadioButton
                    id="multiple"
                    name="resourceType"
                    value="multiple"
                    onChange={handleResourceTypeChange}
                    checked={formik.values.resourceType === 'multiple'}
                  />
                  <label htmlFor="multiple">Multiple</label>
              </div>
              {formik.touched.resourceType && formik.errors.resourceType && (
                <small className="p-error">{formik.errors.resourceType}</small>
              )}
            </div>
          </div>
          {formik.values.resourceType === 'multiple' &&
            <div className='flex-auto mt-4'>
              <label>Invoice Type</label>
              <div className="flex justify-content-center gap-3">
                <div className="row">
                  <div className="flex-auto col-md-3">
                    <RadioButton
                      id="single"
                      name="invoiceType"
                      value="single"
                      onChange={handleInvoiceTypeChange}
                      checked={formik.values.invoiceType === 'single'}
                    />
                    <label htmlFor="single">Single</label>
                  </div>
                  <div className="flex-auto col-md-3">
                    <RadioButton
                      id="blended"
                      name="invoiceType"
                      value="blended"
                      onChange={handleInvoiceTypeChange}
                      checked={formik.values.invoiceType === 'blended'}
                    />
                    <label htmlFor="blended">Blended</label>
                  </div>
                  <div className="flex-auto col-md-3">
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
            </form>
  )
}

export default ContractType