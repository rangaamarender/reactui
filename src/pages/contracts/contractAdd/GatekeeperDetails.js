import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import * as Yup from 'yup';
import RequiredLabel from '../../../components/RequiredLabel';
import AddSidebarRight from '../../../components/reusable/AddSidebarRight';

const GatekeeperDetails = ({ onNext, onPrevious }) => {
  const formik = useFormik({
    initialValues: {
      gatekeeper: null,
    },
    validationSchema: Yup.object({
      gatekeeper: Yup.string().required('gatekeeper is required'),
    }),
    onSubmit: (values) => {
      onNext(2, values);
      console.log("Gatekeeper", values)
    },
  });

  const gatekeeperOptions = [
    { label: 'Gatekeeper 1', value: 'gatekeeper1' },
    { label: 'Gatekeeper 2', value: 'gatekeeper2' },
    { label: 'Gatekeeper 3', value: 'gatekeeper3' },
    { label: 'Gatekeeper 4', value: 'gatekeeper4' },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Vendor</h2>
      <div className='flex flex-wrap gap-3 p-fluid'>
        <div className='row mb-2'>
          <div className='flex-auto col-md-12'>
            {/* <label htmlFor="selectedVendor">Select Vendor</label> */}
            <RequiredLabel label="GateKeeper" required />
            <Dropdown
              id="gatekeeper"
              name="gatekeeper"
              value={formik.values.gatekeeper}
              options={gatekeeperOptions}
              onChange={(e) => formik.setFieldValue('gatekeeper', e.value)}
              onBlur={formik.handleBlur}
              placeholder="Select a vendor"
            />
            {formik.touched.gatekeeper && formik.errors.gatekeeper && (
              <small className="p-error">{formik.errors.gatekeeper}</small>
            )}
            <AddSidebarRight sidebarToBeRender={"addCompany"} />
          </div>
        </div>
      </div>
      <div className='p-mt-4 form-btns'>
        <Button className='mr-2 company-secondary-btn' label='Previous' onClick={() => onPrevious(2)} />
        <Button className='company-primary-btn' label='Next' type='submit' />
      </div>
    </form>
  );
};
export default GatekeeperDetails;