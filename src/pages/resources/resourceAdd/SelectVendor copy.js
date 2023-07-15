import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import * as Yup from 'yup';
import RequiredLabel from '../../../components/RequiredLabel';
import AddSidebarRight from '../../../components/reusable/AddSidebarRight';
import { useEffect } from 'react';
import axios from 'axios';

const SelectVendor = ({ onNext, onPrevious }) => {
    const [vendors, setVendors] = useState([]);
    const [options, setOptions] = useState()

    const formik = useFormik({
        initialValues: {
            selectedVendor: null,
        },
        validationSchema: Yup.object({
            selectedVendor: Yup.string().required('Vendor is required'),
        }),
        onSubmit: (values) => {
            onNext("assignDocuments", values);
            console.log("Form 2", values)
        },
    });

    // const vendorOptions = [
    //     { label: 'Vendor 1', value: 'vendor1' },
    //     { label: 'Vendor 2', value: 'vendor2' },
    //     { label: 'Vendor 3', value: 'vendor3' },
    //     { label: 'Vendor 4', value: 'vendor4' },
    // ];

    const handleAddVendor = () => {
        if (!vendors.includes(formik.values.selectedVendor)) {
            setVendors([...vendors, formik.values.selectedVendor]);
        }
    };

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

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Vendor</h2>
            <div className='flex flex-wrap gap-3 p-fluid'>
                <div className='row mb-2'>
                    <div className='flex-auto col-md-12'>
                        {/* <label htmlFor="selectedVendor">Select Vendor</label> */}
                        <RequiredLabel label="Selected Vendor" required />
                        <Dropdown
                            id="selectedVendor"
                            name="selectedVendor"
                            value={formik.values.selectedVendor}
                            options={options}
                            onChange={(e) => formik.setFieldValue('selectedVendor', e.value)}
                            onBlur={formik.handleBlur}
                            placeholder="Select a vendor"
                        />
                        {formik.touched.selectedVendor && formik.errors.selectedVendor && (
                            <small className="p-error">{formik.errors.selectedVendor}</small>
                        )}

                        {/* Add New Vendor Component  or Select Vendor form above Dropdown*/}
                        <div className='text-end pe-5 mt-2'>
                            {/* <AddSidebarRight sidebarToBeRender={"addVendor"} /> */}
                            <AddSidebarRight sidebarToBeRender={"addCompany"} />

                        </div>
                    </div>
                </div>
            </div>
            <div className='p-mt-4  buttons-container'>
                <Button className='mr-2 company-secondary-btn' label='Previous' onClick={() => onPrevious("resourceForm")} />
                <Button className='company-primary-btn' label='Next' type='submit' />
            </div>
        </form>
    );
};

export default SelectVendor;
